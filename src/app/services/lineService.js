import { apiSlice } from "../../features/api/apiSlice.js";

export const lineLocationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLines: builder.query({
      query: ({ q = "", page = 1, limit = 10 }) =>
        `/admin/line?search=${q}&page=${page}&limit=${limit}`,
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
  useCreateLineMutation,
  useUpdateLineMutation,
  useDeleteLineMutation,
} = lineLocationApiSlice;
