import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: null,
  activeRoute: "",
  loading: false,
  permissions: [],
};

export const adminLayoutSlice = createSlice({
  name: "adminLayout",
  initialState,
  reducers: {
    toggle: (state) => {
      state.navOpen = !!!state.navOpen;
    },
    setActiveRouteName: (state, action) => {
      state.activeRoute = action.payload.activeRoute;
    },
    toggleLoading: (state, action) => {
      console.log(action.payload.loading);
      state.loading = action.payload.loading;
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload.permission;
    },
  },
});

export const { toggle, setActiveRouteName, toggleLoading, setPermissions } =
  adminLayoutSlice.actions;
export default adminLayoutSlice.reducer;
