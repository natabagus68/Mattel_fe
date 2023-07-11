import React from 'react'
import { ArrowIcon, FilterIcons, SearchIcon } from '../../../../../common/components/icons'

export default function RealtimeTicketTable() {
    return (
        <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
            <div className='flex flex-col gap-1'>
                <span className='text-2xl font-bold'>Real Time TicketID Released</span>
            </div>
            <div className='p-3 inline-flex justify-between items-center rounded w-full bg-[#F0F1F3]'>
                <div className='inline-flex items-center p-2 gap-2 rounded bg-[#FFF] w-1/3'>
                    <SearchIcon color='#667085' />
                    <input type="text" name="" id="" className='outline-none placeholder:text-sm placeholder:text-[#D0D3D9] w-full' placeholder='Search ticketid, machine...' />
                </div>
                <div className='inline-flex items-center py-2 px-4 gap-2 rounded bg-[#FFF]'>
                    <FilterIcons />
                    <span className='text-[#667085] font-semibold'>Filters</span>
                </div>
            </div>

            <div className='overflow-y-auto'>
                <table className='w-full'>
                    <thead className='border-y border-y-[#D0D3D9] bg-[#FAFAFB]'>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>TicketID</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Machine</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Reporting Time</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Availability</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Ticket Status</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Line</th>
                    </thead>
                    <tbody>
                        <tr className='border-b border-b-[#D0D3D9]' >
                            <td className='px-2 py-4 text-sm '>120-11-22</td>
                            <td className='px-2 py-4 text-sm '>Sealing Blister</td>
                            <td className='px-2 py-4 text-sm '>4:33</td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#F04438] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Not Started
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>D02</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row items-center self-end pr-6'>
                <button onClick={() => { }} className='p-[10px] border border-[#D0D3D9] rounded-l-lg disabled:bg-[#D0D3D9]' disabled={true} >
                    <ArrowIcon className='-rotate-90' />
                </button>
                <button className='p-[3px] px-[10px] border border-[#D0D3D9]' disabled>1</button>
                <button onClick={() => { }} className='p-[10px] border border-[#D0D3D9] rounded-r-lg disabled:bg-[#D0D3D9]'>
                    <ArrowIcon className='rotate-90' />
                </button>
            </div>

        </div>
    )
}
