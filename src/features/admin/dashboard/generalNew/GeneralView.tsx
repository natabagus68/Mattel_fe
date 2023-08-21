import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import moment from "moment";
import FileIconsNew from "../../../../common/components/iconsNew/FileIconsNew";
import { FileIconsDashboard } from "../../../../common/components/icons";
import HoursCharts from "../Charts/HoursCharts";
import PieCharts from "../Charts/PieCharts";
import BarCharts from "../Charts/BarCharts";
import LineCharts from "../Charts/LineCharts";
import useGeneralModel from "./GeneralModel";

export default function GeneralView() {
    const dashboard = useGeneralModel();

    return (
        <main>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["General"]} />
                <span className="font-semibold text-[#6F6C6C]">
                    {dashboard.shiftData} | {moment().format("h:mm A")} -{" "}
                    {moment().format("L")}
                </span>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-4 w-[66%]">
                    <div className="w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]">
                        <div className="w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#20519F]">
                            <FileIconsDashboard className="" color="#FFFF" />
                        </div>
                        <div className="inline-flex flex-col text-[#514E4E]">
                            <span className="text-[32px] font-bold ">82%</span>
                            <span>% of Availability</span>
                        </div>
                    </div>
                    <div className="w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]">
                        <div className="w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#F79009]">
                            <FileIconsDashboard className="" color="#FFFF" />
                        </div>
                        <div className="inline-flex flex-col text-[#514E4E]">
                            <span className="text-[32px] font-bold ">95%</span>
                            <span>Line Utilization</span>
                        </div>
                    </div>
                </div>

                <HoursCharts
                    items={dashboard.getDownTimeTrend?.data.map((item) => item)}
                />

                <div className="grid grid-cols-2 gap-6">
                    <PieCharts
                        dateValue={dashboard.topFiveMachine}
                        onChange={dashboard.changeTopFiveMachineDownTime}
                        titleHeader={"Top 5 Machine Downtime"}
                        label={[
                            "Sealing Blister",
                            "Spotwelding Jhook",
                            "Auto Blister",
                            "Conveyor",
                            "Datecode Torso",
                        ]}
                        color={[
                            "#F36960",
                            "#F9A63A",
                            "#FAF15F",
                            "#49CADD",
                            "#43ADA2",
                        ]}
                        value={
                            dashboard?.getTopFiveMachineDownTime?.data.map(
                                (item) => item
                            ) ?? []
                        }
                    />
                    <PieCharts
                        dateValue={dashboard.topFiveLineDownTime}
                        onChange={dashboard.changeTopLineDownTime}
                        titleHeader={"Top 5 Line Downtime"}
                        label={["B01", "AB1", "F03", "E03", "E10"]}
                        color={[
                            "#F36960",
                            "#F9A63A",
                            "#FAF15F",
                            "#49CADD",
                            "#43ADA2",
                        ]}
                        value={
                            dashboard?.getTopFiveLineDownTime?.data?.map(
                                (item) => item
                            ) ?? []
                        }
                    />

                    <BarCharts
                        dateValue={dashboard.repairSUM}
                        handleDate={(val) => dashboard.changeDateRepairSUM(val)}
                        titleHeader={"Top 5 Slowest Repair Time (SUM)"}
                        label={dashboard.getRepairSUM?.data?.map(
                            (item) => item?.line_name
                        )}
                        color={"#F36960"}
                        value={dashboard.getRepairSUM?.data?.map(
                            (item) => item?.sum_of_repair_time
                        )}
                        titleYAxes={"SUM of Repair Time (Min)"}
                    />
                    <BarCharts
                        dateValue={dashboard.responseSUM}
                        handleDate={(val) =>
                            dashboard.changeDateResponseSUM(val)
                        }
                        titleHeader={"Top 5 Slowest Response Time (SUM)"}
                        label={dashboard.getResponseSUM?.data?.map(
                            (item) => item?.line_name
                        )}
                        color={"#F9A63A"}
                        value={dashboard.getResponseSUM?.data?.map(
                            (item) => item?.sum_of_response_time
                        )}
                        titleYAxes={"SUM of Response Time (Min)"}
                    />

                    <BarCharts
                        dateValue={dashboard.repairAVG}
                        handleDate={dashboard.changeDateRepairAVG}
                        titleHeader={"Top 5 Slowest Repair Time (AVG)"}
                        label={dashboard.getRepairAVG?.data?.map(
                            (item) => item?.line_name
                        )}
                        color={"#F36960"}
                        value={dashboard.getResponseSUM?.data?.map(
                            (item) => item?.avg_of_repair_time
                        )}
                        titleYAxes={"AVG of Repair Time (Min)"}
                    />
                    <BarCharts
                        dateValue={dashboard.responseAVG}
                        handleDate={dashboard.changeDateResponseAVG}
                        titleHeader={"Top 5 Slowest Response Time (AVG)"}
                        label={dashboard.getResponseAVG?.data?.map(
                            (item) => item?.line_name
                        )}
                        color={"#F9A63A"}
                        value={dashboard.getResponseAVG?.data?.map(
                            (item) => item?.avg_of_response_time
                        )}
                        titleYAxes={"AVG of Repair Time (Min)"}
                    />

                    <div className="col-span-2">
                        <LineCharts
                            titleHeader={"24 Hours Trend of Response Time"}
                            label={
                                dashboard?.responeTime?.data?.map(
                                    (item) => item?.time
                                ) ?? []
                            }
                            color={"#F9A63A"}
                            value={
                                dashboard?.responeTime?.data?.map(
                                    (item) => item?.sum_of_data
                                ) ?? []
                            }
                            titleYAxes={"AVG of Response Time (Min)"}
                        />
                    </div>
                    <div className="col-span-2">
                        <LineCharts
                            titleHeader={"24 Hours Trend of Repair Time"}
                            label={
                                dashboard?.responeTime?.data?.map(
                                    (item) => item?.time
                                ) ?? []
                            }
                            color={"#F36960"}
                            value={
                                dashboard?.repairTime?.data?.map(
                                    (item) => item?.sum_of_data
                                ) ?? []
                            }
                            titleYAxes={"AVG of Repair Time (Min)"}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
