import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { ArrowIcon } from "../../../../../common/components/icons";
import { usePermission } from "./permission-view-model";

export const Permission = () => {
    const model = usePermission();
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["User", "Mapping Menu"]} />?
                <span className="font-semibold text-[#6F6C6C]"></span>
            </div>
            <div className="py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]">
                <div className="flex justify-between items-center">
                    <div className="inline-flex flex-col">
                        <span className="text-2xl font-bold">
                            {model.detailAccess?.data.name} Role
                        </span>
                        <span className="text-[#667085]">
                            Information account & access
                        </span>
                    </div>
                    <div className="inline-block relative w-fit text-sm font-semibold">
                        <button
                            onClick={model.toBack}
                            className="rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold "
                        >
                            <ArrowIcon color="#14988B" className="-rotate-90" />
                            Back
                        </button>
                    </div>
                </div>

                <hr className="border border-[#D0D3D9]" />

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-y border-y-[#D0D3D9] bg-[#FAFAFB]">
                            <tr>
                                <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                    Menu
                                </td>

                                <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                    View
                                </td>
                                <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                    Import
                                </td>
                                <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                    Export
                                </td>
                                <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                    Create
                                </td>
                                <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                    Delete
                                </td>
                                <td className="p-2 font-semibold text-sm text-[#667085] text-start">
                                    Update
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {model?.temp?.map((element) => {
                                return (
                                    <>
                                        <tr className="border-b border-[#D0D3D9]">
                                            <td className="p-2 py-4 font-semibold text-sm text-[#FFFFFF] text-start bg-[#20519F]">
                                                {element.module}
                                            </td>

                                            {element.permission.map((el) => {
                                                return (
                                                    <td className="p-2 py-4 font-semibold text-sm text-[#667085] text-start bg-[#FFFF]">
                                                        <input
                                                            type="checkbox"
                                                            checked={el.active}
                                                            hidden={el.disable}
                                                            onChange={() =>
                                                                model.updateChecklist(
                                                                    element.id,
                                                                    el.id
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        {element.child.map((item) => {
                                            return (
                                                <>
                                                    <tr className="border-b border-[#D0D3D9]">
                                                        <td className="p-2 py-4 font-semibold text-sm text-[#667085] text-start bg-[#FFFF]">
                                                            {item.module}
                                                        </td>

                                                        {item.permission.map(
                                                            (el) => {
                                                                return (
                                                                    <td className="p-2 py-4 font-semibold text-sm text-[#667085] text-start bg-[#FFFF]">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={
                                                                                el.active
                                                                            }
                                                                            hidden={
                                                                                el.disable
                                                                            }
                                                                            onChange={() =>
                                                                                model.updateChecklist(
                                                                                    item.id,
                                                                                    el.id
                                                                                )
                                                                            }
                                                                        />
                                                                    </td>
                                                                );
                                                            }
                                                        )}
                                                    </tr>
                                                </>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
