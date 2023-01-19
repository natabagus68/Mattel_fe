import { apiSlice } from "../../../api/apiSlice.js";

export const mechanicApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMechanics: builder.query({
      query: ({ page, availability }) =>
        `/admin/monitoring/mechanic?availability=${availability}&page=${page}&limit=10`,
      providesTags: ["Mechanic"],
    }),
  }),
});

export const { useGetMechanicsQuery } = mechanicApiSlice;
