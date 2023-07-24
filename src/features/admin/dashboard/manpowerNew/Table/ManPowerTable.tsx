import React from "react";
import {
    ArrowIcon,
    FilterIcons,
    SearchIcon,
} from "../../../../../common/components/icons";
import { Loader } from "../../../../../common/components";
import moment from "moment";
import PaginationNew from "../../../../../common/components/table/PaginationNew";

export default function ManPowerTable({
    data,
    modalFilter,
    isLoad,
    paramData,
    handleChange,
    onNext,
    onPrev,
}) {
    return (
        <div className="py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]">
            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold">Manpower</span>
                <span className="text-[#667085]">
                    Logged Mechanic Status and Location
                </span>
            </div>
            <div className="p-3 inline-flex justify-between items-center rounded w-full bg-[#F0F1F3]">
                <div className="inline-flex items-center p-2 gap-2 rounded bg-[#FFF] w-1/3">
                    <SearchIcon color="#667085" />
                    <input
                        type="text"
                        name="searchManPower"
                        value={paramData.searchManPower}
                        onChange={handleChange}
                        className="outline-none placeholder:text-sm placeholder:text-[#D0D3D9] w-full"
                        placeholder="Search kpk or name... "
                    />
                </div>
                <div
                    onClick={modalFilter}
                    className="inline-flex items-center py-2 px-4 gap-2 rounded bg-[#FFF] cursor-pointer"
                >
                    <FilterIcons />
                    <span className="text-[#667085] font-semibold">
                        Filters
                    </span>
                </div>
            </div>

            <div className="overflow-y-auto">
                <table className="w-full">
                    <thead className="border-y border-y-[#D0D3D9] bg-[#FAFAFB]">
                        <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                            KPK
                        </th>
                        <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                            Name
                        </th>
                        <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                            Status
                        </th>
                        <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                            Availability
                        </th>
                        <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                            Assigned
                        </th>
                        <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                            Line
                        </th>
                        <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                            Time
                        </th>
                    </thead>

                    <tbody>
                        {!isLoad ? (
                            data?.length !== 0 ? (
                                data.data?.map((item, i) => (
                                    <tr className="border-b border-b-[#D0D3D9]">
                                        <td className="px-2 py-4 text-sm ">
                                            {item.kpk}
                                        </td>
                                        <td className="px-2 py-4 text-sm ">
                                            {item.name}
                                        </td>
                                        <td className="px-2 py-4 text-sm ">
                                            <div className="p-[10px] rounded-xl p-auto bg-[#F79009] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center">
                                                {item.status}
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm ">
                                            <div className="p-[10px] rounded-xl p-auto bg-[#14988B] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center">
                                                {item.availability}
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm ">
                                            <div className="p-[10px] rounded-xl p-auto bg-[#F79009] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center">
                                                {item.is_assigned
                                                    ? "Assigned"
                                                    : "Not Assigned"}
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm ">
                                            {item.current_working_line}
                                        </td>
                                        <td className="px-2 py-4 text-sm ">
                                            {moment(
                                                new Date(item.logged_out_at)
                                            ).format("HH:mm")}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="py-2 px-[20px] text-center bg-red-200"
                                    >
                                        Data empty
                                    </td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan={5} className="py-2 px-[20px]">
                                    <div className="inline-flex justify-center w-full">
                                        <Loader />
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <PaginationNew
                page={paramData.pageManPower}
                lastpage={data?.total_page}
                onNext={onNext}
                onPrev={onPrev}
            />
        </div>
    );
}
