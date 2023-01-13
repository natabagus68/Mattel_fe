import { apiSlice } from "../../../api/apiSlice.js";

export const machineSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLines: builder.query({
      query: () => "/admin/machine-line",
      providesTags: ["Machine-Line"],
    }),
    getParts: builder.query({
      query: () => "/admin/machine-part",
      providesTags: ["Machine-Part"],
    }),
    getMachines: builder.query({
      query: (lineId = null) =>
        `/admin/machine${lineId !== null ? `?line_id=${lineId}` : ""}`,
      providesTags: ["Machines"],
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
    }),
  }),
});

export const {
  useGetLinesQuery,
  useGetPartsQuery,
  useCreateMachineMutation,
  useGetMachinesQuery,
} = machineSlice;
