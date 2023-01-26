import { apiSlice } from "../../../api/apiSlice.js";

export const accessApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => `/admin/role`,
      providesTags: ["Roles"],
    }),
    createRole: builder.mutation({
      query: (form) => ({
        url: `/admin/role`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Roles"],
    }),
    updateRole: builder.mutation({
      query: ({ id, form }) => ({
        url: `/admin/role/${id}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Roles"],
    }),
    deleteRole: builder.mutation({
      query: (id) => ({
        url: `/admin/role/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["Roles"],
    }),
    getPermissions: builder.query({
      query: () => `/admin/permission`,
      providesTags: ["Permissions"],
    }),
    storePermissions: builder.mutation({
      query: (form) => ({
        url: `/admin/permission`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Permissions"],
    }),
    getRolesDetail: builder.query({
      query: (roleId) => `/admin/role/${roleId}`,
      providesTags: ["Roles-detail"],
    }),
    updateRolePermissions: builder.mutation({
      query: ({ id, form }) => ({
        url: `/admin/role/${id}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Roles-detail"],
    }),
    getPositions: builder.query({
      query: () => `/admin/position`,
    }),
  }),
});

export const {
  useGetRolesQuery,
  useGetPermissionsQuery,
  useStorePermissionsMutation,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
  useGetRolesDetailQuery,
  useUpdateRolePermissionsMutation,
  useGetPositionsQuery,
} = accessApiSlice;
