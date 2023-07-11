import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieCharts({
    titleHeader,
    value,
    label,
    color,
    ...props
}) {
    const optionsCharts = {
        plugins : {
            legend : {
                position : 'bottom',
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 12,
                        family: 'Open Sans',
                    },
                    color : '#6F6C6C',
                    padding: 12,
                    align : 'center'
                },
                align : 'center'
            }

        },
    }
    const data = {
        labels: label,
        datasets: [
          {
            data: value,
            backgroundColor: color,
            borderWidth: 0,
          },
        ],
      };

  return (
    <div className='p-4 rounded-md border border-[#D0D3D9] bg-[#FFF] inline-flex flex-col gap-[22px] w-full' {...props}>
            <span className='text-[#313030] font-semibold'>{titleHeader}</span>
            <div>
                {/* @ts-ignore */}
                <Pie data={data} options={optionsCharts} className='max-h-[250px]'/>
            </div>
        </div>
  )
}
