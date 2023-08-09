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
import { useGetAuthenticatedUserQuery } from "../../../app/services/authService";

export const SideBar = () => {
    const { navOpen } = useSelector((state) => state.adminLayout);
    const permission = useSelector((state) => state.adminLayout.permissions);
    const { data } = useGetAuthenticatedUserQuery();
    const dashboard = data?.data?.permissions?.find(
        (item) => item.module === "Dashboard"
    );

    const layout = data?.data?.permissions?.find(
        (item) => item?.module === "Layout"
    );

    const masterData = data?.data?.permissions?.find(
        (item) => item?.module === "Master Data"
    );

    const user = data?.data?.permissions?.find(
        (item) => item?.module === "User"
    );

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

                {!!dashboard?.permissions?.find(
                    (item) => item.name === "View"
                ) && (
                        <NavItem
                            label={`Dashboard`}
                            icon={<DashboardIcon className="mr-3 -mb-1" />}
                        >
                            {dashboard?.childs?.find(
                                (item) => item.module == "General"
                            ) && (
                                    <NavItem
                                        to={`dashboard/general`}
                                        label={`General`}
                                    />
                                )}
                            {dashboard?.childs?.find(
                                (item) => item.module == "Line"
                            ) && <NavItem to={`dashboard/line`} label={`Line`} />}
                            {dashboard?.childs?.find(
                                (item) => item.module == "Machine Problem"
                            ) && (
                                    <NavItem
                                        to={`dashboard/machine-problem`}
                                        label={`Machine Problem`}
                                    />
                                )}

                            {dashboard?.childs?.find(
                                (item) => item.module == "Man Power"
                            ) && (
                                    <NavItem
                                        to={`dashboard/man-power`}
                                        label={`Man Power`}
                                    />
                                )}
                        </NavItem>
                    )}

                {!!layout?.permissions?.find(
                    (item) => item.name === "View"
                ) && (
                        <NavItem
                            label={`Layout Menu`}
                            icon={<FileIconsNew className="mr-3 -mb-1" />}
                        >

                            <NavItem
                                label={`Input Changeover`}
                                to={`layout-menu/input-changeover`}
                            />
                            <NavItem
                                label={`Changeover Summary`}
                                to={`layout-menu/changeover-summary`}
                            />
                            {/* <NavItem
                            label={`Changeover Ticket`}
                            to={`layout-menu/changeover-ticket`}
                        />
                        <NavItem
                            label={`Drawing and Machine`}
                            to={`layout-menu/drawing-and-machine`}
                        /> */}
                        </NavItem>
                    )}

                {!!masterData?.permissions?.find(
                    (item) => item.name === "View"
                ) && (
                        <NavItem
                            label={`Master`}
                            icon={<MasterDataIcon className="mr-3 -mb-1" />}
                        >
                            <NavItem to={`master/toy`} label={`Toy`} />
                            <NavItem
                                to={`master/line-group`}
                                label={`Line Group`}
                            />
                            <NavItem
                                to={`master/line-device`}
                                label={`Line Device`}
                            />
                            <NavItem to={`master/line`} label={`Line`} />
                            {/* <NavItem
                            to={`master/machine-part`}
                            label={`Machine Part`}
                        /> */}
                            <NavItem
                                to={`master/machine-category`}
                                label={`Machine Category`}
                            />
                            <NavItem to={`master/machine`} label={`Machine`} />
                            <NavItem
                                to={`master/downtime`}
                                label={`Downtime`}
                            />
                        </NavItem>
                    )}
                {!!user?.permissions?.find((item) => item.name === "View") && (
                    <NavItem
                        label={`User`}
                        icon={<UsersIcon className="mr-3 -mb-1" />}
                        to={"user/account"}
                    />
                )}
            </div>
        </>
    );
};
