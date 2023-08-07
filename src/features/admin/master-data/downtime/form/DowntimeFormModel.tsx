import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useDeleteDowntimeMutation,
    useGetDowntimeDetailQuery,
    useStoreDowntimeMutation,
    useUpdateDowntimeMutation,
} from "../../../../../app/services/downtimeServices";
import { useGetMachineCategoriesQuery } from "../../../../../app/services/machineCategoryService";
import moment from "moment";

export default function useDowntimeFormModel() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);

    const { data: responMachineCategory, isLoading: loadMachineCategory } =
        useGetMachineCategoriesQuery({ limit: 999 });
    const { data: responDataDowntime = { data: [] }, refetch } =
        useGetDowntimeDetailQuery(id, { skip: id ? false : true });

    const [storeDowntime, resultStore] = useStoreDowntimeMutation();
    const [updateDowntime, resultUpdate] = useUpdateDowntimeMutation();

    const initialValue = {
        downtime_reason: "",
        standard_repair_time: "",
        machine_category_id: "",
        abbreviation: "",
    };
    const [machineCategory, setMachineCategory] = useState({
        name: "",
    });
    const [formData, setFormData] = useState(initialValue);

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

    const handleChangeForm = (e, type?: string) => {
        if (type === "machine_category_id") {
            const value = e.value;
            setFormData((prev) => {
                return {
                    ...prev,
                    machine_category_id: value.id,
                    abbreviation: value.abbreviation,

                };
            });
            setMachineCategory({
                name: value.name,
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
        updateDowntime({ id: id, form: formData });
        await refetch();
        setModalConfirm(false);
        setModalSuccess(true);
    };
    const handleSave = async (e) => {
        e.preventDefault();
        id
            ? setModalConfirm(true)
            : (storeDowntime(formData), setModalSuccess(true));
    };
    const handleCloseModal = () => {
        setModalConfirm(false);
        setModalSuccess(false);
    };

    useEffect(() => {
        async function refresh() {
            id ? await refetch() : null;
        }
        refresh();
    }, [id]);

    useEffect(() => {
        if (responDataDowntime) {
            setFormData({
                machine_category_id:
                    responDataDowntime.data.machine_category_id,
                abbreviation:
                    responDataDowntime.data.machine_category?.abbreviation,
                downtime_reason: responDataDowntime.data.downtime_reason,
                standard_repair_time:
                    responDataDowntime.data.standard_repair_time,

            });
            setMachineCategory({
                name: responDataDowntime?.data?.machine_category?.name,
            });
        } else {
            setFormData(initialValue);
        }
    }, [responDataDowntime.data.downtime_reason]);

    useEffect(() => {
        handleShift();
    }, []);

    return {
        id,
        modalConfirm,
        modalSuccess,
        handleBack,
        handleCloseModal,
        handleSave,
        formData,
        handleChangeForm,
        onConfirm,
        responMachineCategory,
        loadMachineCategory,
        responDataDowntime,
        shiftData,
        machineCategory,
    };
}
