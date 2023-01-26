import { apiSlice } from "../api/apiSlice.js";

export const employeesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "employees",
      providesTags: ["Employee"],
    }),
    storeEmployees: builder.mutation({
      query: (form) => ({
        url: "employees",
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Employee"],
    }),
    getEmployeeById: builder.query({
      query: (employeeId) => `employees/${employeeId}`,
    }),
    getDivisions: builder.query({
      query: () => "divisions",
    }),
    getPositions: builder.query({
      query: () => "position",
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetDivisionsQuery,
  useGetPositionsQuery,
  useGetEmployeeByIdQuery,
} = employeesApiSlice;
// export const selectAuthenticatedUser = employeesApiSlice.endpoints.getAuthenticatedUser.select();
