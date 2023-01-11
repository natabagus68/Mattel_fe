import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader, Select } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { SideBar } from "./SideBar";
import {
  useGetAuthenticatedUserQuery,
  useLogoutMutation,
} from "../../../app/services/authService";
import {
  BellIcon,
  BurgerIcon,
  PersonIcon,
} from "../../../common/components/icons/index.js";
import { toggle } from "./adminLayoutSlice.js";
import { WarningPopUp } from "./WarningPopUp";
import { FinishedReportModal } from "./FinishedReportModal";

export const AdminLayout = () => {
  const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
  const { navOpen, activeRoute } = useSelector((state) => state.adminLayout);
  console.log(activeRoute);
  const dispatch = useDispatch();
  if (!localStorage.getItem("token")) {
    return <Navigate to={`login`} />;
  }
  const [logout, { logoutIsLoading }] = useLogoutMutation();
  if (isLoading || logoutIsLoading) return <Loader />;
  // if (isError || !auth?.data) return <Navigate to={`login`} />;
  return (
    <>
      <WarningPopUp />
      <FinishedReportModal />
      <div className="w-full">
        <div
          className={`${
            navOpen == null || navOpen === true
              ? "ml-0 md:ml-[256px]"
              : "ml-0 md:ml-0"
          }`}
        >
          <div
            className={`fixed top-0 flex bg-white-lightest z-10 shadow-[0_1px_20px_rgba(0,0,0,0.17)] ${
              navOpen == null || navOpen === true
                ? "w-[calc(100%-256px)]"
                : "w-full"
            } h-[84px]`}
          >
            <div className="py-[15px] px-[48px] flex-1 flex">
              <div className="flex-1 flex items-center">
                <BurgerIcon
                  onClick={() => dispatch(toggle())}
                  className="cursor-pointer"
                />
                <p className="ml-[24px] font-body text-xl">{activeRoute}</p>
              </div>
              <div className=" ml-auto flex items-center">
                <BellIcon className="mr-[30px]" />
                <PersonIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-0">
          <SideBar />
          <div
            className={`${
              (navOpen == null || navOpen === true) && `md:ml-[274px]`
            } transition-[margin] mt-[78px] py-6 md:py-[37px] px-2 md:px-[48px] flex-1 overflow-auto`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
