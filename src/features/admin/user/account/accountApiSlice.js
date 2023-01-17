import { apiSlice } from "../../../api/apiSlice.js";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `/admin/user?page=${page}&limit=10`,
      providesTags: ["Users"],
    }),
    verifyUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/user/${userId}`,
        method: "PUT",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useVerifyUserMutation } = accountApiSlice;
