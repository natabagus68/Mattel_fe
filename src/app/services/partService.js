import { apiSlice } from "../../features/api/apiSlice.js";

export const partApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParts: builder.query({
      query: ({ q = "", limit = 10, page = 1 }) =>
        `/admin/machine-part?search=${q}&page=${page}&limit=${limit}`,
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
  useCreatePartMutation,
  useUpdatePartMutation,
  useDeletePartMutation,
} = partApiSlice;
