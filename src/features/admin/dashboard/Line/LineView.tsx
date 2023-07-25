import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import moment from "moment";
import useLineMonitoringModel from "./LineMonitoringModel";

export default function LineView() {
    const dashboard = useLineMonitoringModel();
    console.log(dashboard.responLineMonitoring);
    return (
        <main>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["Line"]} />
                <span className="font-semibold text-[#6F6C6C]">
                    {dashboard.shiftData} | {moment().format("h:mm A")} -{" "}
                    {moment().format("L")}
                </span>
            </div>
            <div className="py-6 px-8 rounded-md border border-[#D0D3D9] bg-[#FFF] inline-flex flex-col gap-[16px] w-full">
                <div className="inline-flex justify-between items-center">
                    <span className="text-[#313030] font-bold text-2xl">
                        Andon Status
                    </span>
                </div>
                <div className="flex flex-col px-6 py-4 gap-[8px] rounded-md border border-[#D0D3D9] w-fit">
                    <span className="font-semibold">Legend</span>
                    <div className="flex items-center gap-6 text-[#514E4E] ">
                        <div
                            className={`inline-flex cursor-pointer items-center gap-2 p-2 ${dashboard.legen.maintenance ? ' rounded-xl bg-[#F0F1F3]' : null}`}
                            onClick={() =>
                                dashboard.filterHanlde({
                                    ...dashboard.legen,
                                    maintenance: !dashboard.legen.maintenance,
                                })
                            }
                        >
                            <div className="min-h-[12px] min-w-[12px] bg-[#F00] rounded-full"></div>
                            <span className="text-sm">
                                Machine & Line Tooling Issue
                            </span>
                        </div>
                        <div
                            className={`inline-flex cursor-pointer items-center gap-2 p-2 ${dashboard.legen.material ? ' rounded-xl bg-[#F0F1F3]' : null}`}
                            onClick={() =>
                                dashboard.filterHanlde({
                                    ...dashboard.legen,
                                    material: !dashboard.legen.material,
                                })
                            }
                        >
                            <div className="min-h-[12px] min-w-[12px] bg-[#FF0] rounded-full"></div>
                            <span className="text-sm">
                                Material Issue (Packaging & Costume)
                            </span>
                        </div>
                        <div
                            className={`inline-flex cursor-pointer items-center gap-2 p-2 ${dashboard.legen.material2 ? 'rounded-xl bg-[#F0F1F3]' : null}`}
                            onClick={() =>
                                dashboard.filterHanlde({
                                    ...dashboard.legen,
                                    material2: !dashboard.legen.material2,
                                })
                            }
                        >
                            <div className="min-h-[12px] min-w-[12px] bg-[#12B569] rounded-full"></div>
                            <span className="text-sm">
                                Material Issue (In House & Store)
                            </span>
                        </div>
                        <div
                            className={`inline-flex cursor-pointer items-center gap-2 p-2 ${dashboard.legen.layout ? ' rounded-xl bg-[#F0F1F3]' : null}`}
                            onClick={() =>
                                dashboard.filterHanlde({
                                    ...dashboard.legen,
                                    layout: !dashboard.legen.layout,
                                })
                            }
                        >
                            <div className="min-h-[12px] min-w-[12px] bg-[#00B0F0] rounded-full"></div>
                            <span className="text-sm">Layout Issue</span>
                        </div>
                    </div>
                </div>

                {/* Card Line Grid # */}
                <div className="flex flex-wrap gap-x-[6px] gap-y-4 ">
                    {dashboard.responLineMonitoring?.data.map((item, i) => (
                        <div
                            className="flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] min-h-[198px] w-[360px]"
                            key={i}
                        >
                            <span className="font-bold text-2xl">
                                {item.name}
                            </span>
                            <div className="flex flex-wrap gap-2 text-[#514E4E]">
                                {item.lines?.map((itemLines, i) => (
                                    <div
                                        className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  ${itemLines.is_maintenance
                                            ? "bg-[#F04438] text-[#FFFFFF]"
                                            : itemLines.is_material
                                                ? "bg-[#F79009] text-[#FFFFFF]"
                                                : itemLines.is_material2
                                                    ? "bg-[#12B569] text-[#FFFFFF]"
                                                    : itemLines.is_maintenance_changeover
                                                        ? "bg-[#00B0F0] text-[#FFFFFF]" : "bg-[#D0D3D9] text-[#514E4E]"
                                            }`}
                                    >
                                        <p className="text-[14px] font-[600]">
                                            {itemLines.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] min-h-[198px] w-[360px]'>
                        <span className='font-bold text-2xl'>aaa</span>
                        <div className='flex flex-wrap gap-2 text-[#514E4E]'>

                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E`}>
                                1
                            </div>
                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E]`}>
                                2
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] min-h-[198px] w-[360px]'>
                        <span className='font-bold text-2xl'>aaa</span>
                        <div className='flex flex-wrap gap-2 text-[#514E4E]'>

                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E`}>
                                1
                            </div>
                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E]`}>
                                2
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] min-h-[198px] w-[360px]'>
                        <span className='font-bold text-2xl'>aaa</span>
                        <div className='flex flex-wrap gap-2 text-[#514E4E]'>

                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E`}>
                                1
                            </div>
                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E]`}>
                                2
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] min-h-[198px] w-[360px]'>
                        <span className='font-bold text-2xl'>aaa</span>
                        <div className='flex flex-wrap gap-2 text-[#514E4E]'>

                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E`}>
                                1
                            </div>
                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E]`}>
                                2
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] min-h-[198px] w-[360px]'>
                        <span className='font-bold text-2xl'>aaa</span>
                        <div className='flex flex-wrap gap-2 text-[#514E4E]'>

                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E`}>
                                1
                            </div>
                            <div className={`inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9] text-[#514E4E]`}>
                                2
                            </div>

                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    );
}
