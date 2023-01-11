import React from "react";
import { useSelector } from "react-redux";
import { NavItem } from "../../../common/components";
import {
  DashboardIcon,
  ChartIcon,
  UsersIcon,
  MasterDataIcon,
  AppNameText,
} from "../../../common/components/icons";
import appLogo from "../../../assets/app-logo.png";

export const SideBar = () => {
  const { navOpen } = useSelector((state) => state.adminLayout);
  return (
    <>
      <div
        className={`${
          navOpen == null && `w-0 pl-0 md:w-[256px] md:pl-[32px]`
        } ${
          navOpen === true ? `w-[256px] pl-[32px]` : `w-0 pl-0`
        } fixed top-[0px] left-0 overflow-x-hidden overflow-y-auto transition-[width_padding] flex flex-col gap-4 bg-black-base pt-[19px] h-full min-h-[calc(100vh_-_78px)] pb-12`}
      >
        {/*App Logo*/}
        <div className="flex items-center mb-[85.5px]">
          <img className="mr-[13.74px]" src={appLogo} alt="" />
          <AppNameText />
        </div>
        <NavItem
          label={`Dashboard`}
          icon={<DashboardIcon className="mr-3 -mb-1" />}
        >
          <NavItem to={`dashboard/general`} label={`General`} />
          <NavItem to={`dashboard/man-power`} label={`Man Power`} />
          <NavItem to={`dashboard/machine`} label={`Machine`} />
          <NavItem to={`dashboard/machine-detail`} label={`Machine Detail`} />
        </NavItem>
        <NavItem
          to={`report`}
          label={`Report`}
          icon={<ChartIcon className="mr-3 -mb-1" />}
        />
        <NavItem label={`User`} icon={<UsersIcon className="mr-3 -mb-1" />}>
          <NavItem to={`user/account`} label={`Account`} />
          <NavItem to={`access`} label={`Access`} />
        </NavItem>
        <NavItem
          label={`Master`}
          icon={<MasterDataIcon className="mr-3 -mb-1" />}
        >
          <NavItem to={`line-location`} label={`Line Location`} />
          <NavItem to={`code`} label={`Code`} />
          <NavItem to={`machine-part`} label={`Machine Part`} />
          <NavItem to={`device`} label={`Device`} />
          <NavItem to={`machine`} label={`Machine`} />
          <NavItem to={`mechanic-status`} label={`Mechanic Status`} />
        </NavItem>
      </div>
    </>
  );
};
