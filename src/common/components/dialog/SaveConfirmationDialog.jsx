import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ConfirmationIcon } from "./ConfirmationIcon.jsx";
import { ConfirmIconDialog } from "../icons/ConfirmIconDialog.jsx";

export const SaveConfirmationDialog = ({ open, setClose, onSave }) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setClose()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
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
                  {/*TODO : Question mark icon*/}
                  <ConfirmIconDialog />
                  <div className="inline-flex flex-col text-[#313030]">
                    <span className="text-2xl font-semibold">Confirm the action</span>
                    <span className="text-[#514E4E]"> Is the data you entered correct? </span>
                  </div>
                  <div className="flex justify-center gap-3 w-full">
                    <button
                      onClick={() => setClose()}
                      className="py-3 px-[20px] rounded border border-[#6F6C6C] outline-none text-sm font-semibold text-[#6F6C6C] w-full"
                    >
                      Cancel
                    </button>
                    <button
                      type={`button`}
                      role={`button`}
                      onClick={() => {
                        onSave();
                        // setClose();S
                      }}
                      className="py-3 px-[20px] rounded border border-[#F04438] bg-[#F04438] outline-none text-sm font-semibold text-[#FFF] w-full"
                    >
                      Yes, Confirm
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
