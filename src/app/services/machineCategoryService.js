import { apiSlice } from "../../features/api/apiSlice.js";

const machineCategoryService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMachineCategories: builder.query({
      query: ({ q = "", page = 1, limit = 10, sort_val = 'DESC', table_name = "Name" }) =>
        `admin/machine-category?search=${q}&page=${page}&limit=${limit}&sort_val=${sort_val}&table_name=${table_name}`,
      providesTags: ["Machine-Category"],
    }),
    getMachineCategoryDetail: builder.query({
      query: (id) => `admin/machine-category/${id}`,
      providesTags: ["Machine-Category-Detail"],
    }),
    createMachineCategory: builder.mutation({
      query: (form) => ({
        url: "admin/machine-category",
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Machine-Category"],
    }),
    updateMachineCategory: builder.mutation({
      query: ({ id, form }) => ({
        url: `admin/machine-category/${id}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Machine-Category"],
    }),
    deleteMachineCategory: builder.mutation({
      query: (id) => ({
        url: `admin/machine-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Machine-Category"],
    }),
  }),
});

export const {
  useGetMachineCategoriesQuery,
  useGetMachineCategoryDetailQuery,
  useCreateMachineCategoryMutation,
  useUpdateMachineCategoryMutation,
  useDeleteMachineCategoryMutation,
} = machineCategoryService;
