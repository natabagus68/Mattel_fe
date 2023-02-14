import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ConfirmationIcon } from "./ConfirmationIcon.jsx";

export const SaveConfirmationDialog = ({ open, setOpen, mutationFn }) => {
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
                  {/*TODO : Question mark icon*/}
                  <ConfirmationIcon />
                  <div className="mt-10 mb-14">
                    <div className="text-[32px] font-medium text-ink-base">
                      Is the data you entered correct?
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      type={`button`}
                      role={`button`}
                      onClick={() => {
                        mutationFn();
                        setOpen(false);
                      }}
                      className="bg-graphite-800 text-white-lightest py-3 md:min-w-[301px] w-full whitespace-nowrap rounded-[4px] font-medium text-[24px]"
                    >
                      Yes Confirm
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-white-lightest text-ink-lighter border border-ink-lighter py-3 md:min-w-[301px] w-full whitespace-nowrap rounded-[4px] font-medium text-[24px]"
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
