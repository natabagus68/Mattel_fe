import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SuccessIcon } from "./SuccessIcon.jsx";

export const SuccessDialog = ({ open, navigate }) => {
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
                  <SuccessIcon />
                  <div className="mt-10 mb-14">
                    <div className="text-[36px] text-ink-base font-medium">
                      Success!
                    </div>
                  </div>
                  <div className="flex w-11/12">
                    <button
                      onClick={navigate}
                      className="bg-white-lightest p-3 w-full whitespace-nowrap rounded-md text-2xl font-medium border border-ink-lighter rounded text-ink-lighter"
                    >
                      Ok
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
