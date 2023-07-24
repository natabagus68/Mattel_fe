import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import moment from "moment";
import {
    ArrowIcon,
    DownloadIcon,
    FilterIcons,
    PlusIcon,
    SearchIcon,
} from "../../../../common/components/icons";
import { ShowFilter } from "../../../../common/components/table/ShowFilter";
import ManPowerTable from "./Table/ManPowerTable";
import RealtimeTicketTable from "./Table/RealtimeTicketTable";
import RealtimeWorkTable from "./Table/RealtimeWorkTable";
import useManpowerModel from "./ManpowerModel";
import ModalFilter from "../Modals/ModalFilter";
import ModalFilterManPower from "../Modals/ModalFilterManPower";

export default function ManpowerNew() {
    const dashboard = useManpowerModel();
    return (
        <main>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["Manpower"]} />
                <span className="font-semibold text-[#6F6C6C]">
                    Shift 1 | {moment().format("h:mm A")} -{" "}
                    {moment().format("L")}
                </span>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-6">
                    <div className="w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]">
                        <div className="w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#20519F]">
                            <DownloadIcon
                                className="scale-[2.3]"
                                color="#FFFF"
                            />
                        </div>
                        <div className="inline-flex flex-col text-[#514E4E]">
                            <span className="text-[32px] font-bold ">32</span>
                            <span>In</span>
                        </div>
                    </div>
                    <div className="w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]">
                        <div className="w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#F79009]">
                            <DownloadIcon
                                className="scale-[2.3] rotate-180"
                                color="#FFFF"
                            />
                        </div>
                        <div className="inline-flex flex-col text-[#514E4E]">
                            <span className="text-[32px] font-bold ">12</span>
                            <span>Out</span>
                        </div>
                    </div>
                    <div className="w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]">
                        <div className="w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#F04438]">
                            <PlusIcon
                                className="scale-[2.3] rotate-45"
                                color="#FFFF"
                            />
                        </div>
                        <div className="inline-flex flex-col text-[#514E4E]">
                            <span className="text-[32px] font-bold ">3</span>
                            <span>Not Logged</span>
                        </div>
                    </div>
                </div>

                <ManPowerTable
                    modalFilter={() =>
                        dashboard.handleOpenModalFilter("manPower")
                    }
                    isLoad={dashboard.loadDataTicketRelease}
                    data={dashboard.responManPower?.data}
                    onNext={() => dashboard.onNextPage("manPower")}
                    onPrev={() => dashboard.onPrevPage("manPower")}
                    paramData={dashboard.paramData}
                    handleChange={dashboard.handleChangeParam}
                />
                <RealtimeTicketTable
                    modalFilter={() =>
                        dashboard.handleOpenModalFilter("RealtimeTicket")
                    }
                    isLoad={dashboard.loadDataTicketRelease}
                    data={dashboard.responDataTicketRelease?.data}
                    onNext={() => dashboard.onNextPage("ticketRelease")}
                    onPrev={() => dashboard.onPrevPage("ticketRelease")}
                    paramData={dashboard.paramData}
                    handleChange={dashboard.handleChangeParam}
                />
                <RealtimeWorkTable
                    modalFilter={() =>
                        dashboard.handleOpenModalFilter("RealtimeWork")
                    }
                    isLoad={dashboard.loadDataRealtimeWork}
                    data={dashboard.responDataRealtimeWork?.data}
                    onNext={() => dashboard.onNextPage("realtimeWork")}
                    onPrev={() => dashboard.onPrevPage("realtimeWork")}
                    paramData={dashboard.paramData}
                    handleChange={dashboard.handleChangeParam}
                />
            </div>

            <ModalFilter
                open={dashboard.modalFilter.value}
                setClose={dashboard.handleCloseModalFilter}
                onClick={dashboard.handleClickFilter}
            />
            <ModalFilterManPower
                open={dashboard.modalFilter.value}
                setClose={dashboard.handleCloseModalFilter}
                onClick={dashboard.handleClickFilter}
            />
        </main>
    );
}
