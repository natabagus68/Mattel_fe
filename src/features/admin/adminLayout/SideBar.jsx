import React from "react";
import { useSelector } from "react-redux";
import { NavItem } from "../../../common/components";
import {
  AppNameText,
  ChartIcon,
  DashboardIcon,
  MasterDataIcon,
  UsersIcon,
} from "../../../common/components/icons";
import appLogo from "../../../assets/company-logo.png";
import { MonitorIcon } from "../../../common/components/icons/MonitorIcon";
import FileIconsNew from "../../../common/components/iconsNew/FileIconsNew";

export const SideBar = () => {
  const { navOpen } = useSelector((state) => state.adminLayout);
  const permission = useSelector((state) => state.adminLayout.permissions);
  return (
    <>
      <div
        className={`${navOpen == null && `w-0 pl-0 md:w-[256px] md:pl-[32px]`
          } ${navOpen === true ? `w-[256px] pl-[32px]` : `w-0 pl-0`
          } fixed top-[0px] left-0 overflow-x-hidden overflow-y-auto transition-[width_padding] flex flex-col gap-4 bg-black-base pt-[19px] h-full min-h-[calc(100vh_-_78px)] pb-12`}
      >
        {/*App Logo*/}
        <div className="flex items-center mb-[64px]">
          <img className="mr-[13.74px]" src={appLogo} alt="" />
          <AppNameText />
        </div>
        <NavItem
          label={`Dashboard`}
          icon={<DashboardIcon className="mr-3 -mb-1" />}
        >
          <NavItem to={`dashboard/general`} label={`General`} />
          <NavItem to={`dashboard/line`} label={`Line`} />
          <NavItem
            to={`dashboard/machine-problem`}
            label={`Machine Problem`}
          />
          <NavItem to={`dashboard/man-power`} label={`Man Power`} />
        </NavItem>
        <NavItem
          label={`Layout Menu`}
          icon={<FileIconsNew className="mr-3 -mb-1" />}
        >
          <NavItem label={`Input Changeover`} to={`layout-menu/input-changeover`} />
          <NavItem label={`Changeover Summary`} to={`layout-menu/changeover-summary`} />
          <NavItem label={`Changeover Ticket`} to={`layout-menu/changeover-ticket`} />
          <NavItem label={`Drawing and Machine`} to={`layout-menu/drawing-and-machine`} />
        </NavItem>
        {/* <NavItem
          label={`Monitoring`}
          icon={<MonitorIcon className="mr-3 -mb-1" />}
        >
          <NavItem label={`Line`} to={`monitoring/line`} />
          <NavItem label={`Layout`} to={`monitoring/layout`} />
          <NavItem label={`Mechanic`} to={`monitoring/mechanic`} />
        </NavItem>
        <NavItem
          to={`report`}
          label={`Report`}
          icon={<ChartIcon className="mr-3 -mb-1" />}
        /> */}

        <NavItem
          label={`Master`}
          icon={<MasterDataIcon className="mr-3 -mb-1" />}
        >
          <NavItem to={`master/toy`} label={`Toy`} />
          <NavItem to={`master/line-group`} label={`Line Group`} />
          <NavItem to={`master/line-device`} label={`Line Device`} />
          <NavItem to={`master/line`} label={`Line`} />
          {/* <NavItem to={`master/machine-part`} label={`Machine Part`} /> */}
          <NavItem to={`master/machine-category`} label={`Machine Category`} />
          <NavItem to={`master/machine`} label={`Machine`} />
          <NavItem to={`master/downtime`} label={`Downtime`} />
        </NavItem>
        <NavItem label={`User`} icon={<UsersIcon className="mr-3 -mb-1" />}>
          <NavItem to={`user/account`} label={`Account`} />
          <NavItem to={`user/access`} label={`Access`} />
        </NavItem>
      </div>
    </>
  );
};
