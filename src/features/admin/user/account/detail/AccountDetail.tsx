import React from 'react'
import { Breadcrumbs } from '../../../../../common/components'
import moment from 'moment'
import { ArrowIcon, PenIcon } from '../../../../../common/components/icons'
import ModalChangePassword from '../../../../../common/components/dialog/ChangePassword'
import useAccountDetailModel from './AccountDetailModel'

export default function AccountDetail() {
    const detail = useAccountDetailModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['User']} />
                <span className='font-semibold text-[#6F6C6C]'>{detail.shiftData} | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='rounded-[6px] py-[24px] px-8 flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030] min-h-[600px]'>
                <div className='flex justify-between items-center border-b border-b-[#D0D3D9] pb-6'>
                    <div className='inline-flex flex-col'>
                        <span className='text-2xl font-bold'>User Details</span>
                        <span className='text-[#667085]'>Information account & access.</span>
                    </div>
                    <div className="inline-flex gap-4 w-fit text-sm font-semibold items-center">
                        <button onClick={detail.handleBack} className='rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold '>
                            <ArrowIcon color='#14988B' className='-rotate-90' />
                            Back
                        </button>
                        <button onClick={detail.handleEdit} className="peer font-semibold py-3 px-5 rounded inline-flex items-center gap-2 bg-[#F79009]">
                            <PenIcon className='scale-110' />
                            <span className="mr-1 text-[#FFF]">Edit</span>
                        </button>
                    </div>
                </div>
                <div className='py-6 w-1/2'>
                    {/* IMG Profile */}
                    {/* <div className='flex flex-col gap-3 pb-[20px] border-b border-b-[#D0D3D9]'>
                        <span className='font-semibold text-[#313030]'>Profile Picture</span>
                        <div className='inline-flex flex-col gap-6 w-fit'>
                            <img className='object-cover w-[120px] h-[120px] rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                            <span className='self-center text-[#20519F] text-sm font-semibold'>See Photo</span>
                        </div>
                    </div> */}
                    <div className='inline-flex flex-col gap-3 w-full'>
                        <span className='font-semibold text-[#313030]'>General Information</span>
                        <table className='w-full'>
                            <tbody>
                                <tr>
                                    <td className='inline-flex flex-col w-1/2 pb-6'>
                                        <span className='text-sm font-semibold text-[#989FAD]'>Name</span>
                                        <span className='font-semibold text-[#514E4E]'>{detail.responDataUser?.data.name}</span>
                                    </td>
                                    <td className='inline-flex flex-col w-1/2 pb-6'>
                                        <span className='text-sm font-semibold text-[#989FAD]'>Role</span>
                                        <span className='font-semibold text-[#514E4E]'>{detail.responDataUser?.data.roles?.map(item => { return item.name }).join(',')}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='inline-flex flex-col w-1/2 pb-6'>
                                        <span className='text-sm font-semibold text-[#989FAD]'>KPK</span>
                                        <span className='font-semibold text-[#514E4E]'>{detail.responDataUser?.data.employee?.kpk}</span>
                                    </td>
                                    <td className='inline-flex flex-col w-1/2 pb-6'>
                                        <span className='text-sm font-semibold text-[#989FAD]'>Status</span>
                                        <span className={`font-semibold ${detail.responDataUser?.data.is_verified ? 'text-[#12B569]' : 'text-[#F04438]'}`}>{detail.responDataUser?.data.is_verified ? 'Active' : 'Inactive'}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='inline-flex flex-col w-1/2 pb-6'>
                                        <span className='text-sm font-semibold text-[#989FAD]'>Email</span>
                                        <span className='font-semibold text-[#514E4E]'>{detail.responDataUser?.data.email}</span>
                                    </td>
                                    <td className='inline-flex flex-col w-1/2 pb-6'>
                                        <span className='text-sm font-semibold text-[#989FAD]'>Password</span>
                                        <div className='inline-flex flex-col gap-2 py-2'>
                                            <button onClick={detail.handleOpenModal} className="w-fit font-semibold py-3 px-5 rounded inline-flex items-center gap-2 bg-[#F04438] text-sm text-[#FFF]">
                                                <PenIcon />
                                                Update Password
                                            </button>
                                            <span className='text-[10px] text-[#F79009]'>Last update two months ago</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ModalChangePassword onClick={detail.onUpdatePassword} open={detail.modalChangePassword} setClose={detail.handleCloseModal} handleChange={detail.handleChangeForm} value={detail.formPassword} />
        </main>
    )
}
