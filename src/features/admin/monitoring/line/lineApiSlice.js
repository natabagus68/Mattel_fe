import { apiSlice } from "../../../api/apiSlice.js";

export const lineSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMonitoringData: builder.query({
      query: (line = "Line A") => `/admin/monitoring/?line=${line}`,
      providesTags: ["Monitoring-Line"],
    }),
  }),
});

export const { useGetMonitoringDataQuery } = lineSlice;
