import { apiSlice } from "../api/apiSlice.js";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (form) => ({
        url: "admin/login",
        method: "POST",
        body: form,
      }),
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.token);
          console.log(data.token);
          // window.location.reload();
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
