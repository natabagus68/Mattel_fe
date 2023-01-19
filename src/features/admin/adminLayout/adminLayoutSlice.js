import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: null,
  activeRoute: "",
  loading: false,
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
  },
});

export const { toggle, setActiveRouteName, toggleLoading } =
  adminLayoutSlice.actions;
export default adminLayoutSlice.reducer;
