import { apiSlice } from "../../../api/apiSlice.js";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `/admin/user?page=${page}&limit=10`,
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (form) => ({
        url: `/admin/user`,
        method: "POST",
        body: form,
      }),
    }),
    verifyUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/user/${userId}/verify`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useVerifyUserMutation,
} = accountApiSlice;
