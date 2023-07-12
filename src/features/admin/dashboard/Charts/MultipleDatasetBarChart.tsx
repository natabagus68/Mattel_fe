import React from 'react'
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
} from 'chart.js';

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

import { Chart } from 'react-chartjs-2';

export default function MultipleDatasetBarChart({
    titleHeader,
    label,
    color,
    value,
    titleYAxes,
    legend,
    filter = true
}) {
    const optionsCharts = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 12,
                        family: 'Open Sans'
                    },
                    padding: 20,
                    color: '#6F6C6C',
                },
                display: false,
            }

        },
        scales: {
            A: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: titleYAxes,
                    font: {
                        size: 12,
                        family: 'Open Sans'
                    },
                }
            },
            x: {
                ticks: {
                    maxRotation: 90,
                    minRotation: 90,
                    // barPercentage: 1.0,
                    font : {
                        size : 12,
                        family: 'Open Sans'
                    }
                },
                categoryPercentage: 1.0,
            }
        }
    }

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                data: value,
                borderWidth: 1,
                yAxisID: 'A',
                categoryPercentage: 0.8, // notice here 
                barPercentage: 0.8,
                backgroundColor: color
            },
        ]
    };

    return (
        <div className='p-4 rounded-md border border-[#D0D3D9] bg-[#FFF] inline-flex flex-col gap-[22px] w-full'>
            <div className='inline-flex justify-between items-center'>
                <span className='text-[#313030] font-semibold'>{titleHeader}</span>
                {
                    filter && <input type="date" className='pl-[10px] p-[2px] outline-none rounded-md border border-[#D0D3D9] text-xs text-[#514E4E]' />
                }
            </div>
            <div className='flex flex-col items-center'>
                {/* @ts-ignore */}
                <Chart type='bar' data={data} options={optionsCharts} className='max-h-[400px]' />
                <div className='flex items-center gap-11 text-[#514E4E]'>
                    {
                        legend.map((item, i) => (
                            <div className='inline-flex items-center gap-2'>
                                <div className={`min-h-[12px] min-w-[12px] ${i === 0 ? 'bg-[#4D74B2]' : i === 1 ? 'bg-[#F9A63A]' : i === 2 ? 'bg-[#43ADA2]' : i === 3 ? 'bg-[#F36960]' : 'bg-[#858D9D]' }`}></div>
                                <span className='text-sm'>{item}</span>
                            </div>

                        ))
                    }
                    {/* <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#F9A63A]'></div>
                        <span className='text-sm'>Auto Blister</span>
                    </div>
                    <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#43ADA2]'></div>
                        <span className='text-sm'>Sealing Blister</span>
                    </div>
                    <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#F36960]'></div>
                        <span className='text-sm'>Conveyor</span>
                    </div>
                    <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#858D9D]'></div>
                        <span className='text-sm'>Datecode Torso</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
