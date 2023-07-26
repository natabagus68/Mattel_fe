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
        })
    })
})

export const {
    useGetDataAccessQuery,
    useCreateDataAccessMutation,
    useUpdateDataAccessMutation,
    useGetDetailDataAccessQuery,
    useDeleteDataAccessMutation
} = userApiSlice