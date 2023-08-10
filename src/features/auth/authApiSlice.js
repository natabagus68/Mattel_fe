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
          // localStoragesidebar.setItem("token", data.token);
          sessionStorage.setItem("token", data.token);
          console.log(data.token);
          window.location.reload();
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: ["Auth-me"],
    }),
    me: builder.query({
      query: () => ({ url: "/admin/me" }),
      providesTags: ["Auth-me"],
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // localStorage.setItem(
          sessionStorage.setItem(
            "permission",
            JSON.stringify(
              data?.data?.positions?.[0]?.permissions?.map((el) =>
                el?.name.toLowerCase()
              )
            )
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = authApiSlice;
