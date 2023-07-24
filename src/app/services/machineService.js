import { apiSlice } from "../../features/api/apiSlice.js";

export const machineSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMachines: builder.query({
      query: ({ q = "", limit = 10, page = 1, sort_val = 'DESC', table_name = "Id" }) =>
        `/admin/machine?search=${q}&page=${page}&limit=${limit}&sort_val=${sort_val}&table_name=${table_name}`,
      providesTags: ["Machines"],
    }),
    getMachine: builder.query({
      query: (machineId) => `/admin/machine/${machineId}`,
      providesTags: ["Machine"],
    }),
    getMachineCatogorySelect: builder.query({
      query: () => `admin/machine-category/?page=1&limit=99999&search=&sort_val=DESC&table_name=Name`
    }),
    createMachine: builder.mutation({
      query: ({ form }) => ({
        url: "/admin/machine",
        method: "POST",
        body: form,
      }),
      //add invalidate query fetch all machine
    }),
    updateMachine: builder.mutation({
      query: ({ id, form }) => ({
        url: `/admin/machine/${id}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Machine"],
    }),
    deleteMachine: builder.mutation({
      query: (machineId) => ({
        url: `/admin/machine/${machineId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Machines"],
    }),
  }),
});

export const {
  useCreateMachineMutation,
  useGetMachinesQuery,
  useGetMachineQuery,
  useUpdateMachineMutation,
  useDeleteMachineMutation,
  useGetMachineCatogorySelectQuery
} = machineSlice;
