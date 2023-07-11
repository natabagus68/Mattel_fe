import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TrashDialogIcon } from "./TrashDialogIcon.jsx";

export const DeleteDialog = ({ onClick, open, setClose }) => {
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
                <Dialog.Panel className="flex justify-center items-center flex-col gap-8 transform overflow-hidden rounded-xl bg-white-lightest align-middle shadow-xl transition-all text-center min-w-[500px] px-6 pt-10 pb-6">
                  <div className="bg-[#F04438] rounded-full p-6">
                    <TrashDialogIcon />
                  </div>
                  <div className="inline-flex flex-col text-[#313030]">
                    <span className="text-2xl font-semibold">Delete</span>
                    <span className="text-[#514E4E]"> Are you sure you want to delete this file? </span>
                  </div>
                  <div className="flex justify-center gap-3 w-full">
                    <button
                      onClick={setClose}
                      className="py-3 px-[20px] rounded border border-[#6F6C6C] outline-none text-sm font-semibold text-[#6F6C6C] w-full"
                    >
                      Cancel
                    </button>
                    <button
                      type={`button`}
                      role={`button`}
                      onClick={() => {
                        onClick();
                        setClose();
                      }}
                      className="py-3 px-[20px] rounded border border-[#F04438] bg-[#F04438] outline-none text-sm font-semibold text-[#FFF] w-full"
                    >
                      Yes, Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
