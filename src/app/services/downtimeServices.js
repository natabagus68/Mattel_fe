import { apiSlice } from "../../features/api/apiSlice";


export const downtimeApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getDowntime : builder.query({
            query : ({q = '', page = 1, limit = 10, sort_val = 'DESC', table_name = "DowntimeReason"}) => 
            `admin/downtime?page=${page}&limit=${limit}&search=${q}&sort_val=${sort_val}&table_name=${table_name}`,
            providesTags : ['DownTimes']
        }),
        getDowntimeDetail : builder.query({
            query : (id) => `admin/downtime/${id}`,
            providesTags : ['DowntimeDetail']
        }),
        storeDowntime : builder.mutation({
            query : (form) => ({
                url : `admin/downtime`,
                method : 'POST',
                body : form
            })
        }),
        updateDowntime : builder.mutation({
            query : ({id, form}) => ({
                url : `admin/downtime/${id}`,
                method : 'PUT',
                body : form
            })
        }),
        deleteDowntime : builder.mutation({
            query : (id) => ({
                url : `admin/downtime/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags : ['Delete']
        })
    })
})

export const {
    useGetDowntimeQuery,
    useGetDowntimeDetailQuery,
    useStoreDowntimeMutation,
    useUpdateDowntimeMutation,
    useDeleteDowntimeMutation
} = downtimeApiSlice