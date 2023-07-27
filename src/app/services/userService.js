import { apiSlice } from "../../features/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDataAccess: builder.query({
            query: ({ q = '', page = 1, sort = '', limit = 10 }) => `admin/position?page=${page}&limit=${limit}&search=${q}&sort_val=${sort}&table_name=UpdatedAt`,
            providesTags: ["access"]
        }),
        createDataAccess: builder.mutation({
            query: (form) => ({
                url: `admin/position`,
                method: 'POST',
                body: form
            }),
            invalidatesTags: ["access"]
        }),
        updateDataAccess: builder.mutation({
            query: ({ form, id }) => ({
                url: `admin/position/${id}`,
                method: 'PUT',
                body: form
            })
        }),
        getDetailDataAccess: builder.query({
            query: (id) => `admin/position/${id}`
        }),

        deleteDataAccess: builder.mutation({
            query: (id) => ({
                url: `admin/position/${id}`,
                method: "DELETE"
            })
        }),
        getPermissionData: builder.query({
            query: (id) => `admin/position/${id}/module-permission`
        }),
        updatePermissionData: builder.mutation({
            query: ({ position_id, module_id, permission_id }) => ({
                url: `admin/position/${position_id}/module-permission/${module_id}/${permission_id}`,
                method: 'PUT'
            })
        })
    })
})

export const {
    useGetDataAccessQuery,
    useCreateDataAccessMutation,
    useUpdateDataAccessMutation,
    useGetDetailDataAccessQuery,
    useDeleteDataAccessMutation,
    useGetPermissionDataQuery,
    useUpdatePermissionDataMutation
} = userApiSlice