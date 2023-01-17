import { apiSlice } from "../../api/apiSlice.js";

export const reportApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReports: builder.query({
      query: ({ role = "", date }) => `/admin/report?role=${role}&date=${date}`,
      providesTags: ["Reports"],
    }),
  }),
});

export const { useGetReports } = reportApiSlice;
