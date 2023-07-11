import React from 'react'
import { ArrowIcon, FilterIcons, SearchIcon } from '../../../../../common/components/icons'

export default function ManPowerTable() {
    return (
        <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
            <div className='flex flex-col gap-1'>
                <span className='text-2xl font-bold'>Manpower</span>
                <span className='text-[#667085]'>Logged Mechanic Status and Location</span>
            </div>
            <div className='p-3 inline-flex justify-between items-center rounded w-full bg-[#F0F1F3]'>
                <div className='inline-flex items-center p-2 gap-2 rounded bg-[#FFF] w-1/3'>
                    <SearchIcon color='#667085' />
                    <input type="text" name="" id="" className='outline-none placeholder:text-sm placeholder:text-[#D0D3D9] w-full' placeholder='Search kpk or name... ' />
                </div>
                <div className='inline-flex items-center py-2 px-4 gap-2 rounded bg-[#FFF]'>
                    <FilterIcons />
                    <span className='text-[#667085] font-semibold'>Filters</span>
                </div>
            </div>

            <div className='overflow-y-auto'>
                <table className='w-full'>
                    <thead className='border-y border-y-[#D0D3D9] bg-[#FAFAFB]'>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>KPK</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Name</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Status</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Availability</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Assigned</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Line</th>
                        <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Time</th>
                    </thead>
                    <tbody>
                        <tr className='border-b border-b-[#D0D3D9]' >
                            <td className='px-2 py-4 text-sm '>1236578578</td>
                            <td className='px-2 py-4 text-sm '>Rizal Hakim</td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#F79009] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    In
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#14988B] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Available
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#F79009] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Not Assigned
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>Standby</td>
                            <td className='px-2 py-4 text-sm '>5:21</td>
                        </tr>
                        <tr className='border-b border-b-[#D0D3D9]' >
                            <td className='px-2 py-4 text-sm '>1239808689</td>
                            <td className='px-2 py-4 text-sm '>Ade Cahyadi</td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#1BBDD4] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Out
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#F04438] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Not Available
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#1BBDD4] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Assigned
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#12B569] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    B01
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>5:21</td>
                        </tr>
                        <tr className='border-b border-b-[#D0D3D9]' >
                            <td className='px-2 py-4 text-sm '>1239808689</td>
                            <td className='px-2 py-4 text-sm '>Ade Cahyadi</td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#F04438] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Not Logged
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#F04438] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Not Available
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#1BBDD4] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    Assigned
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>
                                <div className='p-[10px] rounded-xl p-auto bg-[#12B569] w-fit text-sm font-semibold text-[#FFF] min-w-[115px] text-center'>
                                    B01
                                </div>
                            </td>
                            <td className='px-2 py-4 text-sm '>5:21</td>
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
