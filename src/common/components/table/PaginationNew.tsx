import React from 'react'
import { ArrowIcon } from '../icons'

export default function PaginationNew({
    page,
    lastpage,
    onPrev,
    onNext
}) {
    return (
        <div className='flex flex-row items-center self-end pr-6'>
            <button onClick={onPrev} className='p-[10px] border border-[#D0D3D9] rounded-l-lg disabled:bg-[#D0D3D9]' disabled={page === 1 ? true : false} >
                <ArrowIcon className='-rotate-90' />
            </button>
            <button className='p-[3px] px-[10px] border border-[#D0D3D9]' disabled>{page}</button>
            <button onClick={onNext} className='p-[10px] border border-[#D0D3D9] rounded-r-lg disabled:bg-[#D0D3D9]' disabled={lastpage===page ? true : false}>
                <ArrowIcon className='rotate-90' />
            </button>
        </div>
    )
}
