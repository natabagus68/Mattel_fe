import React, { useLayoutEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../../common/components";
import { useDispatch, useSelector } from "react-redux";
import { SideBar } from "./SideBar";
import {
  BellIcon,
  BurgerIcon,
} from "../../../common/components/icons/index.js";
import { setPermissions, toggle } from "./adminLayoutSlice.js";
import { WarningPopUp } from "./WarningPopUp";
import { FinishedReportModal } from "./FinishedReportModal";
import { useMeQuery } from "../../auth/authApiSlice.js";
import { config } from "../../../common/utils/index.js";
import { AvatarDropdown } from "./AvatarDropdown.jsx";

export const AdminLayout = () => {
  const { navOpen, activeRoute, loading } = useSelector(
    (state) => state.adminLayout
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={`login`} />;
  }
  const { data, isSuccess } = useMeQuery();

  useLayoutEffect(() => {
    if (isSuccess) {
      dispatch(
        setPermissions({
          permission: data.data.positions[0].permissions.map((el) =>
            el.name.toLowerCase()
          ),
        })
      );
      const permissions = data.data.positions[0].permissions.map((el) =>
        el.name.toLowerCase().replace("#", "")
      );
      const prefix = pathname.split("/")[2];
      const permit = permissions.includes(prefix);
      if (!permit) {
        navigate(`${config.pathPrefix}404`);
      }
    }
    return () => {};
  }, [pathname, isSuccess]);

  // if (isError || !auth?.data) return <Navigate to={`login`} />;
  if (loading) {
    return <Loader />;
  } else
    return (
      <>
        <WarningPopUp />
        <FinishedReportModal />
        {/*<ConfirmationModal />*/}
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
                  {/*<PersonIcon />*/}
                  <AvatarDropdown />
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
