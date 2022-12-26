import { apiSlice } from "../../features/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAuthenticatedUser: builder.query({
            query: () => ({ url: "_/auth/me" }),
            providesTags: ["Auth"],
        }),
        login: builder.mutation({
            query: (data) => ({
                url: `_/auth/login`,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem("token", data.token);
                    window.location.reload();
                } catch (e) {
                    console.log(e);
                }
            },
        }),
        logout: builder.mutation({
            query: (body) => ({
                url: `_/auth/logout`,
                method: "DELETE",
            }),
            async onQueryStarted(form, { dispatch, queryFulfilled }) {
                console.log("Logout...", form);
                dispatch(
                    authApiSlice.util.updateQueryData(
                        "getAuthenticatedUser",
                        undefined,
                        (draft) => {
                            localStorage.removeItem("token");
                            Object.assign(draft, {
                                message: "Unauthenticated!",
                                data: null,
                                token: null,
                            });
                        }
                    )
                );
            },
        }),
    }),
});

export const {
    useGetAuthenticatedUserQuery,
    useLoginMutation,
    useLogoutMutation,
} = authApiSlice;
