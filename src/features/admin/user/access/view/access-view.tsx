import React from "react";
import { Breadcrumbs, Loader } from "../../../../../common/components";
import {
    ActiveToggleIcon,
    EyeIcon,
    InactiveToggleIcon,
    PenIcon,
    PlusIcon,
    SearchIcon,
    TrashIcon,
} from "../../../../../common/components/icons";
import moment from "moment";
import { DeleteDialog } from "../../../../../common/components/dialog";
import PaginationNew from "../../../../../common/components/table/PaginationNew";
import { useAccessUser } from "./access-view-model";

export default function AccessUser() {
    const model = useAccessUser();
    return (
        <>
            <main>
                <div className="flex justify-between items-center mb-6">
                    <Breadcrumbs items={["User"]} />?
                    <span className="font-semibold text-[#6F6C6C]"></span>
                </div>
                <div className="py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]">
                    <div className="flex justify-between items-center">
                        <div className="inline-flex flex-col">
                            <span className="text-2xl font-bold">
                                User Access
                            </span>
                            <span className="text-[#667085]">
                                Management data here.
                            </span>
                        </div>
                        <div className="inline-block relative w-fit text-sm font-semibold">
                            <button
                                onClick={() => model.toForm(undefined)}
                                className="peer font-semibold py-3 px-5 rounded inline-flex items-center gap-2 bg-[#20519F]"
                            >
                                <PlusIcon className="scale-110" />
                                <span className="mr-1 text-[#FFF]">
                                    Create New User
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="py-[3px] px-1 inline-flex gap-[10px] bg-[#F0F1F3] rounded-md w-fit">
                        <div className="py-[6px] px-3 rounded ">
                            <span className="text-sm font-semibold text-[#989FAD] ">
                                Account
                            </span>
                        </div>
                        <div className="py-[6px] px-3 rounded bg-[#FFF]">
                            <span className="text-sm font-semibold text-[#313030]">
                                Access
                            </span>
                        </div>
                    </div>
                    <div className="p-3 inline-flex justify-between items-center rounded w-full bg-[#F0F1F3]">
                        <div className="inline-flex items-center p-2 gap-2 rounded bg-[#FFF] border border-[#E7EAEE] w-1/3">
                            <SearchIcon color="#667085" />
                            <input
                                type="text"
                                name="q"
                                onChange={model.handleChangeFilter}
                                value={model.tableParam.q ?? ""}
                                className="outline-none text-sm placeholder:text-[#D0D3D9] w-full"
                                placeholder="Search name, email...... "
                            />
                        </div>
                        <div className="inline-flex gap-6">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-sm font-semibold">
                                    Sort by
                                </span>
                                <select
                                    name="sort"
                                    value={model.tableParam.sort ?? ""}
                                    onChange={model.handleChangeFilter}
                                    className="p-2 rounded text-sm outline-none"
                                >
                                    <option value="ASC">
                                        Last Role (A - Z)
                                    </option>
                                    <option value="DESC">Role (Z - A)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-y border-y-[#D0D3D9] bg-[#FAFAFB]">
                                <tr>
                                    <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                        Role
                                    </td>

                                    <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                        ACTION
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {model.dataAccess?.data?.map((item) => {
                                    return (
                                        <>
                                            <tr
                                                key={item.id}
                                                className="border-b border-b-[#D0D3D9]"
                                            >
                                                <td className="px-2 py-4 text-sm">
                                                    {item.name}
                                                </td>

                                                <td className="px-2 py-2 text-sm w-[10%]">
                                                    <div className="inline-flex gap-3">
                                                        <button className="inline-flex items-center justify-center p-[16px] rounded bg-[#20519F] h-[48px] w-[48px]">
                                                            <EyeIcon
                                                                height={24}
                                                                width={24}
                                                                color="#20519F"
                                                                className="scale-150"
                                                            />
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                model.toForm(
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
                                                                model.destroyAcceess(
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
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <PaginationNew
                        page={1}
                        lastpage={2}
                        onNext={2}
                        onPrev={1}
                    />
                </div>
                {/* <DeleteDialog onClick={null} open={null} setClose={null} /> */}
            </main>
        </>
    );
}
