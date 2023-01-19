import { apiSlice } from "../../../api/apiSlice.js";

export const generalDashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResponseTime: builder.query({
      query: () => `/admin/dashboard/top5-response-time`,
      providesTags: ["Top-5-Response-Time"],
    }),
    getRepairTime: builder.query({
      query: () => `/admin/dashboard/top5-repair-time`,
      providesTags: ["Top-5-Repair-Time"],
    }),
  }),
});

export const { useGetResponseTimeQuery, useGetRepairTimeQuery } =
  generalDashboardApiSlice;
