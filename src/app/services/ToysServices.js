import { apiSlice } from "../../features/api/apiSlice";


export const toysApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getToys : builder.query({
            query : ({q = '', page = 1, limit = 10, sort_val = 'DESC', table_name = "Number"}) => 
            `admin/toy?page=${page}&limit=${limit}&search=${q}&sort_val=${sort_val}&table_name=${table_name}`,
            providesTags : ["Toys"]
        }),
        getToyDetail : builder.query({
            query : (id) => `admin/toy/${id}`,
            providesTags : ['ToysDetail']
        }),
        storeToyNumber : builder.mutation({
            query : (form) => ({
                url : `admin/toy`,
                method : 'POST',
                body : form,
            }),
            invalidatesTags: ["Toy"],
        }),
        updateToyNumber : builder.mutation({
            query : ({id, form}) => ({
                url : `admin/toy/${id}`,
                method : 'PUT',
                body : {
                    number : form.number
                }
            }),
            invalidatesTags: ["Toy"],
        }),
        deleteToyNumber : builder.mutation({
            query : (id) => ({
                url : `admin/toy/${id}`,
                method : "DELETE"
            }),
            invalidatesTags: ["Toy"],
        })
    })
})

export const {
    useGetToysQuery,
    useGetToyDetailQuery,
    useStoreToyNumberMutation,
    useUpdateToyNumberMutation,
    useDeleteToyNumberMutation
} = toysApiSlice