import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TrashDialogIcon } from "./TrashDialogIcon.jsx";
import { ChangePassIcon } from '../icons/ChangePasswordIcons.jsx';

export default function ModalChangePassword({ onClick, open, setClose, value, handleChange }) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center bg-black-500/50">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-0"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
              >
                <form onSubmit={(e) => {onClick(e);setClose()}}>

                    <Dialog.Panel className="flex justify-center items-center flex-col gap-8 transform overflow-hidden rounded-xl bg-white-lightest align-middle shadow-xl transition-all text-center min-w-[500px] px-6 pt-10 pb-6">
                        <div className='inline-flex items-center gap-4 self-start'>
                            <div className='border-[8px] border-[#FEECEB] bg-[#FAC5C1] rounded-full inline-flex justify-center items-center p-2 w-[52px] h-[52px]'>
                                <ChangePassIcon className=''/>
                            </div>
                            <div className='inline-flex flex-col items-start'>
                                <span className='text-2xl font-semibold text-[#313030]'>Change Password</span>
                                <span className='text-sm text-[#9A9898]'>Update your password.</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className='inline-flex flex-col gap-2 items-start w-full'>
                                <span>New Password</span>
                                <input name='new_password' value={value?.new_password} onChange={handleChange} type="password" className='px-4 py-[10px] rounded-lg border boder-[#D0D3D9] w-full' placeholder='enter new password' />
                            </div>
                            <div className='inline-flex flex-col gap-2 items-start w-full'>
                                <span>Confirm Password</span>
                                <input name='confirm_password' value={value?.confirm_password} onChange={handleChange} type="password" className='px-4 py-[10px] rounded-lg border boder-[#D0D3D9] w-full' placeholder='re-enter new password' />
                            </div>
                        </div>
                    <div className="flex justify-center gap-3 w-full">
                        <button
                        onClick={setClose}
                        type='button'
                        className="py-3 px-[20px] rounded border border-[#6F6C6C] outline-none text-sm font-semibold text-[#6F6C6C] w-full"
                        >
                        Cancel
                        </button>
                        <button
                        type={`submit`}
                        role={`button`}
                        className="py-3 px-[20px] rounded border border-[#F04438] bg-[#F04438] outline-none text-sm font-semibold text-[#FFF] w-full"
                        >
                        Update
                        </button>
                    </div>
                    </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
