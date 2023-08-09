import { apiSlice } from "../../features/api/apiSlice";

export const positionApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosition: builder.query({
            query: () => `admin/position?page=1&limit=999999&search=&sort_val=DESC&table_name=UpdatedAt`
        })
    })
})

export const {
    useGetAllPositionQuery
} = positionApiSlice