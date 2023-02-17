import { apiSlice } from "../../features/api/apiSlice.js";

const lineGroupService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLineGroups: builder.query({
      query: () => `admin/line-group`,
      providesTags: ["Line-Group"],
    }),
    getLineGroupDetail: builder.query({
      query: (id) => `admin/line-group/${id}`,
      providesTags: ["Line-Group-Detail"],
    }),
    createLineGroup: builder.mutation({
      query: (data) => ({
        url: `admin/line-group`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Line-Group"],
    }),
    updateLineGroup: builder.mutation({
      query: ({ id, form }) => ({
        url: `admin/line-group/${id}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Line-Group"],
    }),
    deleteLineGroup: builder.mutation({
      query: (id) => ({
        url: `admin/line-group/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Line-Group"],
    }),
  }),
});

export const {
  useGetLineGroupsQuery,
  useGetLineGroupDetailQuery,
  useCreateLineGroupMutation,
  useUpdateLineGroupMutation,
  useDeleteLineGroupMutation,
} = lineGroupService;
