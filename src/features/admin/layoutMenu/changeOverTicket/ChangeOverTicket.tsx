
import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import moment from 'moment'
import { ArrowIcon } from '../../../../common/components/icons'
import useChangeOverTicketModel from './ChangeOverTicketModel'


export default function ChangeOverTicket() {
    const model = useChangeOverTicketModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Ticket Status']} />
                <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
                <div className='flex justify-between'>
                    <span className='text-2xl font-bold'>Ticket Status</span>
                </div>
                <div className='flex flex-col gap-[10px] p-3 rounded bg-[#F0F1F3] '>
                    <span className='text-base font-semibold'>Filter Schedule Detail</span>
                    <div className='flex flex-row gap-6 text-sm font-semibold w-[80%]'>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Production Sch Date</span>
                            <input type="date" onChange={(e) => model.handleProductionSchDate(e.target.value)} className=' py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-xs' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Week Ending</span>
                            <input type="date" value={moment().endOf('week').format('YYYY-MM-DD')} className=' py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-xs disabled:border-none disabled:bg-[#D0D3D9] disabled:text-[#9A9898] ' disabled={true} />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Production Shift</span>
                            <select value={model.layoutParam.production_shift} onChange={(e) => model.handleProductionShift(e.target.value)} className='py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-sm'>
                                <option value="" disabled>Choose Production Shift</option>
                                <option value="shift 1">Shift 1</option>
                                <option value="shift 2">Shift 2</option>
                                <option value="shift 3">Shift 3</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Preparation Shift</span>
                            <select value={model.layoutParam.preparation_shift} onChange={(e) => model.handlePreparationShift(e.target.value)} className='py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-sm'>
                                <option value="" disabled>Choose Preparation Shift</option>
                                <option value="shift 1">Shift 1</option>
                                <option value="shift 2">Shift 2</option>
                                <option value="shift 3">Shift 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='inline-flex flex-col gap-2'>
                        <span className='text-base font-semibold'>Ticket Status</span>
                        <div className='inline-flex gap-2 items-center text-sm text-[#514E4E]'>
                            <div className='inline-flex gap-[6px] items-center'>
                                <div className='h-4 w-4 rounded-full bg-[#12B569]'></div>
                                <span>Finished</span>
                            </div>
                            <div className='inline-flex gap-[6px] items-center'>
                                <div className='h-4 w-4 rounded-full bg-[#F04438]'></div>
                                <span>Not Started</span>
                            </div>
                            <div className='inline-flex gap-[6px] items-center'>
                                <div className='h-4 w-4 rounded-full bg-[#F79009]'></div>
                                <span>On Progress</span>
                            </div>
                            <div className='inline-flex gap-[6px] items-center'>
                                <div className='h-4 w-4 rounded-full bg-[#1BBDD4]'></div>
                                <span>Not Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overflow-y-auto'>
                    <table className='w-full'>
                        <thead className='border-y border-y-[#D0D3D9] bg-[#FAFAFB]'>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Created Date</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Week Ending</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Preparation Sch Date</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Preparation Sch</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Production Shift Sch</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Line</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Toy Number</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Status</th>
                        </thead>
                        <tbody className='text-[#514E4E]'>
                            {
                                model.LayoutData?.data.map((item, i) => (
                                    <tr className='border-b border-b-[#D0D3D9]' key={i}>
                                        <td className='px-2 py-4 text-sm '>{moment(item.created_at).format('DD/MM/YYYY')}</td>
                                        <td className='px-2 py-4 text-sm '>{moment(item.week_ending).format('DD/MM/YYYY')}</td>
                                        <td className='px-2 py-4 text-sm '>{moment(item.production_sch_date).format('DD/MM/YYYY')}</td>
                                        <td className='px-2 py-4 text-sm '>{item.preparation_shift}</td>
                                        <td className='px-2 py-4 text-sm '>{item.production_shift}</td>
                                        <td className='px-2 py-4 text-sm '>{item.line.name}</td>
                                        <td className='px-2 py-4 text-sm '>{item.toy.number}</td>
                                        <td className='px-2 py-4 text-sm '>
                                            {
                                                item.status == 'Not Started' ? (
                                                    <div className='w-full rounded-xl p-[10px] bg-[#F04438] inline-flex items-center justify-center text-sm font-semibold text-[#FFF]'>
                                                        Not Started
                                                    </div>
                                                ) : item.status === 'On Progress' ? (
                                                    <div className='w-full rounded-xl p-[10px] bg-[#F79009] inline-flex items-center justify-center text-sm font-semibold text-[#FFF]'>
                                                        On Progress
                                                    </div>
                                                ) : item.status === 'Not Closed' ? (
                                                    <div className='w-full rounded-xl p-[10px] bg-[#1BBDD4] inline-flex items-center justify-center text-sm font-semibold text-[#FFF]'>
                                                        Not Closed
                                                    </div>
                                                ) : item.status === 'Finished' ? (
                                                    <div className='w-full rounded-xl p-[10px] bg-[#12B569] inline-flex items-center justify-center text-sm font-semibold text-[#FFF]'>
                                                        Finished
                                                    </div>
                                                ) : ""
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-row items-center self-end pr-6'>
                    <button onClick={model.onPrevPage} className='p-[10px] border border-[#D0D3D9] rounded-l-lg disabled:bg-[#D0D3D9]' disabled={model.layoutParam.page === 1 ? true : false} >
                        <ArrowIcon className='-rotate-90' />
                    </button>
                    <button className='p-[3px] px-[10px] border border-[#D0D3D9]' disabled>{model.layoutParam.page}</button>
                    <button onClick={model.onNextPage} className='p-[10px] border border-[#D0D3D9] rounded-r-lg disabled:bg-[#D0D3D9]'>
                        <ArrowIcon className='rotate-90' />
                    </button>
                </div>
            </div>
        </main>
    )
}
