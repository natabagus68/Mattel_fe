
import React from 'react'
import { Breadcrumbs } from '../../../../../common/components'
import moment from 'moment'
import { ArrowIcon } from '../../../../../common/components/icons'
import useDrawingAndMachineModel from './DrawingAndMachineModel'

export default function DrawingAndMachineView() {
    const data = useDrawingAndMachineModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Drawing and Machine']} />
                <span className='font-semibold text-[#6F6C6C]'>{data.shiftData} | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
                <div className='flex justify-between'>
                    <span className='text-2xl font-bold'>Drawing and Machine</span>
                </div>
                <div className='flex flex-col gap-[10px] p-3 rounded bg-[#F0F1F3] '>
                    <span className='text-base font-semibold'>Filter Schedule Detail</span>
                    <div className='flex flex-row gap-6 text-sm font-semibold w-[80%]'>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Production Sch Date</span>
                            <input name='production_sch' onChange={data.handleChangeParam} value={data.layoutParam.production_sch} type="date" className=' py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-xs placeholder:font' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Week Ending</span>
                            <input name='week_ending' onChange={data.handleChangeParam} value={moment(data.layoutParam.production_sch).endOf('week').format('YYYY-MM-DD')} type="date" className=' py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-xs disabled:border-none disabled:bg-[#D0D3D9] disabled:text-[#9A9898] ' disabled={true} />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Production Shift</span>
                            <select name='production_shift' onChange={data.handleChangeParam} value={data.layoutParam.production_shift} className='py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E]'>
                                <option value="Shift 1">Shift 1</option>
                                <option value="Shift 2">Shift 2</option>
                                <option value="Shift 3">Shift 3</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Preparation Shift</span>
                            <select name='preparation_shift' onChange={data.handleChangeParam} value={data.layoutParam.preparation_shift} className='py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E]'>
                                <option value="Shift 1">Shift 1</option>
                                <option value="Shift 2">Shift 2</option>
                                <option value="Shift 3">Shift 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='inline-flex flex-col gap-2'>
                        <span className='text-base font-semibold'>Color Status</span>
                        <div className='inline-flex gap-2 items-center text-sm text-[#514E4E]'>
                            <div className='inline-flex gap-[6px] items-center'>
                                <div className='h-4 w-4 rounded-full bg-[#12B569]'></div>
                                <span>Inputted</span>
                            </div>
                            <div className='inline-flex gap-[6px] items-center'>
                                <div className='h-4 w-4 rounded-full bg-[#F04438]'></div>
                                <span>Not Inputted</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overflow-y-auto'>
                    <table className='w-full'>
                        <thead className='border-y border-y-[#D0D3D9] bg-[#FAFAFB]'>
                            {/* <th className='p-2 font-semibold text-sm text-[#667085] text-start w-full'>Toy Number</th> */}
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start whitespace-nowrap'>Machine Quantity</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start whitespace-nowrap'>Drawing</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start whitespace-nowrap'>Status Machine Qty</th>
                        </thead>
                        <tbody className='text-[#514E4E]'>
                            {
                                data.LayoutData?.data.map((item, i) => (
                                    <tr className='border-b border-b-[#D0D3D9]' key={i}>
                                        {/* <td className='px-2 py-4 text-sm '>{item.toy.number}</td> */}
                                        <td className='px-2 py-4 text-sm '>{
                                            item.machine_quantity ? item.machine_quantity : 0
                                        }</td>
                                        <td className='px-2 py-4 text-sm whitespace-nowrap'>
                                            {
                                                item.drawing_inputted_at ? (
                                                    <div onClick={() => data.handleShowDrawing(item.id)} className='w-full rounded-xl p-[10px] bg-[#12B569] inline-flex items-center justify-center text-sm font-semibold text-[#FFF] cursor-pointer hover:bg-[#12B569]/70'>
                                                        Show Drawing
                                                    </div>
                                                ) : (
                                                    <div onClick={() => data.handleInputDrawing(item.id)} className='w-full rounded-xl p-[10px] bg-[#F04438] inline-flex items-center justify-center text-sm font-semibold text-[#FFF] cursor-pointer hover:bg-[#F04438]/70'>
                                                        Input Drawing
                                                    </div>
                                                )
                                            }
                                        </td>
                                        <td className='px-2 py-4 text-sm whitespace-nowrap'>
                                            {
                                                item.machine_qty_inputted_at ? (
                                                    <div className='w-full rounded-xl p-[10px] bg-[#12B569] inline-flex items-center justify-center text-sm font-semibold text-[#FFF]'>
                                                        Inputted
                                                    </div>
                                                ) : (
                                                    <div className='w-full rounded-xl p-[10px] bg-[#F04438] inline-flex items-center justify-center text-sm font-semibold text-[#FFF]'>
                                                        Not Inputted
                                                    </div>
                                                )
                                            }
                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className='flex flex-row items-center self-end pr-6'>
                    <button onClick={data.onPrevPage} className='p-[10px] border border-[#D0D3D9] rounded-l-lg disabled:bg-[#D0D3D9]' disabled={data.layoutParam.page === 1 ? true : false} >
                        <ArrowIcon className='-rotate-90' />
                    </button>
                    <button className='p-[3px] px-[10px] border border-[#D0D3D9]' disabled>{data.layoutParam.page}</button>
                    <button onClick={data.onNextPage} className='p-[10px] border border-[#D0D3D9] rounded-r-lg disabled:bg-[#D0D3D9]'>
                        <ArrowIcon className='rotate-90' />
                    </button>
                </div>
            </div>
        </main>
    )
}
