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

export default function HoursCharts() {

    const optionsCharts = {
        plugins : {
            legend : {
                position : 'bottom',
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 12,
                        family: 'Open Sans'
                    },
                    padding: 20,
                    color : '#6F6C6C',
                },
            }

        },
        scales: {
            A: {
                type: 'linear',
                position: 'left',
                title : {
                    display : true,
                    text : 'Downtime (min)',
                    font : {
                        size : 12,
                        family: 'Open Sans'
                    },
                }
            },
            B: {
                type: 'linear',
                position: 'right',
                title : {
                    display : true,
                    text : 'Count of Downtime',
                    font : {
                        size : 12,
                        family: 'Open Sans'
                    }
                },
                ticks: {
                    max: 1,
                    min: 0
                }
            },
            x: {
                ticks: {
                    maxRotation: 90,
                    minRotation: 90,
                    font : {
                        size : 12,
                        family: 'Open Sans'
                    }
                },
            }
        }
    }

    const labels = ['07:00', '08:42', '09:23', '07:00', '08:42', '09:23'];

    const data = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'Downtime (min)',
                borderColor: '#F9A63A',
                yAxisID: 'A',
                borderWidth: 3,
                fill: false,
                data: [20, 9, 87, 20, 9, 87],
            },
            {
                type: 'bar' as const,
                label: 'Count of Downtime',
                yAxisID: 'B',
                backgroundColor: '#49CADD',
                data: [43, 23, 78,20, 9, 87],
            },
        ],
    };
    return (
        <div className='p-4 rounded-md border border-[#D0D3D9] bg-[#FFF] inline-flex flex-col gap-[22px]'>
            <span className='text-[#313030] font-semibold'>24 Hours Trend of Downtime</span>
            <div>
                {/* @ts-ignore */}
                <Chart type='bar' data={data} options={optionsCharts} className='max-h-[300px]'/>
            </div>
        </div>
    )
}
