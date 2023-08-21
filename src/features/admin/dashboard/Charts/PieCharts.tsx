import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieCharts({
    titleHeader,
    value,
    label,
    color,
    ...props
}) {
    const optionsCharts = {
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 12,
                        family: "Open Sans",
                    },
                    color: "#6F6C6C",
                    padding: 12,
                    align: "center",
                },
                align: "center",
            },
        },
    };
    const data = {
        labels:
            value?.map((item) => item?.machine_name || item?.line_name) ?? [],
        datasets: [
            {
                data: value?.map((item) => item?.ticket_count) ?? [],
                backgroundColor: color,
                borderWidth: 0,
            },
        ],
    };

    return (
        <div
            className="p-4 rounded-md border border-[#D0D3D9] bg-[#FFF] inline-flex flex-col gap-[22px] w-full"
            {...props}
        >
            <div className="flex items-center justify-between">
                <span className="text-[#313030] font-semibold">
                    {titleHeader}
                </span>
                <div className="flex items-center gap-3 w-fit">
                    <input
                        type="date"
                        name="startDate"
                        className="outline-none w-40 py-2 px-4 border border-gray-200 rounded-md placeholder-gray-400  text-[14px]"
                        value={props.dateValue.startDate}
                        onChange={props.onChange}
                    />
                    <input
                        type="date"
                        name="endDate"
                        className="outline-none w-40 py-2 px-4 border border-gray-200 rounded-md placeholder-gray-400  text-[14px]"
                        value={props.dateValue.endDate}
                        onChange={props.onChange}
                    />
                </div>
            </div>
            <div className="mt-6">
                {/* @ts-ignore */}
                <Pie
                    data={data}
                    options={optionsCharts}
                    className="max-h-[250px]"
                />
            </div>
        </div>
    );
}
