import React from 'react'
import { Breadcrumbs } from '../../../../../common/components'
import moment from 'moment'
import { ArrowIcon, DownloadIcon, SaveIcons } from '../../../../../common/components/icons'
import useDrawingAndMachineFormModel from './DrawingAndMachineFormModel'

export default function DrawingAndMachineForm() {
    const data = useDrawingAndMachineFormModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Drawing and Machine']} />
                <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className=' rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
                <div className='py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]'>
                    <span className='text-2xl font-bold'>Add Drawing</span>
                    <button onClick={data.onPageBack} className='rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold '>
                        <ArrowIcon color='#14988B' className='-rotate-90' />
                        Back
                    </button>
                </div>
                <div className='py-6 px-8 flex flex-col gap-5 w-[45%]'>
                    <div className='inline-flex flex-col gap-2'>
                        <span className='text-base font-bold'>Toy Number :</span>
                        <span className='text-sm'>HKT67</span>
                    </div>
                    <div className='inline-flex flex-col gap-6'>
                        <span className='text-base font-bold'>Uplad Drawing</span>
                        <div className='flex flex-row gap-2 items-center px-[6px] justify-start border border-[#D0D3D9] rounded-lg w-full bg-[#D0D3D9]'>
                            <label htmlFor="image"  className={`
                            w-fit py-2 flex justify-center rounded-tl rounded-bl font-[600] text-sm cursor-pointer  transition-colors delay-100 z-30`}>
                                <div className='inline-flex gap-2 items-center py-1 px-3 rounded-lg bg-[#B9BDC7] text-base font-semibold text-[#667085] whitespace-nowrap'>
                                    <DownloadIcon  className='rotate-180 scale-125'/>
                                    Upload File
                                </div>
                            </label>
                            <div>
                                {!!data.chooseImage ? (
                                        <p className=" text-[#9A9898] font-normal truncate overflow-y-hidden w-[80%]">{data.layoutName}</p>
                                ) : <p className=" text-[#9A9898] font-normal">Max file size 5MB.</p>}
                                <input
                                    id="image"
                                    type="file"
                                    accept=".jpg, .png"
                                    className="file:hidden border border-gray-300 rounded-md w-[80%] py-[5px] px-24 cursor-not-allowed hidden"
                                    onChange={data.onImageChange}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='inline-flex gap-4 items-center'>
                            <button onClick={data.onSave} className='flex items-center justify-center gap-2 w-full rounded py-3 px-5 bg-[#F04438] text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50' disabled={data.fileUrl ? false : true }>
                                <SaveIcons />
                                Save
                            </button>
                            <button onClick={data.onPageBack} className='w-full rounded py-3 px-5 bg-[#B8B6B6] text-[#FFF] text-sm font-semibold '>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
