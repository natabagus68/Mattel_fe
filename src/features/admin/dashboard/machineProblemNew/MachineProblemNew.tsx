import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import moment from 'moment'
import BarCharts from '../Charts/BarCharts';
import MultipleDatasetBarChart from '../Charts/MultipleDatasetBarChart';

export default function MachineProblemNew() {

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(20), (val, index) => index + year);

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
                        <select className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
                            <option value="" selected disabled>Choose Line</option>
                            <option value="B01">B01</option>
                            <option value="B01">B01</option>
                            <option value="B01">B01</option>
                        </select>
                    </div>
                    <div className='inline-flex flex-col gap-1 w-full'>
                        <span className='text-sm font-semibold'>Machine</span>
                        <select className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
                            <option value="" selected disabled>Choose Machine</option>
                            <option value="B01">B01</option>
                            <option value="B01">B01</option>
                            <option value="B01">B01</option>
                        </select>
                    </div>
                    <div className='inline-flex flex-col gap-1 w-full'>
                        <span className='text-sm font-semibold'>Year</span>
                        <select className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
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
                        <select className='py-[8px] px-[10px] rounded-md border border-[#D0D3D9] text-xs'>
                            <option value="" selected disabled>Choose Month</option>
                            <option value="1">Januari</option>
                            <option value="2">Februari</option>
                            <option value="3">Maret</option>
                        </select>
                    </div>
                </div>

                <MultipleDatasetBarChart
                    titleHeader={'Top 5 Slowest Repair Time by Downtime Reason'}

                    // kasih null atau string kosong untuk kasih gap antar bar charts
                    label={["Broken Isulator", "Broken Block Heater", "Temperature Problem", "", "Overheat","Flow rate and Pressure","Unstable Process","","Overheat","Broken Cilinder","Broken Stopper","","Inverter Error","","Broken Proximity Censor","Broken Proximity Censor","Speed Unconsistency"]}
                    color={['#4D74B2', '#4D74B2', '#4D74B2', "" , "#F9A63A", "#F9A63A", "#F9A63A", "" , "#43ADA2",'#43ADA2','#43ADA2', "", "#F36960", '', '#858D9D', '#858D9D', '#858D9D']}
                    value={[62, 89, 53, null, 33, 45, 78, null, 73,81,44, null, 64, null, 45, 58,55]}
                    titleYAxes={'AVG of response time (min)'}
                    filter={false}
                />

                <div className='grid grid-cols-2 gap-6'>
                    <BarCharts
                        titleHeader={'Top 5 Problematic Machine - Total Downtime'}
                        label={['Sealing Blister', 'Spotwelding Jhook', 'Auto Blister', 'Conveyor', 'Datacode Torso', 'Others']}
                        color={'#F04438'}
                        value={[33, 53, 78, 54, 22, 17]}
                        titleYAxes={'Sum of Downtime (min)'}
                        filter={false}
                    />
                    <BarCharts
                        titleHeader={'Top 5 Problematic Machine - Average of Downtime'}
                        label={['Sealing Blister', 'Spotwelding Jhook', 'Auto Blister', 'Conveyor', 'Datacode Torso']}
                        color={'#F79009'}
                        value={[33, 53, 78, 54, 22]}
                        titleYAxes={'Average of Downtime (min)'}
                        filter={false}
                    />


                    <BarCharts
                        titleHeader={'Top 5 Slowest Response Time by Machine'}
                        label={['Sealing Blister', 'Spotwelding Jhook', 'Auto Blister', 'Conveyor', 'Datacode Torso']}
                        color={'#1BBDD4'}
                        value={[33, 53, 78, 54, 22]}
                        titleYAxes={''}
                        filter={false}
                    />

                </div>
            </div>
        </main>
    )
}
