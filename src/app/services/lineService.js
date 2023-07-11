import { apiSlice } from "../../features/api/apiSlice.js";

export const lineLocationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLines: builder.query({
      query: ({ q = "", page = 1, limit = 10,sort_val = 'DESC', table_name = "Name" }) =>
        `/admin/line?search=${q}&page=${page}&limit=${limit}&sort_val=${sort_val}&table_name=${table_name}`,
      providesTags: ["Line"],
    }),
    getLinesDetail: builder.query({
      query: (id) =>
        `/admin/line/${id}`,
      providesTags: ["Line"],
    }),
    createLine: builder.mutation({
      query: (form) => ({
        url: `/admin/line`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Line"],
    }),
    updateLine: builder.mutation({
      query: ({ lineId, form }) => ({
        url: `/admin/line/${lineId}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Line"],
    }),
    deleteLine: builder.mutation({
      query: (lineId) => ({
        url: `/admin/line/${lineId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Line"],
    }),
  }),
});

export const {
  useGetLinesQuery,
  useGetLinesDetailQuery,
  useCreateLineMutation,
  useUpdateLineMutation,
  useDeleteLineMutation,
} = lineLocationApiSlice;
