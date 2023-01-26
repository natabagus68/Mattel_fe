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
      providesTags: ["Positions"],
    }),
    getPositionDetail: builder.query({
      query: (id) => `/admin/position/${id}`,
      providesTags: ["Position-detail"],
    }),
    createPosition: builder.mutation({
      query: (form) => ({
        url: `/admin/position`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Positions"],
    }),
    deletePosition: builder.mutation({
      query: (id) => ({
        url: `/admin/position/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Positions"],
    }),
    updatePosition: builder.mutation({
      query: ({ id, form }) => ({
        url: `/admin/position/${id}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Positions", "Position-detail"],
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
  useGetPositionDetailQuery,
  useCreatePositionMutation,
  useUpdatePositionMutation,
  useDeletePositionMutation,
} = accessApiSlice;
