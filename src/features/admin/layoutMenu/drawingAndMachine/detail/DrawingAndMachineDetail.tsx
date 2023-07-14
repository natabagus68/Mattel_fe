import moment from 'moment'
import React from 'react'
import { ArrowIcon, SaveIcons } from '../../../../../common/components/icons'
import { Breadcrumbs } from '../../../../../common/components'
import useDrawingAndMachineDetailModel from './DrawingAndMachineDetailModel'
import { config } from '../../../../../common/utils'

export default function DrawingAndMachineDetail() {
    const data = useDrawingAndMachineDetailModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Drawing and Machine']} />
                <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className=' rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
                <div className='py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]'>
                    <span className='text-2xl font-bold'>Show Drawing</span>
                    <button onClick={data.onPageBack} className='rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold '>
                        <ArrowIcon color='#14988B' className='-rotate-90' />
                        Back
                    </button>
                </div>
                <div className='py-6 px-8 flex flex-col gap-5'>
                    <div className='inline-flex flex-col gap-2'>
                        <span className='text-base font-bold'>Toy Number :</span>
                        <span className='text-sm'>HKT67</span>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 rounded-lg p-[6px] border border-[#D0D3D9] w-full'>
                        <div className='max-w-[600px]'>
                            <img src={`${config.storageBaseUrl}${data.LayoutDataById?.data.drawing}`} alt="" />
                        </div>
                        {/* <span className='text-[#9A9898]'>Drawing_HKT67.Jpg</span> */}
                    </div>
                    <button onClick={data.onUpdate} className='flex items-center justify-center gap-2 rounded py-3 px-5 bg-[#F04438] text-[#FFF] text-sm font-semibold w-[25%]'>
                        <SaveIcons />
                        Update
                    </button>
                </div>
            </div>
        </main>
    )
}
