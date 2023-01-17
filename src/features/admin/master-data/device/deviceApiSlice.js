import { apiSlice } from "../../../api/apiSlice.js";

export const deviceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDevices: builder.query({
      query: (page = 1) => `/admin/machine-device?page=${page}&limit=10`,
      providesTags: ["Devices"],
    }),
    createDevice: builder.mutation({
      query: (form) => ({
        url: `/admin/machine-device`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["Devices"],
    }),
    deleteDevice: builder.mutation({
      query: (deviceId) => ({
        url: `/admin/machine-device/${deviceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Devices"],
    }),
  }),
});
export const {
  useGetDevicesQuery,
  useCreateDeviceMutation,
  useDeleteDeviceMutation,
} = deviceApiSlice;
