import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: null,
  activeRoute: "",
  // needCompany: false,
  // needCompanyArea: false,
  // needShift: false,
  // company_id: null,
  // company_area_id: null,
  // shift_id: null
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
    // showCompanySelector: state => {
    //     state.needCompany = true;
    //     state.needCompanyArea = true;
    //     state.needShift = true;
    // },
    // hideCompanySelector: state => {
    //     state.needCompany = false;
    //     state.needCompanyArea = false;
    //     state.needShift = false;
    // },
    // setCompany: (state, payload) => {
    //     state.company_id = payload.company_id;
    // },
    // setCompanyArea: (state, payload) => {
    //     state.company_area_id = payload.company_area_id;
    // },
    // setShift: (state, payload) => {
    //     state.shift_id = payload.shift_id;
    // },
  },
});

export const { toggle, setActiveRouteName } = adminLayoutSlice.actions;
export default adminLayoutSlice.reducer;
