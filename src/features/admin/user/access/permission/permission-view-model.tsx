import { useNavigate, useParams } from "react-router-dom";
import {
    useGetDetailDataAccessQuery,
    useGetPermissionDataQuery,
    useUpdatePermissionDataMutation,
} from "../../../../../app/services/userService";
import { useEffect, useState } from "react";
import { Permission } from "../../../../../domain/model/permission";
import { Checklist } from "../../../../../domain/model/checklist";

export const usePermission = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, refetch } = useGetPermissionDataQuery(id);
    const { data: detailAccess } = useGetDetailDataAccessQuery(id);
    const [updatePermission, resultUpdate] = useUpdatePermissionDataMutation();
    const [temp, setTemp] = useState<Permission[]>([]);


    const updateChecklist = async (
        module_id: string,
        permission_id: string | undefined
    ) => {
        await updatePermission({ position_id: id, module_id, permission_id });
        await refetch();
    };
    const toBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (data) {
            const arr = data?.data?.map((item) => {
                return Permission.create({
                    id: item?.id,
                    module: item?.module,
                    permission: item?.permissions?.map((el) => {
                        return Checklist.create({
                            id: el?.id,
                            name: el?.name,
                            active: el?.is_active,
                            disable: el?.is_disabled,
                        });
                    }),
                    child: item?.childs?.map((el) => {
                        return Permission.create({
                            id: el?.id,
                            module: el?.module,
                            permission: el?.permissions?.map((val) => {
                                return Checklist.create({
                                    id: val?.id,
                                    name: val?.name,
                                    active: val?.is_active,
                                    disable: val?.is_disabled,
                                });
                            }),
                            child: [],
                        });
                    }),
                });
            });

            setTemp(arr);
        }

    }, [data]);

    useEffect(() => {
        async function refresh() {
            await refetch();
        }
        refresh();

        //   @ts-ignore
        // setSearchparam((prev) => ({ ...prev, ...paramData }))
    }, [])

    return {
        temp,
        updateChecklist,
        toBack,
        detailAccess
    };
};
