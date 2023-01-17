import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: null,
  activeRoute: "",
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
  },
});

export const { toggle, setActiveRouteName } = adminLayoutSlice.actions;
export default adminLayoutSlice.reducer;
