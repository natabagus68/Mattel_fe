import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useGetLayoutDetailQuery,
    useStoreLayoutMutation,
    useUpdateLayoutMutation,
} from "../../layoutApiSlice";
import moment from "moment";
import { useGetLinesQuery } from "../../../../../app/services/lineService";
import { useGetToysQuery } from "../../../../../app/services/ToysServices";

export default function useChangeOverSummaryFormModel() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);

    const { data: responLine, isLoading: loadLine } =
        useGetLinesQuery({ limit: 999 });
    const { data: responToy, isLoading: loadToy } =
        useGetToysQuery({ limit: 999 });

    const { data: responDataChangeOverSummary = { data: [] }, refetch } =
        useGetLayoutDetailQuery(id, { skip: id ? false : true });

    const [storeChangeOverSummary, resultStore] = useStoreLayoutMutation();
    const [updateChangeOverSummary, resultUpdate] = useUpdateLayoutMutation();

    const initialValue = {
        created_date: "",
        week_ending: "",
        preparation_date: "",
        production_date: "",
        preparation_shift: "",
        production_shift: "",
        line_id: "",
        toy_number: "",
    };


    const [tempLocation, setTempForm] = useState({
        line: "",
        toy: "",
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
        const value = e.value;
        if (type === "line_id") {
            setFormData((prev) => {
                return {
                    ...prev,
                    line_id: value.id,

                };
            });
            setTempForm((prev) => {
                return {
                    ...prev,
                    line: e.value.name,
                };
            });
        } else if (type === "toy_id") {
            setFormData((prev) => {
                return {
                    ...prev,
                    line_id: value.id,

                };
            });
            setTempForm((prev) => {
                return {
                    ...prev,
                    line: e.value.name,
                };
            });
        }
        else {
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
        updateChangeOverSummary({ id: id, form: formData });
        await refetch();
        setModalConfirm(false);
        setModalSuccess(true);
    };
    const handleSave = async (e) => {
        e.preventDefault();
        id
            ? setModalConfirm(true)
            : (storeChangeOverSummary(formData), setModalSuccess(true));
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
        if (responDataChangeOverSummary) {
            setFormData({
                created_date: moment(responDataChangeOverSummary.data.created_date).format("DD/MM/YYYY"),
                week_ending: moment(responDataChangeOverSummary.data.week_ending).format("DD/MM/YYYY"),
                preparation_date: moment(responDataChangeOverSummary.data.preparation_date).format("DD/MM/YYYY"),
                production_date: moment(responDataChangeOverSummary.data.production_date).format("DD/MM/YYYY"),
                preparation_shift: responDataChangeOverSummary.data.preparation_shift,
                production_shift: responDataChangeOverSummary.data.production_shift,
                line_id: responDataChangeOverSummary.data.line_id,
                toy_number: responDataChangeOverSummary.data.toy_number,
            });
            setTempForm({
                line: responDataChangeOverSummary?.data?.line?.name,
                toy: responDataChangeOverSummary?.data?.toy?.number,
            });
        } else {
            setFormData(initialValue);
        }
    }, [responDataChangeOverSummary.data.id]);

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
        responDataChangeOverSummary,
        shiftData,
        tempLocation,
        responLine,
        responToy,
        loadLine,
        loadToy
    };
}
