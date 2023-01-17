import { apiSlice } from "../../../api/apiSlice.js";

export const manpowerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getManPowerGraph: builder.query({
      query: ({ role = "", month = 1, year = 2023 }) =>
        `/admin/dashboard/manpower-graph?role=${role}&month=${
          month + 1
        }&year=${year}`,
      providesTags: ["Manpower-Graph"],
    }),
  }),
});

export const { useGetManPowerGraphQuery } = manpowerApiSlice;
