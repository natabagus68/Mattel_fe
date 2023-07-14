import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import moment from 'moment'
import BarCharts from '../Charts/BarCharts';
import MultipleDatasetBarChart from '../Charts/MultipleDatasetBarChart';
import useMachineProblemModel from './MachineProblemModel';

export default function MachineProblemNew() {
    const dashboard = useMachineProblemModel()

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(20), (val, index) => year - index);
    

    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Machine Problem']} />
                <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='grid grid-cols-5 items-center gap-6'>
                    <div className='inline-flex flex-col gap-1 w-full'>
                        <span className='text-sm font-semibold'>Line</span>
                        <select name='line_id' value={dashboard.paramData.line_id} onChange={dashboard.handleChangeParam} className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
                            <option value="" selected disabled>Choose Line</option>
                            {
                                !dashboard.loadLine ?
                                dashboard.responDataLine?.data.map((item,i) => (
                                    <option value={item.id} key={i}>{item.name}</option>
                                )) 
                                :
                                    <option value="" disabled>Load Data . . .</option>
                            }
                        </select>
                    </div>
                    <div className='inline-flex flex-col gap-1 w-full'>
                        <span className='text-sm font-semibold'>Machine</span>
                        <select name='machine_id' value={dashboard.paramData.machine_id} onChange={dashboard.handleChangeParam} className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
                            <option value="" selected disabled>Choose Machine</option>
                            {
                                !dashboard.loadMachine ?
                                dashboard.responDataMachine?.data.map((item,i) => (
                                    <option value={item.id} key={i}>{item.code}</option>
                                )) 
                                :
                                    <option value="" disabled>Load Data . . .</option>
                            }
                        </select>
                    </div>
                    <div className='inline-flex flex-col gap-1 w-full'>
                        <span className='text-sm font-semibold'>Year</span>
                        <select name='year' value={dashboard.paramData.year} onChange={dashboard.handleChangeParam} className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
                            <option value="" selected disabled>Choose Year</option>
                            {
                                years?.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='inline-flex flex-col gap-1 w-full'>
                        <span className='text-sm font-semibold'>Month</span>
                        <select name='month' value={dashboard.paramData.month} onChange={dashboard.handleChangeParam} className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
                            <option value="" selected disabled>Choose Month</option>
                            <option value="1">Januari</option>
                            <option value="2">Februari</option>
                            <option value="3">Maret</option>
                            <option value="4">April</option>
                            <option value="5">Mei</option>
                            <option value="6">Juni</option>
                            <option value="7">Juli</option>
                            <option value="8">Agustus</option>
                            <option value="9">September</option>
                            <option value="10">Oktober</option>
                            <option value="11">November</option>
                            <option value="12">Desember</option>
                        </select>
                    </div>
                </div>

                <MultipleDatasetBarChart
                    titleHeader={'Top 5 Slowest Repair Time by Downtime Reason'}

                    // kasih null atau string kosong untuk kasih gap antar bar charts
                    legend={dashboard.slowestRepair?.data.map(item => { return item?.machine_name })}
                    label={dashboard.datasetSlowestRepair?.map(item => { return item?.name })}
                    color={dashboard.datasetSlowestRepair?.map(item => { return item?.color })}
                    value={dashboard.datasetSlowestRepair?.map(item => { return item?.val })}
                    titleYAxes={'AVG of response time (min)'}
                    filter={false}
                />

                <div className='grid grid-cols-2 gap-6'>
                    {/* Total Downtime */}
                    <BarCharts
                        titleHeader={'Top 5 Problematic Machine - Total Downtime'}
                        label={dashboard.totalDowntime?.data.map(item => {return item.machine_name})}
                        color={'#F04438'}
                        value={dashboard.totalDowntime?.data.map(item => {return item.sum_of_downtime})}
                        titleYAxes={'Sum of Downtime (min)'}
                        filter={false}
                    />

                    {/* Avg Downtime */}
                    <BarCharts
                        titleHeader={'Top 5 Problematic Machine - Average of Downtime'}
                        label={dashboard.avgDowntime?.data.map(item => {return item.machine_name})}
                        color={'#F79009'}
                        value={dashboard.avgDowntime?.data.map(item => {return item.avg_of_downtime})}
                        titleYAxes={'Average of Downtime (min)'}
                        filter={false}
                    />

                    
                    {/* Slowest Response */}
                    <BarCharts
                        titleHeader={'Top 5 Slowest Response Time by Machine'}
                        label={dashboard.slowestResponse?.data.map(item => {return item.machine_name})}
                        color={'#1BBDD4'}
                        value={dashboard.slowestResponse?.data.map(item => {return item.avg_of_response})}
                        titleYAxes={''}
                        filter={false}
                    />

                </div>
            </div>
        </main>
    )
}
