import { apiSlice } from "../../api/apiSlice";

export const layoutApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLayouts : builder.query({
            query : (page = 1, production_sch = '', week_ending = '', production_shift = '', preparation_shift = '') => `admin/layout?production_sch_date=${production_sch}&week_ending=${week_ending}&production_shift=${production_shift}&preparation_shift=${preparation_shift}&page=${page}&limit=10`,
            providesTags: ['Layouts']
        }),
        updateDrawing : builder.mutation({
            query : ({id, value}) => ({
                url: `/admin/layout/${id}/upload-drawing`,
                method: "POST",
                body:  value ,
            })         
        }),
        showDrawing : builder.query({
            query : (id) => `/admin/layout/${id}`,   
            providesTags: ['drawingById']
        }),
        storeLayout : builder.mutation({
            query : ({line_id, production_sch_date, week_ending, production_shift, preparation_shift,toy_id}) => ({
                url : `/admin/layout`,
                method : 'POST',
                body : {
                    line_id : line_id,
                    toy_id : toy_id,
                    production_sch_date : production_sch_date,
                    week_ending : week_ending,
                    production_shift : production_shift,
                    preparation_shift : preparation_shift
                }
            })
        })
    })
})

export const {
    useGetLayoutsQuery,
    useShowDrawingQuery,
    useUpdateDrawingMutation,
    useStoreLayoutMutation
} = layoutApiSlice