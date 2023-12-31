import React from "react";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from "chart.js";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

import { Chart } from "react-chartjs-2";
import Datepicker from "react-tailwindcss-datepicker";

export default function BarCharts({
    titleHeader,
    label,
    color,
    value,
    titleYAxes,
    filter = true,
    handleDate = (val): void => {},
    dateValue,
}) {
    console.log(dateValue);
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
                    padding: 20,
                    color: "#6F6C6C",
                },
                display: false,
            },
        },
        scales: {
            A: {
                type: "linear",
                position: "left",
                title: {
                    display: true,
                    text: titleYAxes,
                    font: {
                        size: 12,
                        family: "Open Sans",
                    },
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 12,
                        family: "Open Sans",
                    },
                },
            },
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                type: "bar" as const,
                yAxisID: "A",
                backgroundColor: color,
                data: value,
            },
        ],
    };

    return (
        <div className="p-4 rounded-md border border-[#D0D3D9] bg-[#FFF] inline-flex flex-col gap-[22px] w-full">
            <div className="inline-flex justify-between items-center">
                <span className="text-[#313030] font-semibold">
                    {titleHeader}
                </span>
                {filter && (
                    <>
                        <div className="w-fit flex items-center gap-3 bg-white">
                            <input
                                type="date"
                                name="startDate"
                                value={dateValue.startDate}
                                onChange={handleDate}
                                className="outline-none w-40 py-2 px-4 border border-gray-200 rounded-md placeholder-gray-400  text-[14px]"
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={dateValue.endDate}
                                onChange={handleDate}
                                className="outline-none w-40 py-2 px-4 border border-gray-200 rounded-md placeholder-gray-400  text-[14px]"
                            />
                        </div>
                    </>
                )}
            </div>
            <div>
                {/* @ts-ignore */}
                <Chart
                    type="bar"
                    data={data}
                    options={optionsCharts}
                    className="max-h-[250px]"
                />
            </div>
        </div>
    );
}
