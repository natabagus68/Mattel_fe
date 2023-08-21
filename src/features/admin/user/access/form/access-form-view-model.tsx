import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useCreateDataAccessMutation,
    useGetDetailDataAccessQuery,
    useUpdateDataAccessMutation,
} from "../../../../../app/services/userService";

export const useAccessForm = () => {
    const { id } = useParams();
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);
    const [failedMessage, setFailedMessage] = useState("Something went terribly wrong");


    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        abbreviation: "",
    });
    const [desable, setDisable] = useState(true);

    const changeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => {
            return {
                ...prev,
                name: e.target.value,
                abbreviation: e.target.value,
            };
        });
    };

    const [stroreAccess, resultStore] = useCreateDataAccessMutation();
    const [updateAccess, resultUpdate] = useUpdateDataAccessMutation();
    const { data: detailAccess } = useGetDetailDataAccessQuery(id);
    const back = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (id) {
            updateAccess({ form, id }).then((result) => {
                if (result && result.error) {
                    const errorMessage = result.error.data.message || "Something went terribly wrong"
                    setModalFailed(true)
                    setFailedMessage(errorMessage)
                } else {
                    setModalSuccess(true)
                }
            }).catch((err) => {
                setModalFailed(true)
            });;
        } else {
            stroreAccess(form).then((result) => {
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

            });;
        }
        // navigate(-1);
    };

    const handleCloseModal = () => {
        setModalConfirm(false);
        setModalFailed(false);
        setModalSuccess(false);
    };


    useEffect(() => {
        if (id && detailAccess) {
            setForm({
                name: detailAccess.data.name,
                abbreviation: detailAccess.data.abbreviation,
            });
        }
    }, [detailAccess]);

    useEffect(() => {
        if (form.name) {
            setDisable(false);
        } else setDisable(true);
    }, [form.name]);
    return {
        id,
        form,
        desable,
        modalConfirm,
        modalSuccess,
        modalFailed,
        failedMessage,
        changeFormValue,
        back,
        handleSubmit,
        handleCloseModal,
        navigate,
        detailAccess,
        handleBack,
    };
};
