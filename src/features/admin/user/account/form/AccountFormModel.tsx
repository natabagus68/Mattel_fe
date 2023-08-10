import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useGetUserDetailQuery,
    useUpdateUserMutation,
} from "../accountApiSlice";
import moment from "moment";
import { useGetDataAccessQuery } from "../../../../../app/services/userService";
import { useGetAllRoleQuery } from "../../../../../app/services/roleService";
import { AccountForm } from "../../../../../domain/model/account-form";
import { useCreateUserMutation } from "../accountApiSlice";

export default function useAccountFormModel() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);
    const [failedMessage, setFailedMessage] = useState("Something went terribly wrong");

    const [openView, setOpenView] = useState(false);
    const [form, setForm] = useState<AccountForm>(
        AccountForm.create({
            name: "",
            email: "",
            kpk: "",
            password: "",
            role: "",
            position: "",
            file: undefined,
        })
    );
    const handelOpenImage = () => {
        setOpenView(!openView);
    };
    const [imgURL, setImgURL] = useState<string | undefined>(undefined);
    const onChangeInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm((prevState) => {
            return AccountForm.create({
                ...prevState.unmarshall(),
                [e.target.name]: e.target.value,
            });
        });
    };

    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prevState) => {
            return AccountForm.create({
                ...prevState.unmarshall(),
                file: e.target.files?.[0],
            });
        });

        const file: any = e.target.files?.[0];
        const url = URL.createObjectURL(file);
        setImgURL(url);
    };
    const removeImage = () => {
        setForm((prevState) => {
            return AccountForm.create({
                ...prevState.unmarshall(),
                file: undefined,
            });
        });

        setImgURL("");
    };
    const { data: responDataUser, refetch } = useGetUserDetailQuery(id, {
        skip: id ? false : true,
    });
    const { data: responDataPosition, refetchPosition } = useGetDataAccessQuery(
        { limit: 999 }
    );
    const { data: responseDataRole, refetch: refectRole } =
        useGetAllRoleQuery();

    const [updateUser, { data: resultUpdate, error: errorUpdate }] =
        useUpdateUserMutation();
    const [storeUser, { data: resultStore, error: errorStore }] =
        useCreateUserMutation();

    const onPageBack = () => navigate(-1);

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

    const onButtonSave = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setModalConfirm(true);
    };

    const handleCloseModal = () => {
        setModalConfirm(false);
        setModalFailed(false);
        setModalSuccess(false);
    };

    const onConfirm = async () => {
        const data = new FormData();
        data.append("name", form.name);
        data.append("kpk", form.kpk);
        data.append("email", form.email);
        data.append("password", form.password);
        data.append("position", form.position);
        data.append("role", form.role);
        data.append("file", form.file);
        data.append("phone", "");
        if (!!id) {
            await updateUser({ id, form: data }).then((result) => {
                if (result && result.error) {
                    const errorMessage = result.error.data.message || "Something went terribly wrong"
                    setModalFailed(true)
                    setFailedMessage(errorMessage)
                } else {
                    setModalConfirm(false);
                    setModalSuccess(true);
                }
            }).catch((err) => {
                setModalConfirm(false);
                setModalFailed(true)
            });;


        } else {
            await storeUser(data).then((result) => {
                if (result && result.error) {
                    const errorMessage = result.error.data.message || "Something went terribly wrong"
                    setModalFailed(true)
                    setFailedMessage(errorMessage)
                } else {
                    setModalConfirm(false);
                    setModalSuccess(true);
                }
            }).catch((err) => {
                setModalConfirm(false);
                setModalFailed(true)
            });;
        }
    };
    useEffect(() => {
        if (!!id && !!responDataUser) {
            setForm((prevState) => {
                return AccountForm.create({
                    ...prevState.unmarshall(),
                    name: responDataUser?.data?.name ?? "",
                    email: responDataUser?.data?.email ?? "",
                    kpk: responDataUser?.data?.employee?.kpk ?? "",
                    password: responDataUser?.data?.password ?? "",
                    role: responDataUser?.data?.roles[0]?.id ?? "",
                    position: responDataUser?.data?.positions[0]?.id ?? "",
                    file: responDataUser?.data?.photo ?? "",
                });
            });

            setImgURL(responDataUser?.data?.photo ?? "");
        }
    }, [id, responDataUser]);

    useEffect(() => {
        handleShift();
    }, []);

    return {
        id,
        form,
        shiftData,
        responseDataRole,
        responDataPosition,
        imgURL,
        modalConfirm,
        modalSuccess,
        modalFailed,
        failedMessage,
        openView,
        removeImage,
        onPageBack,
        onChangeInput,
        onChangeImage,
        onButtonSave,
        handleCloseModal,
        onConfirm,
        handelOpenImage,
    };
}
