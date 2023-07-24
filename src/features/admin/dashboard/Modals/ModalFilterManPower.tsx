import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";
import { FilterIcons } from "../../../../common/components/icons";
import { useGetLinesQuery } from "../../../../app/services/lineService";

export default function ModalFilterManPower({ onClick, open, setClose }) {
    const {
        data: responDataLine = { data: [] },
        isLoading,
        refetch: refetchLine,
    } = useGetLinesQuery({ page: 1, limit: 10 });

    useEffect(() => {
        async function refresh() {
            await refetchLine();
        }
        refresh();
    }, []);

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setClose}>
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
                                <form onSubmit={onClick}>
                                    <Dialog.Panel className="flex justify-center flex-col gap-8 transform overflow-hidden rounded-xl bg-white-lightest align-middle shadow-xl transition-all text-center min-w-[500px] px-6 pt-10 pb-6">
                                        <div className="inline-flex items-center gap-4">
                                            <div className="border-[8px] border-[#F0F1F3] rounded-full inline-flex justify-center items-center p-2 w-[48px] h-[48px]">
                                                <FilterIcons className="scale-[1.7]" />
                                            </div>
                                            <div className="inline-flex flex-col items-start">
                                                <span className="text-2xl font-semibold text-[#313030]">
                                                    Filters
                                                </span>
                                                <span className="text-sm text-[#9A9898]">
                                                    Apply your filter
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-[10px]">
                                            <div className="inline-flex flex-col gap-1 items-start">
                                                <span className="text-sm font-semibold">
                                                    Sort By
                                                </span>
                                                <select
                                                    name="sort"
                                                    className="w-full px-[10px] py-[8px] rounded-md border border-[#D0D3D9] text-xs text-[#514E4E]"
                                                >
                                                    <option value="" disabled>
                                                        Sort By
                                                    </option>
                                                    <option value="ASC">
                                                        Ascending
                                                    </option>
                                                    <option value="DESC">
                                                        Descending
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="inline-flex flex-col gap-1 items-start">
                                                <span className="text-sm font-semibold">
                                                    Assigned
                                                </span>
                                                <select
                                                    name="assigned"
                                                    className="w-full px-[10px] py-[8px] rounded-md border border-[#D0D3D9] text-xs text-[#514E4E]"
                                                >
                                                    <option value="" disabled>
                                                        Choose Assigned
                                                    </option>
                                                    <option value="Not Started">
                                                        Not Started
                                                    </option>
                                                    <option value="On Hold">
                                                        On Hold
                                                    </option>
                                                    <option value="On Progress">
                                                        On Progress
                                                    </option>
                                                    <option value="Closed">
                                                        Closed
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="inline-flex flex-col gap-1 items-start">
                                                <span className="text-sm font-semibold">
                                                    Status
                                                </span>
                                                <select
                                                    name="status"
                                                    className="w-full px-[10px] py-[8px] rounded-md border border-[#D0D3D9] text-xs text-[#514E4E]"
                                                >
                                                    <option value="">
                                                        Choose Status
                                                    </option>
                                                    {[
                                                        "In",
                                                        "Out",
                                                        "Not",
                                                        "Logged",
                                                    ].map((item) => (
                                                        <option value={item}>
                                                            {item}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="inline-flex flex-col gap-1 items-start">
                                                <span className="text-sm font-semibold">
                                                    Line
                                                </span>
                                                <select
                                                    name="line"
                                                    className="w-full px-[10px] py-[8px] rounded-md border border-[#D0D3D9] text-xs text-[#514E4E]"
                                                >
                                                    <option value="">
                                                        Choose Line
                                                    </option>
                                                    {isLoading ? (
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Load data . . .
                                                        </option>
                                                    ) : (
                                                        responDataLine?.data.map(
                                                            (item, i) => (
                                                                <option
                                                                    key={i}
                                                                    value={
                                                                        item.name
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </option>
                                                            )
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="inline-flex flex-col gap-1 items-start">
                                                <span className="text-sm font-semibold">
                                                    Availability
                                                </span>
                                                <select
                                                    name="availability"
                                                    className="w-full px-[10px] py-[8px] rounded-md border border-[#D0D3D9] text-xs text-[#514E4E]"
                                                >
                                                    <option value="">
                                                        Choose Availability
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center gap-3 w-full">
                                            <button
                                                type="button"
                                                role="button"
                                                onClick={setClose}
                                                className="px-[20px] py-3 text-sm font-semibold w-1/2 rounded border border-[#514E4E] text-[#514E4E]"
                                            >
                                                Cancel
                                            </button>
                                            <button className="px-[20px] py-3 text-sm font-semibold w-1/2 rounded border border-[#F04438] bg-[#F04438] text-[#FFF]">
                                                Apply
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
    );
}
