import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import Select, { StylesConfig } from 'react-select'
import { PlusIcon, RecycleSubmitIcon, TrashIcon } from '../../../../common/components/icons'
import useInputChangeOverModel from './InputChangeOverModel'
import moment from 'moment'
import { useGetLayoutsQuery } from '../layoutApiSlice'
import { useEffect } from 'react'

export default function InputChangeOverView() {
    const changeOver = useInputChangeOverModel()

    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Input Changeover Sch']} />
                <span className='font-semibold text-[#6F6C6C]'>{changeOver.shiftData} | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
                <span className='text-2xl font-bold'>Input Changeover Schedule</span>
                <div className='flex flex-col gap-[10px] p-3 rounded bg-[#F0F1F3]'>
                    <span className='text-base font-semibold'>Input Changeover Schedule</span>
                    <div className='flex flex-row gap-6 text-sm font-semibold w-[80%]'>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Production Sch Date</span>
                            <input type="date" name='production_sch_date' value={changeOver.changeOverSchedule.production_sch_date} onChange={changeOver.handleChangeScheduleFilter} className=' py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-xs' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Week Ending</span>
                            <input type="date" value={moment(changeOver.changeOverSchedule.production_sch_date).endOf('week').format('YYYY-MM-DD')} onChange={changeOver.handleChangeScheduleFilter} className=' py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E] placeholder:text-xs disabled:border-none disabled:bg-[#D0D3D9] disabled:text-[#9A9898] ' disabled={true} />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Production Shift</span>
                            <select name="production_shift" id="" value={changeOver.changeOverSchedule.production_shift} onChange={changeOver.handleChangeScheduleFilter} className='py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E]'>
                                <option value="Shift 1">Shift 1</option>
                                <option value="Shift 2">Shift 2</option>
                                <option value="Shift 3">Shift 3</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span>Preparation Shift</span>
                            <select name="preparation_shift" id="" value={changeOver.changeOverSchedule.preparation_shift} onChange={changeOver.handleChangeScheduleFilter} className='py-2 px-3 rounded-[6px] border border-[#D0D3D9] bg-[#FFF] text-sm text-[#514E4E]'>
                                <option value="Shift 1">Shift 1</option>
                                <option value="Shift 2">Shift 2</option>
                                <option value="Shift 3">Shift 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[8px] p-3 rounded bg-[#F0F1F3] min-h-[300px]'>
                    <span className='text-base font-semibold'>Toy Changeover</span>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <Select isClearable={false} options={changeOver.dataLine} value={changeOver.lineChangeOver} onChange={changeOver.handleChangeLineId} classNamePrefix="Search Line" styles={changeOver.selectStyles} placeholder='Search Line' />
                    </div>

                    {
                        changeOver?.toyChangover?.map((item, i) => (
                            <div key={i} className='flex items-center gap-3 w-1/2'>
                                <button onClick={() => changeOver.handleDeleteToyNumber(item.id)} className='p-4 rounded bg-[#F04438]'>
                                    <TrashIcon className='scale-110' />
                                </button>
                                <div className='w-full'>
                                    <Select isClearable={false} value={item} onChange={(value) => changeOver.handleChangeToyNumber(item.id, value)} options={changeOver.dataToys} classNamePrefix="Search Line" styles={changeOver.selectStyles} placeholder='Choose Toy Number' />
                                </div>
                            </div>
                        ))
                    }

                    <button onClick={changeOver.handleAddAnotherToy} className='flex items-center gap-2 py-3 px-5 rounded bg-[#F79009] w-fit text-sm font-semibold text-[#FFF]'>
                        <PlusIcon />
                        Add another toy changeover
                    </button>
                </div>
                <button onClick={changeOver.onSubmit} className='flex items-center justify-center gap-2 py-3 px-5 rounded bg-[#F04438] w-1/5 text-sm font-semibold text-[#FFF]'>
                    <RecycleSubmitIcon />
                    Submit
                </button>
            </div>
        </main>
    )
}
