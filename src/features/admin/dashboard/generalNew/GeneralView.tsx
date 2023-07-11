import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import moment from 'moment'
import FileIconsNew from '../../../../common/components/iconsNew/FileIconsNew'
import { FileIconsDashboard } from '../../../../common/components/icons'
import HoursCharts from '../Charts/HoursCharts'
import PieCharts from '../Charts/PieCharts'
import BarCharts from '../Charts/BarCharts'
import LineCharts from '../Charts/LineCharts'

export default function GeneralView() {
  return (
    <main>
        <div className='flex justify-between items-center mb-6'>
            <Breadcrumbs items={['General']} />
            <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
        </div>

        <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-4 w-[66%]'>
                    <div className='w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]'>
                        <div className='w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#20519F]'>
                            <FileIconsDashboard className='' color='#FFFF' />
                        </div>
                        <div className='inline-flex flex-col text-[#514E4E]'>
                            <span className='text-[32px] font-bold '>82%</span>
                            <span>% of Availability</span>
                        </div>
                    </div>
                    <div className='w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]'>
                        <div className='w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#F79009]'>
                            <FileIconsDashboard className='' color='#FFFF' />
                        </div>
                        <div className='inline-flex flex-col text-[#514E4E]'>
                            <span className='text-[32px] font-bold '>95%</span>
                            <span>Line Utilization</span>
                        </div>
                    </div>
                </div>

                <HoursCharts/>

                <div className='grid grid-cols-2 gap-6'>
                    <PieCharts 
                        titleHeader={'Top 5 Machine Downtime'} 
                        label={['Sealing Blister', 'Spotwelding Jhook', 'Auto Blister', 'Conveyor', 'Datecode Torso']} 
                        color={['#F36960','#F9A63A','#FAF15F','#49CADD', '#43ADA2']}
                        value={[30,54,67,12,23]}
                        />
                    <PieCharts 
                        titleHeader={'Top 5 Line Downtime'} 
                        label={['B01', 'AB1', 'F03', 'E03', 'E10']} 
                        color={['#F36960','#F9A63A','#FAF15F','#49CADD', '#43ADA2']}
                        value={[30,54,67,12,23]}
                    />


                    <BarCharts 
                        titleHeader={'Top 5 Slowest Repair Time (SUM)'}
                        label={['B07','B02','A01','F17','H06']}
                        color={'#F36960'}
                        value={[33,53,78,54,22]}
                        titleYAxes={'SUM of Repair Time (Min)'}
                    />
                    <BarCharts 
                        titleHeader={'Top 5 Slowest Response Time (SUM)'}
                        label={['B01','AB1','F03','E01','E01']}
                        color={'#F9A63A'}
                        value={[33,53,78,54,22]}
                        titleYAxes={'SUM of Repair Time (Min)'}
                    />


                    <BarCharts 
                        titleHeader={'Top 5 Slowest Repair Time (AVG)'}
                        label={['B07','B02','A01','F17','H06']}
                        color={'#F36960'}
                        value={[33,53,78,54,22]}
                        titleYAxes={'AVG of Repair Time (Min)'}
                    />
                     <BarCharts 
                        titleHeader={'Top 5 Slowest Response Time (AVG)'}
                        label={['B01','AB1','F03','E01','E01']}
                        color={'#F9A63A'}
                        value={[33,53,78,54,22]}
                        titleYAxes={'AVG of Repair Time (Min)'}
                    />

                    <div className='col-span-2'>
                        <LineCharts 
                            titleHeader={'24 Hours Trend of Response Time'}
                            label={['B01','AB1','F03','E01','E01']}
                            color={'#F9A63A'}
                            value={[33,53,78,54,22]}
                            titleYAxes={'AVG of Response Time (Min)'}
                        />
                    </div>
                    <div className='col-span-2'>
                        <LineCharts 
                            titleHeader={'24 Hours Trend of Repair Time'}
                            label={['B01','AB1','F03','E01','E01']}
                            color={'#F36960'}
                            value={[33,53,78,54,22]}
                            titleYAxes={'AVG of Repair Time (Min)'}
                        />
                    </div>
                </div>

            </div>
    </main>
  )
}
