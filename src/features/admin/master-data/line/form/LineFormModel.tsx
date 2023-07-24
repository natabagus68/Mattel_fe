import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLineGroupsQuery } from "../../../../../app/services/lineGroupService";
import { useGetLineDevicesQuery } from "../../../../../app/services/lineDeviceService";
import {
    useCreateLineMutation,
    useGetLinesDetailQuery,
    useUpdateLineMutation,
} from "../../../../../app/services/lineService";

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
            id ? await refetch() : null;
        }
        refresh();
    }, [id]);

    useEffect(() => {
        responDataLine
            ? setFormData({
                  name: responDataLine?.data.name,
                  line_device_id: responDataLine?.data.line_device_id,
                  line_group_id: responDataLine?.data.line_group_id,
              })
            : setFormData(initialValue);
    }, [responDataLine.data.id]);

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
        onChangeNumber,
    };
}
