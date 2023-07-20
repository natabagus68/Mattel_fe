import React from 'react'
import { Breadcrumbs } from '../../../../../common/components';
import moment from 'moment';
import { ArrowIcon, SaveIcons } from '../../../../../common/components/icons';
import { SaveConfirmationDialog } from '../../../../../common/components/dialog/SaveConfirmationDialog';
import { SuccessDialog } from '../../../../../common/components/dialog/SuccessDialog';
import useDowntimeFormModel from './DowntimeFormModel';

export default function DowntimeForm() {
    const form = useDowntimeFormModel()
    return (
        <main>
            <div className='flex justify-between items-center mb-6'>
                <Breadcrumbs items={['Downtime']} />
                <span className='font-semibold text-[#6F6C6C]'>Shift 1 | {moment().format('h:mm A')} - {moment().format('L')}</span>
            </div>
            <div className='rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030] min-h-[600px]'>
                <div className='py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]'>
                    <span className='text-2xl font-bold'>{form.id ? "Edit Downtime" : "Add Downtime"}</span>
                    <button onClick={form.handleBack} className='rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold '>
                        <ArrowIcon color='#14988B' className='-rotate-90' />
                        Back
                    </button>
                </div>
                <div className='px-6 flex flex-col gap-5'>
                    <form onSubmit={form.handleSave} className='flex flex-col w-[85%] gap-3'>
                        <div className='inline-flex flex-col gap-2'>
                            <label htmlFor="name" className='font-bold'>Downtime Reason</label>
                            <input type="text" name='downtime_reason' value={form.formData.downtime_reason} onChange={form.handleChangeForm} className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]' placeholder='Input downtime reason' />
                        </div>
                        <div className='inline-flex flex-col gap-2'>
                            <label htmlFor="name" className='font-bold'>Repair Time by minutes</label>
                            <input type="number" name='standard_repair_time' value={form.formData.standard_repair_time} onChange={form.handleChangeForm} className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]' placeholder='Input minutes number' />
                        </div>
                        <div className='inline-flex flex-col gap-2'>
                            <label htmlFor="machine_category_id" className='font-bold'>Line Group</label>
                            <select name="machine_category_id"
                                value={form.formData.machine_category_id}
                                onChange={form.handleChangeForm}
                                className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]'
                            >
                                <option value="" selected disabled>Select</option>
                                {
                                    !form.loadMachineCategory ?
                                        form.responMachineCategory?.data.map((item, i) => (
                                            <option value={item.id} key={i}>{item.name}</option>
                                        ))
                                        : (
                                            <option value="" disabled>Load data . . .</option>
                                        )
                                }
                            </select>
                        </div>
                        <div className='flex items-center gap-3 w-[50%] pt-6'>
                            <button className='px-[20px] py-3 inline-flex items-center justify-center rounded bg-[#F04438] gap-2 w-1/2 text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50' disabled={form.formData.downtime_reason === '' ? true : false}>
                                <SaveIcons />
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SaveConfirmationDialog open={form.modalConfirm} setClose={form.handleCloseModal} onSave={form.onConfirm} />
            <SuccessDialog open={form.modalSuccess} navigate={() => { form.handleCloseModal(); form.handleBack() }} />
        </main>
    )
}
