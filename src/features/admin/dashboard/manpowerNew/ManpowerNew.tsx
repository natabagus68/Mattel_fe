import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import moment from 'moment'
import { ArrowIcon, DownloadIcon, FilterIcons, PlusIcon, SearchIcon } from '../../../../common/components/icons'
import { ShowFilter } from '../../../../common/components/table/ShowFilter'
import ManPowerTable from './Table/ManPowerTable'
import RealtimeTicketTable from './Table/RealtimeTicketTable'
import RealtimeWorkTable from './Table/RealtimeWorkTable'

export default function ManpowerNew() {
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Manpower']} />
                <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-6'>
                    <div className='w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]'>
                        <div className='w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#20519F]'>
                            <DownloadIcon className='scale-[2.3]' color='#FFFF' />
                        </div>
                        <div className='inline-flex flex-col text-[#514E4E]'>
                            <span className='text-[32px] font-bold '>32</span>
                            <span>In</span>
                        </div>
                    </div>
                    <div className='w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]'>
                        <div className='w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#F79009]'>
                            <DownloadIcon className='scale-[2.3] rotate-180' color='#FFFF' />
                        </div>
                        <div className='inline-flex flex-col text-[#514E4E]'>
                            <span className='text-[32px] font-bold '>12</span>
                            <span>Out</span>
                        </div>
                    </div>
                    <div className='w-full py-[18px] px-6 inline-flex gap-6 items-center rounded-md border border-[#D0D3D9] bg-[#FFF]'>
                        <div className='w-[62px] h-[62px] inline-flex justify-center items-center p-[10px] rounded-3xl bg-[#F04438]'>
                            <PlusIcon className='scale-[2.3] rotate-45' color='#FFFF' />
                        </div>
                        <div className='inline-flex flex-col text-[#514E4E]'>
                            <span className='text-[32px] font-bold '>3</span>
                            <span>Not Logged</span>
                        </div>
                    </div>
                </div>
                
                <ManPowerTable/>
                <RealtimeTicketTable/>
                <RealtimeWorkTable/>
            </div>
            
        </main>
    )
}
