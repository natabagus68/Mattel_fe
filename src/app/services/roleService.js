import { apiSlice } from "../../features/api/apiSlice";

export const roleSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllRole: builder.query({
            query: () => `admin/role`
        }),
        getEngineerRole: builder.query({
            query: () => `admin/role/engineer`
        }),
    }),
});

export const {
    useGetAllRole,
    useGetEngineerRole
} = roleSlice