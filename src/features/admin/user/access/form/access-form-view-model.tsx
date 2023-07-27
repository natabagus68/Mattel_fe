import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useCreateDataAccessMutation,
    useGetDetailDataAccessQuery,
    useUpdateDataAccessMutation,
} from "../../../../../app/services/userService";

export const useAccessForm = () => {
    const { id } = useParams();
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
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (id) {
            updateAccess({ form, id });
        } else {
            stroreAccess(form);
        }
        navigate(-1);
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
        changeFormValue,
        back,
        handleSubmit,
        navigate,
        detailAccess,
    };
};
