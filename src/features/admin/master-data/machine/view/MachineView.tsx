import React from "react";
import { Breadcrumbs, Loader } from "../../../../../common/components";
import moment from "moment";
import {
    PenIcon,
    PlusIcon,
    SearchIcon,
    TrashIcon,
} from "../../../../../common/components/icons";
import PaginationNew from "../../../../../common/components/table/PaginationNew";
import { DeleteDialog } from "../../../../../common/components/dialog";
import useMachineModel from "./MachineModel";

export default function MachineView() {
    const master = useMachineModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Machine']} />
                <span className='font-semibold text-[#6F6C6C]'>{master.shiftData} | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className="py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]">
                <div className="flex justify-between items-center">
                    <div className="inline-flex flex-col">
                        <span className="text-2xl font-bold">Machine</span>
                        <span className="text-[#667085]">
                            Management data here.
                        </span>
                    </div>
                    <div className="inline-block relative w-fit text-sm font-semibold">
                        <button
                            onClick={master.handleAdd}
                            className="peer font-semibold py-3 px-5 rounded inline-flex items-center gap-2 bg-[#20519F]"
                        >
                            <PlusIcon className="scale-110" />
                            <span className="mr-1 text-[#FFF]">Add Data</span>
                        </button>
                    </div>
                </div>
                <div className="p-3 inline-flex justify-between items-center rounded w-full bg-[#F0F1F3]">
                    <div className="inline-flex items-center p-2 gap-2 rounded bg-[#FFF] border border-[#E7EAEE] w-1/3">
                        <SearchIcon color="#667085" />
                        <input
                            type="text"
                            name="search"
                            onChange={master.handleChangeParam}
                            value={master.paramData.search}
                            className="outline-none text-sm placeholder:text-[#D0D3D9] w-full"
                            placeholder="Search Machine... "
                        />
                    </div>
                    <div className="inline-flex items-center gap-2">
                        <span className="text-sm font-semibold">Sort by</span>
                        <select
                            name="sort"
                            onChange={master.handleChangeParam}
                            value={master.paramData.sort}
                            className="p-2 rounded text-sm outline-none"
                        >
                            <option value="Id_ASC">Name (A-Z)</option>
                            <option value="Id_DESC">Name (Z-A)</option>
                            <option value="UpdatedAt_ASC">Last Update</option>
                            <option value="UpdatedAt_DESC">First Update</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-y border-y-[#D0D3D9] bg-[#FAFAFB]">
                            <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                                CODE
                            </th>
                            <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                                MACHINE NUMBER
                            </th>
                            <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                                LINE LOCATION
                            </th>
                            {/* <th className='p-2 font-semibold text-sm text-[#667085] text-start'>PART</th> */}
                            <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                                DEVICE ID
                            </th>
                            <th className="p-2 font-semibold text-sm text-[#667085] text-start">
                                Actions
                            </th>
                        </thead>
                        <tbody>
                            {!master.isLoading ? (
                                master.responDataMachine?.data.length !== 0 ? (
                                    master.responDataMachine?.data.map(
                                        (item, i) => (
                                            <tr
                                                className="border-b border-b-[#D0D3D9]"
                                                key={i}
                                            >
                                                <td className="px-2 py-4 text-sm">
                                                    {item.code}
                                                </td>
                                                <td className="px-2 py-4 text-sm">
                                                    {item.number}
                                                </td>
                                                <td className="px-2 py-4 text-sm">
                                                    {item.line?.line_group?.name != undefined || item.line?.name != undefined ? item.line?.line_group?.name + ' - ' + item.line?.name : "-"}
                                                </td>
                                                {/* <td className='px-2 py-4 text-sm'>
                                            {
                                                item.machine_parts?.map((item) => item.name).join(', ')
                                            }
                                        </td> */}
                                                <td className="px-2 py-4 text-sm">
                                                    {item.line?.line_device
                                                        .name ?? "-"}
                                                </td>
                                                <td className="px-2 py-2 text-sm w-[10%]">
                                                    <div className="inline-flex gap-3">
                                                        <button
                                                            onClick={() =>
                                                                master.handleEdit(
                                                                    item.id
                                                                )
                                                            }
                                                            className="inline-flex items-center justify-center p-[16px] rounded bg-[#F79009] h-[48px] w-[48px]"
                                                        >
                                                            <PenIcon
                                                                height={24}
                                                                width={24}
                                                            />
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                master.handleDelete(
                                                                    item.id
                                                                )
                                                            }
                                                            className="inline-flex items-center justify-center p-[16px] rounded bg-[#F04438] h-[48px] w-[48px]"
                                                        >
                                                            <TrashIcon
                                                                height={16}
                                                                width={16}
                                                            />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={8}
                                            className="py-2 px-[20px] text-center bg-red-200"
                                        >
                                            Data empty
                                        </td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan={8} className="py-2 px-[20px]">
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
                    page={master.paramData.page}
                    lastpage={master.responDataMachine?.total_page}
                    onNext={master.onNextPage}
                    onPrev={master.onPrevPage}
                />
            </div>
            <DeleteDialog
                onClick={master.onDelete}
                open={master.modalDelete}
                setClose={master.handleCancelDelete}
            />
        </main>
    );
}
