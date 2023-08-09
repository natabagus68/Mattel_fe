import { apiSlice } from "../../api/apiSlice";

export const layoutApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLayouts: builder.query({
            query: ({ page = 1, production_sch = '', week_ending = '', production_shift = '', preparation_shift = '', ticket_status = '' }) => `admin/layout?production_sch_date=${production_sch}&week_ending=${week_ending}&production_shift=${production_shift}&preparation_shift=${preparation_shift}&ticket_status=${ticket_status}&page=${page}&limit=10`,
            providesTags: ['Layouts']
        }),
        getLayoutDetail: builder.query({
            query: (id) => `/admin/layout/${id}`,
            providesTags: ['Layouts']
        }),
        updateDrawing: builder.mutation({
            query: ({ id, value }) => ({
                url: `/admin/layout/${id}/upload-drawing`,
                method: "POST",
                body: value,
            })
        }),

        storeLayout: builder.mutation({
            query: ({ line_id, production_sch_date, preparation_sch_date, week_ending, production_shift, preparation_shift, toy_id }) => ({
                url: `/admin/layout`,
                method: 'POST',
                body: {
                    line_id: line_id,
                    toy_id: toy_id,
                    production_sch_date: production_sch_date,
                    preparation_sch_date: preparation_sch_date,
                    week_ending: week_ending,
                    production_shift: production_shift,
                    preparation_shift: preparation_shift
                }
            })
        }),
        updateLayout: builder.mutation({
            query: ({ id, line_id, production_sch_date, preparation_sch_date, week_ending, production_shift, preparation_shift, toy_id }) => ({
                url: `/admin/layout/${id}}`,
                method: 'PUT',
                body: {
                    line_id: line_id,
                    toy_id: toy_id,
                    production_sch_date: production_sch_date,
                    preparation_sch_date: preparation_sch_date,
                    week_ending: week_ending,
                    production_shift: production_shift,
                    preparation_shift: preparation_shift
                }
            })
        }),
        deleteLayout: builder.mutation({
            query: (id) => ({
                url: `/admin/layout/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Layout"],
        }),
    })
})

export const {
    useGetLayoutsQuery,
    useGetLayoutDetailQuery,
    useUpdateDrawingMutation,
    useStoreLayoutMutation,
    useUpdateLayoutMutation,
    useDeleteLayoutMutation,
} = layoutApiSlice