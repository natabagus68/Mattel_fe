import React from "react";
import useMachineFormModel from "./MachineFormModel";
import { SaveConfirmationDialog } from "../../../../../common/components/dialog/SaveConfirmationDialog";
import { SuccessDialog } from "../../../../../common/components/dialog/SuccessDialog";
import {
    ArrowIcon,
    PlusIcon,
    SaveIcons,
    TrashIcon,
} from "../../../../../common/components/icons";
import { Breadcrumbs } from "../../../../../common/components";
import moment from "moment";
import Select from "react-select";

export default function MachineForm() {
    const form = useMachineFormModel();
    return (
        <main>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["Machine"]} />
                <span className="font-semibold text-[#6F6C6C]">
                    {form.shiftData} | {moment().format("h:mm A")} -{" "}
                    {moment().format("L")}
                </span>
            </div>
            <div className="rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030] min-h-[600px]">
                <div className="py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]">
                    <span className="text-2xl font-bold">
                        {form.id ? "Edit Machine" : "Add Machine"}
                    </span>
                    <button
                        onClick={form.handleBack}
                        className="rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold "
                    >
                        <ArrowIcon color="#14988B" className="-rotate-90" />
                        Back
                    </button>
                </div>
                <div className="px-6 pb-6 flex flex-col gap-5">
                    <form
                        onSubmit={form.handleSave}
                        className="flex flex-col w-[85%] gap-6"
                    >
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="line_device_id"
                                className="font-bold"
                            >
                                Machine Category
                            </label>

                            <Select
                                value={{
                                    value: form.tempForm,
                                    label: form.tempForm.machine_name,
                                }}
                                onChange={(e) =>
                                    form.handleChangeForm(
                                        e,
                                        "machine_category_id"
                                    )
                                }
                                options={form.responMachineCategory?.data.map(
                                    (item, i) => {
                                        return {
                                            value: item,
                                            label: item.name,
                                        };
                                    }
                                )}
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Abbreviation
                            </label>
                            <input
                                type="text"
                                name="code"
                                readOnly
                                value={form.formData.code}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Will Automatically Filled"
                                disabled
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Machine No
                            </label>
                            <input
                                type="number"
                                name="number"
                                value={form.formData.number}
                                onChange={form.handleChangeForm}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Input Machine no"
                            />
                        </div>

                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="line_group_id"
                                className="font-bold"
                            >
                                Line Location
                            </label>
                        </div>

                        <Select
                            value={{
                                value: form.tempForm,
                                label: form.tempForm.line_name,
                            }}
                            onChange={(e) =>
                                form.handleChangeForm(e, "line_id")
                            }
                            options={form.responLine?.data?.map((item, i) => {
                                console.log("item = ", item)
                                return {
                                    value: item,
                                    label: item.line_group.name + ' - ' + item.name
                                };
                            })}
                        />
                        <div className="flex items-center gap-3 w-[50%] pt-6">
                            <button
                                className="px-[20px] py-3 inline-flex items-center justify-center rounded bg-[#F04438] gap-2 w-1/2 text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50"
                                disabled={
                                    form.formData.code === "" ? true : false
                                }
                            >
                                <SaveIcons />
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SaveConfirmationDialog
                open={form.modalConfirm}
                setClose={form.handleCloseModal}
                onSave={form.onConfirm}
            />
            <SuccessDialog
                open={form.modalSuccess}
                navigate={() => {
                    form.handleCloseModal();
                    form.handleBack();
                }}
            />
        </main>
    );
}
