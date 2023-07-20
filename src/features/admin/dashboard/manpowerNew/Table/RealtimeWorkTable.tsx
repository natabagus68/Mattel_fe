import React from 'react'
import { ArrowIcon, FilterIcons, SearchIcon } from '../../../../../common/components/icons'
import moment from 'moment'
import { Loader } from '../../../../../common/components'
import PaginationNew from '../../../../../common/components/table/PaginationNew'

export default function RealtimeWorkTable({ data, modalFilter, isLoad, paramData, handleChange, onNext, onPrev }) {
    return (
        <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
            <div className='flex flex-col gap-1'>
                <span className='text-2xl font-bold'>Real Time Work Order</span>
            </div>
            <div className='p-3 inline-flex justify-between items-center rounded w-full bg-[#F0F1F3]'>
                <div className='inline-flex items-center p-2 gap-2 rounded bg-[#FFF] w-1/3'>
                    <SearchIcon color='#667085' />
                    <input type="text" name="searchRealtimeWork" value={paramData.searchRealtimeWork} onChange={handleChange} className='outline-none placeholder:text-sm placeholder:text-[#D0D3D9] w-full' placeholder='Search Ticketid, machine, mechanic... ' />
                </div>
                <div onClick={modalFilter} className='inline-flex items-center py-2 px-4 gap-2 rounded bg-[#FFF] cursor-pointer'>
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
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Line</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Ticket Status</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Mechanic</th>
                    </thead>
                    <tbody>
                        {
                            !isLoad ?
                                data.data?.length !== 0 ?
                                    data.data?.map((item, i) => (
                                        <tr className='border-b border-b-[#D0D3D9]' key={i}>
                                            <td className='px-2 py-4 text-sm'>{item.id}</td>
                                            <td className='px-2 py-4 text-sm'>{item.machine?.machine_code_id ?? '-'}</td>
                                            <td className='px-2 py-4 text-sm'>{moment(item.report_at).format('hh:mm')}</td>
                                            <td className='px-2 py-4 text-sm'>{item.line?.line_group?.name} - {item.line?.name}</td>
                                            <td className='px-2 py-4 text-sm'>
                                                {
                                                    item.status === 'Not Started' ? (
                                                        <div className='p-[10px] rounded-xl p-auto bg-[#F04438] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                                            Not Started
                                                        </div>
                                                    ) :
                                                        item.status === 'On Progress' ? (
                                                            <div className='p-[10px] rounded-xl p-auto bg-[#F79009] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                                                On Progress
                                                            </div>
                                                        ) :
                                                            item.status === 'Closed' ? (
                                                                <div className='p-[10px] rounded-xl p-auto bg-[#12B569] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                                                    Finished
                                                                </div>
                                                            ) : null
                                                }
                                            </td>
                                            <td className='px-2 py-4 text-sm'>{item.ticket_users[0]?.user?.name ?? '-'}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={6} className="py-2 px-[20px] text-center bg-red-200">
                                                Data empty
                                            </td>
                                        </tr>
                                    ) : (
                                    <tr>
                                        <td colSpan={6} className="py-2 px-[20px]">
                                            <div className='inline-flex justify-center w-full'>
                                                <Loader />
                                            </div>
                                        </td>
                                    </tr>
                                )
                        }
                        {/* <tr className='border-b border-b-[#D0D3D9]' >
                            <td className='px-2 py-4 text-sm '>120-11-22</td>
                            <td className='px-2 py-4 text-sm '>Sealing Blister</td>
                            <td className='px-2 py-4 text-sm '>4:33</td>
                            <td className='px-2 py-4 text-sm '>H12</td>
                            <td className='px-2 py-4 text-sm '>
                                
                            </td>
                            <td className='px-2 py-4 text-sm '>Tommy Susanto</td>
                        </tr>
                        <tr className='border-b border-b-[#D0D3D9]' >
                            <td className='px-2 py-4 text-sm '>120-11-25</td>
                            <td className='px-2 py-4 text-sm '>Oven Conveyor</td>
                            <td className='px-2 py-4 text-sm '>4:33</td>
                            <td className='px-2 py-4 text-sm '>H12</td>
                            <td className='px-2 py-4 text-sm '>
                               
                            </td>
                            <td className='px-2 py-4 text-sm '>Wahyu Purnomo</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <PaginationNew page={paramData.pageRealtimeWork} lastpage={data?.total_page} onNext={onNext} onPrev={onPrev} />


        </div>
    )
}
