import React from 'react'
import { Breadcrumbs } from '../../../../../common/components';
import { ArrowIcon, SaveIcons } from '../../../../../common/components/icons';
import moment from 'moment';
import { SaveConfirmationDialog } from '../../../../../common/components/dialog/SaveConfirmationDialog';
import { SuccessDialog } from '../../../../../common/components/dialog/SuccessDialog';
import useMachineCategoryFormModel from './MachineCategoryFormModel';
import { FailedDialog } from '../../../../../common/components/dialog/FailedDialog';

export default function MachineCategoryForm() {
    const form = useMachineCategoryFormModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Machine Category']} />
                <span className='font-semibold text-[#6F6C6C]'>{form.shiftData} | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030] min-h-[600px]'>
                <div className='py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]'>
                    <span className='text-2xl font-bold'>{form.id ? "Edit Machine Category" : "Add Machine Category"}</span>
                    <button onClick={form.handleBack} className='rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold '>
                        <ArrowIcon color='#14988B' className='-rotate-90' />
                        Back
                    </button>
                </div>
                <div className='px-6 flex flex-col gap-5'>
                    <form onSubmit={form.handleValidation} className='flex flex-col w-[85%] gap-6'>
                        <div className='inline-flex flex-col gap-2'>
                            <label htmlFor="name" className='font-bold'>Name</label>
                            <input type="text" name='name' value={form.formData.name} onChange={form.handleChangeForm} className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]' placeholder='Enter Machine Category Name' />
                        </div>
                        <div className='inline-flex flex-col gap-2'>
                            <label htmlFor="abbreviation" className='font-bold'>Abbreviation</label>
                            <input type="text" name='abbreviation' value={form.formData.abbreviation} onChange={form.handleChangeForm} className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]' placeholder='Enter Machine Category Abbreviation' />
                        </div>
                        <div className='flex items-center gap-3 w-[50%] pt-6'>
                            <button className='px-[20px] py-3 inline-flex items-center justify-center rounded bg-[#F04438] gap-2 w-1/2 text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50' disabled={form.formData.name === '' ? true : false}>
                                <SaveIcons />
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SaveConfirmationDialog open={form.modalConfirm} setClose={form.handleCloseModal} onSave={form.onConfirm} />
            <FailedDialog
                open={form.modalFailed}
                navigate={() => {
                    form.handleCloseModal();
                }}
                message={form.failedMessage}
            />
            <SuccessDialog open={form.modalSuccess} navigate={() => { form.handleCloseModal(); form.handleBack() }} />
        </main>
    )
}
