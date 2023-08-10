import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useCreateMachineMutation,
    useGetMachineQuery,
    useUpdateMachineMutation,
} from "../../../../../app/services/machineService";
import { useGetLinesQuery } from "../../../../../app/services/lineService";
import { useGetMachineCategoriesQuery } from "../../../../../app/services/machineCategoryService";
import { useGetPartsQuery } from "../../../../../app/services/partService";
import moment from "moment";

export default function useMachineFormModel() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);
    const [failedMessage, setFailedMessage] = useState("Something went terribly wrong");

    const { data: responLine, isLoading: loadLine } = useGetLinesQuery({
        limit: 999,
    });
    const { data: responMachineCategory, isLoading: loadMachineCategory } =
        useGetMachineCategoriesQuery({ limit: 999 });
    const { data: responMachineParts, isLoading: loadMachineParts } =
        useGetPartsQuery({ limit: 999 });
    const { data: responDataMachine = { data: [] }, refetch } =
        useGetMachineQuery(id, { skip: id ? false : true });

    const [storeLine, resultStore] = useCreateMachineMutation();
    const [updateLine, resultUpdate] = useUpdateMachineMutation();

    const initialValue = {
        code: "",
        number: "",
        asset_number: "",
        line_id: "",
        machine_category_id: "",
        condition: "",
    };

    const [tempForm, setTempForm] = useState({
        machine_name: "",
        line_name: "",
    });
    const [formData, setFormData] = useState(initialValue);

    const [machineParts, setMachineParts] = useState([
        {
            id: 1,
            value: "",
        },
    ]);

    const [shiftData, setShiftData] = useState("");

    const handleShift = () => {
        const currentTime = moment();
        const shift1Start = moment().set({ hour: 22, minute: 40 });
        const shift1Continues = moment().set({ hour: 0, minute: 0 });
        const shift2Start = moment().set({ hour: 7, minute: 10 });
        const shift3Start = moment().set({ hour: 15, minute: 40 });

        if (
            (currentTime.isAfter(shift1Start) &&
                currentTime.isBefore(shift2Start)) ||
            (currentTime.isAfter(shift1Continues) &&
                currentTime.isBefore(shift2Start)) ||
            currentTime.isSame(shift1Start)
        ) {
            setShiftData("Shift 1");
        } else if (
            (currentTime.isAfter(shift2Start) &&
                currentTime.isBefore(shift3Start)) ||
            currentTime.isSame(shift2Start)
        ) {
            setShiftData("Shift 2");
        } else if (
            (currentTime.isAfter(shift3Start) &&
                currentTime.isBefore(shift1Start)) ||
            currentTime.isSame(shift3Start)
        ) {
            setShiftData("Shift 3");
        } else {
            // If none of the shifts match, return a default value
            setShiftData("Unknown Shift");
        }
    };

    const handleChangeMachinePart = (id, value) => {
        const newState = machineParts.map((obj) => {
            // 👇️ if id equals 2 replace object
            if (obj.id === id) {
                return { id: id, value: value };
            }

            // 👇️ otherwise return the object as is
            return obj;
        });
        setMachineParts(newState);
    };

    const handleAddMachineParts = () => {
        setMachineParts((prev) => [
            ...prev,
            {
                id: !isNaN(prev[prev.length - 1]?.id)
                    ? prev[prev.length - 1]?.id + 1
                    : 1,
                value: "",
            },
        ]);
    };

    const handleDeleteMachineParts = (id) => {
        setMachineParts((prev) => {
            return prev.filter((item) => item.id !== id);
        });
    };

    const handleChangeForm = (e, type?) => {
        const obj = e.value;
        if (type === "machine_category_id") {
            setFormData((prev) => ({
                ...prev,
                machine_category_id: obj.id,
                code: obj.abbreviation,
            }));
            setTempForm((prev) => {
                return {
                    ...prev,
                    machine_name: obj.name,
                };
            });
        } else if (type === "line_id") {
            setFormData((prev) => ({
                ...prev,
                line_id: obj.id,
            }));
            setTempForm((prev) => {
                return {
                    ...prev,
                    line_name: obj.line_group.name + obj.name,
                };
            });
        } else {
            setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleBack = () => {
        navigate(-1);
    };
    const onConfirm = async () => {
        updateLine({
            id: id,
            form: {
                ...formData,
                part: machineParts.map((item) => {
                    return item.value;
                }),
            },
        }).then((result) => {
            if (result && result.error) {
                const errorMessage = result.error.data.message || "Something went terribly wrong"
                setModalFailed(true)
                setFailedMessage(errorMessage)
            }
        }).catch((err) => {
            setModalFailed(true)
        });
        await refetch();
        setModalConfirm(false);
        setModalSuccess(true);
    };
    const handleSave = async (e) => {
        e.preventDefault();
        id
            ? setModalConfirm(true)
            : (storeLine({
                form: {
                    ...formData,
                    part: machineParts.map((item) => {
                        return item.value;
                    }),
                },
            }).then((result) => {
                console.log({ result })
                if (result && result.error) {
                    const errorMessage = result.error.data.message || "Something went terribly wrong"
                    setModalFailed(true)
                    setFailedMessage(errorMessage)
                } else {
                    setModalSuccess(true)
                }
            }).catch((err) => {
                setModalFailed(true)

            }));
    };
    const handleCloseModal = () => {
        setModalConfirm(false);
        setModalSuccess(false);
        setModalFailed(false);
    };

    const handleValidation = async (e) => {
        e.preventDefault();

        console.log("data = ", formData)

        if (formData.number == undefined) {
            setModalFailed(true)
            setFailedMessage("Machine Number must be filled")
        } else if (formData.number.toString().length > 3) {
            setModalFailed(true)
            setFailedMessage("Machine Number length Not More Than 3")
        } else if (formData.machine_category_id == undefined) {
            setModalFailed(true)
            setFailedMessage("Machine Category must be filled")
        } else if (formData.line_id == undefined) {
            setModalFailed(true)
            setFailedMessage("Line must be filled")
        }
        else {
            handleSave(e);
        }

    }

    useEffect(() => {
        async function refresh() {
            id ? await refetch() : null;
        }
        refresh();
    }, [id]);

    useEffect(() => {
        responDataMachine
            ? (setFormData({
                code: responDataMachine?.data.code,
                number: responDataMachine?.data.number,
                asset_number: responDataMachine?.data.asset_number,
                condition: responDataMachine?.data.condition,
                line_id: responDataMachine?.data.line_id,
                machine_category_id:
                    responDataMachine?.data.machine_category_id,
            }),
                setTempForm({
                    machine_name: responDataMachine?.data?.machine_category?.name,
                    line_name: responDataMachine?.data?.line?.line_group?.name != undefined || responDataMachine?.data?.line?.name != undefined ? responDataMachine?.data?.line?.line_group?.name + responDataMachine?.data?.line?.name : 'Choose Line Location',
                }),
                responDataMachine?.data.machine_parts
                    ? setMachineParts(
                        responDataMachine?.data.machine_parts?.map(
                            (item, i) => {
                                return {
                                    id: i,
                                    value: item.id,
                                };
                            }
                        )
                    )
                    : setMachineParts([{ id: 1, value: "" }]))
            : null;
    }, [responDataMachine.data.code]);

    useEffect(() => {
        handleShift();
    }, []);

    return {
        id,
        modalConfirm,
        modalSuccess,
        modalFailed,
        failedMessage,
        handleBack,
        handleCloseModal,
        handleSave,
        formData,
        handleChangeForm,
        handleValidation,
        onConfirm,
        responDataMachine,
        responMachineCategory,
        loadMachineCategory,
        responLine,
        loadLine,
        responMachineParts,
        loadMachineParts,
        machineParts,
        handleDeleteMachineParts,
        handleAddMachineParts,
        handleChangeMachinePart,
        shiftData,
        tempForm,
    };
}
