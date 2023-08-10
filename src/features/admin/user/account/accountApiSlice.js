import { apiSlice } from "../../../api/apiSlice.js";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page = 1, limit = 10, q = '', table_name = '', role_id = '', sort_val = '' }) => `/admin/user?page=${page}&limit=${limit}&search=${q}&table_name=${table_name}&sort_val=${sort_val}&role_id=${role_id}`,
      providesTags: ["Users"],
    }),
    getUserDetail: builder.query({
      query: (id) => `/admin/user/${id}`,
      providesTags: ["User-detail"],
    }),
    createUser: builder.mutation({
      query: (form) => ({
        url: `/admin/user`,
        method: "POST",
        body: form,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, form }) => ({
        url: `/admin/user/${id}`,
        method: "PUT",
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
  useGetUserDetailQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useVerifyUserMutation,
} = accountApiSlice;
