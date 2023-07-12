import { apiSlice } from "../../features/api/apiSlice.js";

const lineDeviceService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLineDevices: builder.query({
      query: ({ q = "", limit = 10, page = 1, sort_val = 'DESC', table_name = "Name" }) =>
        `admin/line-device?search=${q}&limit=${limit}&page=${page}&sort_val=${sort_val}&table_name=${table_name}`,
      providesTags: ["Line-Device"],
    }),
    getLineDeviceDetail: builder.query({
      query: (id) => `admin/line-device/${id}`,
      providesTags: ["Line-Device-Detail"],
    }),
    createLineDevice: builder.mutation({
      query: (form) => ({
        url: `admin/line-device`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Line-Device"],
    }),
    updateLineDevice: builder.mutation({
      query: ({ id, form }) => ({
        url: `admin/line-device/${id}`,
        method: "PUT",
        body: form,
      }),
      invalidatesTags: ["Line-Device"],
    }),
    deleteLineDevice: builder.mutation({
      query: (id) => ({
        url: `admin/line-device/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Line-Device"],
    }),
  }),
});

export const {
  useGetLineDevicesQuery,
  useGetLineDeviceDetailQuery,
  useCreateLineDeviceMutation,
  useUpdateLineDeviceMutation,
  useDeleteLineDeviceMutation,
} = lineDeviceService;
