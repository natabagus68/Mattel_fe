import React from 'react'
import { Breadcrumbs } from '../../../../../common/components'
import moment from 'moment'
import { ArrowIcon, DownloadIcon, SaveIcons } from '../../../../../common/components/icons'
import useAccountFormModel from './AccountFormModel'
import { SaveConfirmationDialog } from '../../../../../common/components/dialog/SaveConfirmationDialog'
import { SuccessDialog } from '../../../../../common/components/dialog/SuccessDialog'

export default function AccountFormView() {
  const user = useAccountFormModel()
  return (
    <main>
      <div className='flex justify-between items-center mb-6'>
        <Breadcrumbs items={['User']} />
        <span className='font-semibold text-[#6F6C6C]'>{user.shiftData} | {moment().format('h:mm A')} - {moment().format('L')}</span>
      </div>
      <div className=' rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030]'>
        <div className='py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]'>
          <span className='text-2xl font-bold'>{user.id ? 'Edit User' : 'Add User'}</span>
          <button onClick={user.onPageBack} className='rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold '>
            <ArrowIcon color='#14988B' className='-rotate-90' />
            Back
          </button>
        </div>
        <form className='py-6 px-8 flex flex-col gap-6 w-[80%]'>
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="name" className='font-bold'>Name</label>
            <input type="text" name='name'
              className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]'
              placeholder='Input name'
              value={user.formData.name}
              onChange={user.handleChangeForm}
            />
          </div>
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="name" className='font-bold'>KPK</label>
            <input type="text" name='kpk'
              className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]'
              placeholder='Input KPK'
              value={user.formData.kpk}
              onChange={user.handleChangeForm}
            />
          </div>
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="name" className='font-bold'>Email</label>
            <input type="email" name='email'
              className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]'
              placeholder='Input Email'
              value={user.formData.email}
              onChange={user.handleChangeForm}
            />
          </div>
          {
            !user.id ? (
              <div className='inline-flex flex-col gap-2'>
                <label htmlFor="name" className='font-bold'>Password</label>
                <input type="password" name='password'
                  className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]'
                  placeholder='Input Email'
                  value={user.formData.password}
                  onChange={user.handleChangeForm}
                />
              </div>

            ) : (
              null
            )
          }
          {/* <div className='inline-flex flex-col gap-2'>
            <label htmlFor="role" className='font-bold'>Role</label>
            <select name="role"
              className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]'
              value={user.formData.role}
              onChange={user.handleChangeForm}
            >
              <option value="" selected disabled>Select</option>

            </select>
          </div> */}
          <div className='inline-flex flex-col gap-2'>
            <label htmlFor="role" className='font-bold'>Position</label>
            <select name="position"
              className='rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]'
              value={user.formData.position}
              onChange={user.handleChangeForm}
            >
              <option value="" selected disabled>Select</option>

            </select>
          </div>
          {/* Input Field Photo */}
          {/* <div className='inline-flex flex-col gap-2'>
            <span className='text-base font-bold'>Uplad Drawing</span>
            <div className='flex flex-row gap-2 items-center px-[6px] justify-start border border-[#D0D3D9] rounded-lg w-full bg-[#D0D3D9]'>
              <label htmlFor="image" className={`
                      w-fit py-2 flex justify-center rounded-tl rounded-bl font-[600] text-sm cursor-pointer  transition-colors delay-100 z-30`}>
                <div className='inline-flex gap-2 items-center py-1 px-3 rounded-lg bg-[#B9BDC7] text-base font-semibold text-[#667085] whitespace-nowrap'>
                  <DownloadIcon className='rotate-180 scale-125' />
                  Upload File
                </div>
              </label>
              <div>
                {!!user.chooseImage ? (
                  <p className=" text-[#9A9898] font-normal truncate overflow-y-hidden w-[80%]">{user.layoutName}</p>
                ) : <p className=" text-[#9A9898] font-normal">Max file size 5MB.</p>}
                <input
                  id="image"
                  type="file"
                  accept=".jpg, .png"
                  className="file:hidden border border-gray-300 rounded-md w-[80%] py-[5px] px-24 cursor-not-allowed hidden"
                  onChange={user.onImageChange}
                  readOnly
                />
              </div>
            </div>
          </div> */}
          <div className='inline-flex gap-4 items-center w-1/2'>
            <button onClick={user.onSave} className='flex items-center justify-center gap-2 w-full rounded py-3 px-5 bg-[#F04438] text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50' disabled={user.formData.name ? false : true}>
              <SaveIcons />
              Save
            </button>
          </div>
        </form>
      </div>
      <SaveConfirmationDialog open={user.modalConfirm} setClose={user.handleCloseModal} onSave={user.onConfirm} />
      <SuccessDialog open={user.modalSuccess} navigate={() => { user.handleCloseModal(); user.onPageBack() }} />
    </main>
  )
}
