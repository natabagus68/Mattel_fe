import React from 'react'
import { Breadcrumbs } from '../../../../common/components'
import moment from 'moment'

export default function LineView() {
  return (
    <main>
        <div className='flex justify-between items-center mb-6'>
            <Breadcrumbs items={['General']} />
            <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
        </div>
        <div className='py-6 px-8 rounded-md border border-[#D0D3D9] bg-[#FFF] inline-flex flex-col gap-[16px] w-full'>
            <div className='inline-flex justify-between items-center'>
                <span className='text-[#313030] font-bold text-2xl'>Andon Status</span>
            </div>
            <div className='flex flex-col px-6 py-4 gap-[8px] rounded-md border border-[#D0D3D9] w-fit'>
                <span className='font-semibold'>Legend</span>
                <div className='flex items-center gap-6 text-[#514E4E]'>
                    <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#D0D3D9] rounded-full'></div>
                        <span className='text-sm'>Normal</span>
                    </div>
                    <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#F04438] rounded-full'></div>
                        <span className='text-sm'>Machine Problem</span>
                    </div>
                    <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#12B569] rounded-full'></div>
                        <span className='text-sm'>Layout Problem</span>
                    </div>
                    <div className='inline-flex items-center gap-2'>
                        <div className='min-h-[12px] min-w-[12px] bg-[#F79009] rounded-full'></div>
                        <span className='text-sm'>Material Problem</span>
                    </div>
                </div>
            </div>

            {/* MOD Line */}

            <div className='grid grid-cols-3 gap-x-[6px] gap-y-4 '>
                <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] w-fit'>
                    <span className='font-bold text-2xl'>MOD</span>
                    <div className='grid grid-cols-6 gap-3 text-[#514E4E]'>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            06
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Card Line Grid # */}
            <div className='grid grid-cols-3 gap-x-[6px] gap-y-4 '>
                <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] w-fit min-h-[198px]'>
                    <span className='font-bold text-2xl'>A</span>
                    <div className='grid grid-cols-6 gap-3 text-[#514E4E]'>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            06
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] w-fit min-h-[198px]'>
                    <span className='font-bold text-2xl'>B</span>
                    <div className='grid grid-cols-6 gap-3 text-[#514E4E]'>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F79009] text-[#FFF]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            06
                        </div>
                    </div>
                </div>

                <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] w-fit min-h-[198px]'>
                    <span className='font-bold text-2xl'>C</span>
                    <div className='grid grid-cols-6 gap-3 text-[#514E4E]'>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#12B569] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F79009] text-[#FFF]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#12B569] text-[#FFF]'>
                            06
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] w-fit min-h-[198px]'>
                    <span className='font-bold text-2xl'>D</span>
                    <div className='grid grid-cols-6 gap-3 text-[#514E4E]'>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#12B569] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F79009] text-[#FFF]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#12B569] text-[#FFF]'>
                            06
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F04438] text-[#FFF]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            05
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#12B569] text-[#FFF]'>
                            06
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-x-[6px] gap-y-4 '>
                <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] w-fit'>
                    <span className='font-bold text-2xl'>AB</span>
                    <div className='grid grid-cols-6 gap-3 text-[#514E4E]'>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#F79009] text-[#FFF]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-6 gap-[21px] rounded-md border border-[#D0D3D9] w-fit'>
                    <span className='font-bold text-2xl'>NTD</span>
                    <div className='grid grid-cols-6 gap-3 text-[#514E4E]'>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            01
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            02
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            03
                        </div>
                        <div className='inline-flex items-center justify-center p-[10px] h-[42px] w-[42px] rounded-xl text-sm font-semibold  bg-[#D0D3D9]'>
                            04
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
