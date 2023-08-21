import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    useDeleteDataAccessMutation,
    useGetDataAccessQuery,
} from "../../../../../app/services/userService";
import { config } from "../../../../../common/utils";
interface IParams {
    q: string | null | undefined;
    page: number;
    sort: string | null | undefined;
    limit: number;
}
export const useAccessUser = () => {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const [modalDelete, setModalDelete] = useState(false)
    const [deleteIdSelected, setDeleteIdSelected] = useState(null)

    const [tableParam, setTableParam] = useState<IParams>({
        q: params.get("q")?.toString(),
        page: 1,
        sort: params.get("sort")?.toString(),
        limit: 10,
    });
    const [deleteAccess, resultDelete] = useDeleteDataAccessMutation();
    const { data: dataAccess, refetch: refetchAccess } =
        useGetDataAccessQuery(tableParam);
    const handleChangeFilter = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setTableParam((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleDelete = (id) => {
        setDeleteIdSelected(id)
        setModalDelete(true)
    }

    const handleCancelDelete = () => {
        setDeleteIdSelected(null)
        setModalDelete(false)
    }
    const onDelete = async () => {
        deleteAccess(deleteIdSelected)
        await refetchAccess()
    }

    const toForm = (id?: string | undefined) => {
        id ? navigate(`${id}/edit`) : navigate("create");
    };
    const toPermission = (id) => {
        navigate(`${config.pathPrefix}user/access/permission/create/${id}`);
    };
    const toAccount = () => navigate("/user/account");
    useEffect(() => {
        refetchAccess();
    }, []);
    return {
        modalDelete,
        dataAccess,
        handleChangeFilter,
        toForm,
        handleDelete,
        handleCancelDelete,
        onDelete,
        tableParam,
        toPermission,
        toAccount,
    };
};
