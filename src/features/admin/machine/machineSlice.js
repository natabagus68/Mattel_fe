import { apiSlice } from "../../api/apiSlice.js";

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
    createMachine: builder.mutation({
      query: (form) => ({
        url: "/admin/machine",
        method: "POST",
        body: form,
      }),
      //add invalidate query fetch all machine
    }),
  }),
});

export const { useGetLinesQuery, useGetPartsQuery, useCreateMachineMutation } =
  machineSlice;
