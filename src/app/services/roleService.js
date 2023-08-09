import { apiSlice } from "../../features/api/apiSlice";

export const roleService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllRole: builder.query({
            query: () => `admin/role`
        }),
        getEngineerRole: builder.query({
            query: () => `admin/role/engineer`
        })
    })
});

export const {
    useGetAllRoleQuery,
    useGetEngineerRoleQuery
} = roleService