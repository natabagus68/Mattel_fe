import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import FailedIcon from "../../../assets/failed-icon.gif";

export const FailedDialog = ({ open, navigate, message }) => {
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
                        <div className="flex min-h-full items-center justify-center bg-black-500/50">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex justify-center items-center flex-col gap-8 transform overflow-hidden rounded-xl bg-white-lightest align-middle shadow-xl transition-all text-center min-w-[500px] px-6 pt-10 pb-6">
                                    <img className="mb-[10px]" src={FailedIcon} alt="" />
                                    <div className="inline-flex flex-col text-[#313030]">
                                        <span className="text-2xl font-semibold">Process Failed!</span>
                                        <span className="text-[#514E4E]">{message}</span>
                                    </div>
                                    <div className="flex w-11/12">
                                        <button
                                            onClick={navigate}
                                            className="py-3 px-[20px] rounded border border-[#F04438] bg-[#F04438] outline-none text-sm font-semibold text-[#FFF] w-full"
                                        >
                                            Close
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
