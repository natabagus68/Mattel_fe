import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLineGroupsQuery } from "../../../../../app/services/lineGroupService";
import { useGetLineDevicesQuery } from "../../../../../app/services/lineDeviceService";
import {
    useCreateLineMutation,
    useGetLinesDetailQuery,
    useUpdateLineMutation,
} from "../../../../../app/services/lineService";
import moment from "moment";

export default function useLineFormModel() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);

    const { data: responLineGroup, isLoading: loadLineGroup } =
        useGetLineGroupsQuery({ limit: 999 });
    const { data: responLineDevice, isLoading: loadLineDevice } =
        useGetLineDevicesQuery({ limit: 999 });
    const { data: responDataLine = { data: [] }, refetch } =
        useGetLinesDetailQuery(id, { skip: id ? false : true });

    const [storeLine, resultStoreLine] = useCreateLineMutation();
    const [updateLine, resultUpdateLine] = useUpdateLineMutation();

    const initialValue = {
        name: "",
        line_group_id: "",
        line_device_id: "",
    };

    const [tempLocation, setTempLocation] = useState({
        line_group: "",
        line_device: "",
    });
    const [formData, setFormData] = useState(initialValue);
    const handleChangeLineGroup = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                line_group_id: e.value.id,
            };
        });

        setTempLocation((prev) => {
            return {
                ...prev,
                line_group: e.value.name,
            };
        });
    };

    const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {
            return {
                ...prev,
                name: e.target.value,
            };
        });
    };
    const handleChangeLineDevice = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                line_device_id: e.value.id,
            };
        });

        setTempLocation((prev) => {
            return {
                ...prev,
                line_device: e.value.name,
            };
        });
    };

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
    const handleBack = () => {
        navigate(-1);
    };
    const onConfirm = async () => {
        updateLine({ lineId: id, form: formData });
        await refetch();
        setModalConfirm(false);
        setModalSuccess(true);
    };
    const handleSave = async (e) => {
        e.preventDefault();
        id
            ? setModalConfirm(true)
            : (storeLine(formData), setModalSuccess(true));
    };
    const handleCloseModal = () => {
        setModalConfirm(false);
        setModalSuccess(false);
    };

    useEffect(() => {
        async function refresh() {
            console.log(responDataLine);
            id ? await refetch() : null;
        }
        refresh();
    }, []);

    useEffect(() => {
        if (responDataLine) {
            setFormData({
                name: responDataLine?.data.name,
                line_device_id: responDataLine?.data.line_device_id,
                line_group_id: responDataLine?.data.line_group_id,
            });
            setTempLocation({
                line_group: responDataLine?.data?.line_group?.name,
                line_device: responDataLine?.data?.line_device?.name,
            });
        } else setFormData(initialValue);
    }, [responDataLine.data.id]);

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
        handleChangeLineGroup,
        tempLocation,
        onConfirm,
        handleChangeLineDevice,
        responLineDevice,
        loadLineDevice,
        responLineGroup,
        loadLineGroup,
        shiftData,
        onChangeNumber,
    };
}
