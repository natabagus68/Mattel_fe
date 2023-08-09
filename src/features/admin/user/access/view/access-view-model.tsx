import { useState } from "react";
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
    const destroyAcceess = (id: string) => {
        deleteAccess(id);
        refetchAccess();
    };
    const toForm = (id?: string | undefined) => {
        id ? navigate(`${id}/edit`) : navigate("create");
    };
    const toPermission = (id) => {
        navigate(`${config.pathPrefix}user/access/permission/create/${id}`);
    };
    const toAccount = () => navigate("/user/account");
    return {
        dataAccess,
        handleChangeFilter,
        toForm,
        destroyAcceess,
        tableParam,
        toPermission,
        toAccount,
    };
};
