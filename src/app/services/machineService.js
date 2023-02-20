import { apiSlice } from "../../features/api/apiSlice.js";

export const machineSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMachines: builder.query({
      query: ({ q = "", limit = 10, page = 1 }) =>
        `/admin/machine?search=${q}&page=${page}&limit=${limit}`,
      providesTags: ["Machines"],
    }),
    getMachine: builder.query({
      query: (machineId) => `/admin/machine/${machineId}`,
      providesTags: ["Machine"],
    }),
    createMachine: builder.mutation({
      query: (form) => ({
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
} = machineSlice;
