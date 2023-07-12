import { apiSlice } from "../../features/api/apiSlice.js";

export const partApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParts: builder.query({
      query: ({ q = "", limit = 10, page = 1, sort_val = 'DESC', table_name = "Name"}) =>
        `/admin/machine-part?search=${q}&page=${page}&limit=${limit}&sort_val=${sort_val}&table_name=${table_name}`,
      providesTags: ["Parts"],
    }),
    getPartsDetail: builder.query({
      query: (id) =>
        `/admin/machine-part/${id}`,
      providesTags: ["Parts"],
    }),
    createPart: builder.mutation({
      query: (form) => ({
        url: `/admin/machine-part`,
        method: "POST",
        body: form,
      }),
    }),
    updatePart: builder.mutation({
      query: ({ id, form }) => {
        return {
          url: `/admin/machine-part/${id}`,
          method: "PUT",
          body: form,
        };
      },
    }),
    deletePart: builder.mutation({
      query: (partId) => ({
        url: `/admin/machine-part/${partId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Parts"],
    }),
  }),
});

export const {
  useGetPartsQuery,
  useGetPartsDetailQuery,
  useCreatePartMutation,
  useUpdatePartMutation,
  useDeletePartMutation,
} = partApiSlice;
