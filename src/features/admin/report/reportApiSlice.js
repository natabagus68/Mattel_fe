import { apiSlice } from "../../api/apiSlice.js";

export const reportApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReports: builder.query({
      query: ({ role = "", date, page }) =>
        `/admin/report?role=${role}&date=${date}&page=${page}`,
      providesTags: ["Reports"],
    }),
  }),
});

export const { useGetReportsQuery } = reportApiSlice;
