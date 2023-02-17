import { apiSlice } from "../../features/api/apiSlice.js";

export const partApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParts: builder.query({
      query: (page = 1) => `/admin/machine-part?page${page}&limit=10`,
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
