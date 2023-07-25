import React from "react";
import { Breadcrumbs, Loader } from "../../../../../common/components";
import moment from "moment";
import { ArrowIcon, SaveIcons } from "../../../../../common/components/icons";
import useLineFormModel from "./LineFormModel";
import { SaveConfirmationDialog } from "../../../../../common/components/dialog/SaveConfirmationDialog";
import { SuccessDialog } from "../../../../../common/components/dialog/SuccessDialog";
import Select from "react-select";

export default function LineForm() {
    const form = useLineFormModel();
    return (
        <main>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["Line"]} />
                <span className="font-semibold text-[#6F6C6C]">
                    {form.shiftData} | {moment().format("h:mm A")} -{" "}
                    {moment().format("L")}
                </span>
            </div>
            <div className="rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030] min-h-[600px]">
                <div className="py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]">
                    <span className="text-2xl font-bold">
                        {form.id ? "Edit Line" : "Add Line"}
                    </span>
                    <button
                        onClick={form.handleBack}
                        className="rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold "
                    >
                        <ArrowIcon color="#14988B" className="-rotate-90" />
                        Back
                    </button>
                </div>
                <div className="px-6 flex flex-col gap-5">
                    <form
                        onSubmit={form.handleSave}
                        className="flex flex-col w-[85%] gap-6"
                    >
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="line_group_id"
                                className="font-bold"
                            >
                                Line Group
                            </label>

                            <Select
                                value={{
                                    value: form.tempLocation,
                                    label: form.tempLocation.line_group,
                                }}
                                onChange={form.handleChangeLineGroup}
                                options={form.responLineGroup?.data.map(
                                    (item, i) => {
                                        console.log("item", item);
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
                                Line Number
                            </label>
                            <input
                                type="number"
                                value={form.formData.name}
                                onChange={form.onChangeNumber}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9] cursor-default"
                                placeholder="Input Line Number"
                            />
                        </div>

                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Line Location
                            </label>
                            <input
                                readOnly
                                value={`${form.tempLocation.line_group} ${
                                    form.formData.name
                                        ? " - " + form.formData.name
                                        : ""
                                }`}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9] cursor-default"
                                placeholder="Input Line Number"
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="line_device_id"
                                className="font-bold"
                            >
                                Line Device
                            </label>
                            <Select
                                value={{
                                    value: form.tempLocation,
                                    label: form.tempLocation.line_device,
                                }}
                                onChange={form.handleChangeLineDevice}
                                options={form.responLineDevice?.data.map(
                                    (item, i) => {
                                        return {
                                            value: item,
                                            label: item.name,
                                        };
                                    }
                                )}
                            />
                        </div>

                        <div className="flex items-center gap-3 w-[50%] pt-6">
                            <button
                                className="px-[20px] py-3 inline-flex items-center justify-center rounded bg-[#F04438] gap-2 w-1/2 text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50"
                                disabled={
                                    form.formData.name === "" ? true : false
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
