import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import moment from 'moment'
import { ArrowIcon, DownloadIcon } from '../../../../common/components/icons'
import useChangeOverSummaryModel from './ChangeOverSummaryModel'

export default function ChangeOverSummaryView() {
    const model = useChangeOverSummaryModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Changeover Summary']} />
                <span className='font-semibold text-[#6F6C6C]'>{model.shiftData} | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
                <div className='flex justify-between items-center'>
                    <span className='text-2xl font-bold'>Changeover Schedule Detail</span>
                    <div className="inline-block relative w-fit text-sm font-semibold">
                        <button className="peer font-semibold py-3 px-5 rounded inline-flex items-center gap-2 border border-[#667085] ">
                            <DownloadIcon className='scale-110' />
                            <span className="mr-1 text-[#667085]">Download</span>
                        </button>
                        <ul className="invisible peer-focus:visible absolute text-[#667085] pt-1 w-full">
                            <button className="rounded-t border border-[#667085] bg-[#FFF] hover:bg-gray-50 py-2 px-4 whitespace-no-wrap flex justify-center w-full">Document.JPG</button>
                            <button className="rounded-b border-x border-b border-[#667085] bg-[#FFF] hover:bg-gray-50 py-2 px-4 whitespace-no-wrap flex justify-center w-full" >Document.PDF</button>
                        </ul>
                    </div>
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
                            <input type="date" value={moment(model.layoutParam.production_sch).endOf('week').format('YYYY-MM-DD')} className=' py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-xs disabled:border-none disabled:bg-[#D0D3D9] disabled:text-[#9A9898] ' disabled={true} />
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
                </div>
                <div className='overflow-y-auto'>
                    <table className='w-full'>
                        <thead className='border-y border-y-[#D0D3D9] bg-[#FAFAFB]'>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Created Date</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Week Ending</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Production Sch Date</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Preparation Sch Date</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Preparation Shift Sch</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Production Shift Sch</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Line</th>
                            {/* <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Toy Number</th> */}
                        </thead>
                        <tbody className='text-[#514E4E]'>
                            {
                                model.LayoutData?.data.map((item, i) => (
                                    <tr className='border-b border-b-[#D0D3D9]' key={i}>
                                        <td className='px-2 py-4 text-sm '>{moment(item.created_at).format('DD/MM/YYYY')}</td>
                                        <td className='px-2 py-4 text-sm '>{moment(item.week_ending).format('DD/MM/YYYY')}</td>
                                        <td className='px-2 py-4 text-sm '>{moment(item.production_sch_date).format('DD/MM/YYYY')}</td>
                                        <td className='px-2 py-4 text-sm '>{moment(item.preparation_sch_date).format('DD/MM/YYYY')}</td>
                                        <td className='px-2 py-4 text-sm '>{item.preparation_shift}</td>
                                        <td className='px-2 py-4 text-sm '>{item.production_shift}</td>
                                        <td className='px-2 py-4 text-sm '>{item.line.name}</td>
                                        {/* <td className='px-2 py-4 text-sm '>{item.toy.number}</td> */}
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
