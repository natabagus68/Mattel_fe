import React from 'react'
import { DeleteDialog } from '../../../../../common/components/dialog'
import PaginationNew from '../../../../../common/components/table/PaginationNew'
import { Breadcrumbs, Loader } from '../../../../../common/components'
import moment from 'moment'
import { PenIcon, PlusIcon, SearchIcon, TrashIcon } from '../../../../../common/components/icons'
import useDowntimeModel from './DowntimeModel'

export default function DowntimeView() {
    const master = useDowntimeModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Downtime']} />
                <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='py-6 px-8 rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
                <div className='flex justify-between items-center'>
                    <div className='inline-flex flex-col'>
                        <span className='text-2xl font-bold'>Downtime</span>
                        <span className='text-[#667085]'>Management data here.</span>
                    </div>
                    <div className="inline-block relative w-fit text-sm font-semibold">
                        <button onClick={master.handleAdd} className="peer font-semibold py-3 px-5 rounded inline-flex items-center gap-2 bg-[#20519F]">
                            <PlusIcon className='scale-110' />
                            <span className="mr-1 text-[#FFF]">Add Data</span>
                        </button>
                    </div>
                </div>
                <div className='p-3 inline-flex justify-between items-center rounded w-full bg-[#F0F1F3]'>
                    <div className='inline-flex items-center p-2 gap-2 rounded bg-[#FFF] border border-[#E7EAEE] w-1/3'>
                        <SearchIcon color='#667085' />
                        <input type="text" name="search" onChange={master.handleChangeParam} value={master.paramData.search} className='outline-none text-sm placeholder:text-[#D0D3D9] w-full' placeholder='Search downtime reason... ' />
                    </div>
                    <div className='inline-flex items-center gap-2'>
                        <span className='text-sm font-semibold'>Sort by</span>
                        <select name='sort' onChange={master.handleChangeParam} value={master.paramData.sort} className='p-2 rounded text-sm outline-none'>
                            <option value="DowntimeReason_ASC">Name (A-Z)</option>
                            <option value="DowntimeReason_DESC">Name (Z-A)</option>
                            <option value="UpdatedAt_ASC">Last Update</option>
                            <option value="UpdatedAt_DESC">First Update</option>
                        </select>
                    </div>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead className='border-y border-y-[#D0D3D9] bg-[#FAFAFB]'>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Machine Category</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Downtime Reason</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Repair Time</th>
                            <th className='p-2 font-semibold text-sm text-[#667085] text-start'>Actions</th>
                        </thead>
                        <tbody>
                            {
                                !master.isLoading ?
                                    master.responDataDowntime?.data.length !== 0 ?
                                        master.responDataDowntime?.data.map((item, i) => (
                                            <tr className='border-b border-b-[#D0D3D9]' key={i}>
                                                <td className='px-2 py-4 text-sm'>{item?.machine_category?.name}</td>
                                                <td className='px-2 py-4 text-sm'>{item.downtime_reason}</td>
                                                <td className='px-2 py-4 text-sm'>{item.standard_repair_time}</td>
                                                <td className='px-2 py-2 text-sm w-[10%]'>
                                                    <div className='inline-flex gap-3'>
                                                        <button onClick={() => master.handleEdit(item.id)} className='inline-flex items-center justify-center p-[16px] rounded bg-[#F79009] h-[48px] w-[48px]'>
                                                            <PenIcon height={24} width={24} />
                                                        </button>
                                                        <button onClick={() => master.handleDelete(item.id)} className='inline-flex items-center justify-center p-[16px] rounded bg-[#F04438] h-[48px] w-[48px]'>
                                                            <TrashIcon height={16} width={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={3} className="py-2 px-[20px] text-center bg-red-200">
                                                    Data empty
                                                </td>
                                            </tr>
                                        ) : (
                                        <tr>
                                            <td colSpan={3} className="py-2 px-[20px]">
                                                <div className='inline-flex justify-center w-full'>
                                                    <Loader />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
                <PaginationNew page={master.paramData.page} lastpage={master.responDataDowntime?.total_page} onNext={master.onNextPage} onPrev={master.onPrevPage} />
            </div>
            <DeleteDialog onClick={master.onDelete} open={master.modalDelete} setClose={master.handleCancelDelete} />
        </main>
    )
}
