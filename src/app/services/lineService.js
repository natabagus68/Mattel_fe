import { apiSlice } from "../../features/api/apiSlice.js";

export const lineLocationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLines: builder.query({
      query: (page = 1) => `/admin/line?page=${page}&limit=10`,
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
