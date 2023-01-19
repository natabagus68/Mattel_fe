import { apiSlice } from "../../../api/apiSlice.js";

export const lineLocationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLines: builder.query({
      query: (page = 1) => `/admin/machine-line?page=${page}&limit=10`,
      providesTags: ["Line-Location"],
    }),
    createLine: builder.mutation({
      query: (form) => ({
        url: `/admin/machine-line`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Line-Location"],
    }),
    updateLine: builder.mutation({
      query: ({ lineId, form }) => ({
        url: `/admin/machine-line/${lineId}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Line-Location"],
    }),
    deleteLine: builder.mutation({
      query: (lineId) => ({
        url: `/admin/machine-line/${lineId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Line-Location"],
    }),
  }),
});

export const {
  useGetLinesQuery,
  useCreateLineMutation,
  useUpdateLineMutation,
  useDeleteLineMutation,
} = lineLocationApiSlice;
