import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TrashDialogIcon } from "./TrashDialogIcon.jsx";

export const DeleteDialog = ({ onClick, open, setOpen }) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
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
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex justify-center items-center flex-col w-11/12 transform overflow-hidden rounded-2xl bg-white-lightest align-middle shadow-xl transition-all text-center max-w-[696px] py-12">
                  <TrashDialogIcon />
                  <div className="mt-6 mb-14">
                    <div className="text-ink-base font-[500] text-[40px]">
                      Delete?
                    </div>
                    <div className="text-ink-light font-[24px]">
                      You will delete this file!
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      type={`button`}
                      role={`button`}
                      onClick={() => {
                        onClick();
                        setOpen(false);
                      }}
                      className="text-2xl bg-red-primary text-white-lightest p-6 md:min-w-[301px] w-full whitespace-nowrap rounded-[4px] font-medium"
                    >
                      Yes, Delete it
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className=" bg-white-lightest py-3 border border-ink-lighter md:min-w-[301px] w-full whitespace-nowrap rounded-[4px] text-ink-lighter font-medium text-2xl"
                    >
                      Cancel
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
