import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import moment from "moment";
import { ArrowIcon, SaveIcons } from "../../../../../common/components/icons";
import { SaveConfirmationDialog } from "../../../../../common/components/dialog/SaveConfirmationDialog";
import { SuccessDialog } from "../../../../../common/components/dialog/SuccessDialog";
import useChangeOverSummaryFormModel from "./ChangeOverSummaryFormModel";
import Select from "react-select";

export default function ChangeOverSummaryForm() {
    const form = useChangeOverSummaryFormModel();
    return (
        <main>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["ChangeOverSummary"]} />
                <span className="font-semibold text-[#6F6C6C]">
                    {form.shiftData} | {moment().format("h:mm A")} -{" "}
                    {moment().format("L")}
                </span>
            </div>
            <div className="rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030] min-h-[600px]">
                <div className="py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]">
                    <span className="text-2xl font-bold">
                        {form.id ? "Edit Data" : "Add Data"}
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
                        className="flex flex-col w-[85%] gap-3"
                    >
                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Created Date
                            </label>
                            <input
                                type="text"
                                name="created_date"
                                readOnly
                                value={form.formData.created_date}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Created Date"
                                disabled
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Week Ending
                            </label>
                            <input
                                type="text"
                                name="week_ending"
                                readOnly
                                value={form.formData.week_ending}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Week Ending"
                                disabled
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Preparation Date
                            </label>
                            <input
                                type="text"
                                name="preparation_date"
                                readOnly
                                value={form.formData.preparation_date}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Preparation Date"
                                disabled
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Production Date
                            </label>
                            <input
                                type="text"
                                name="production_date"
                                readOnly
                                value={form.formData.production_date}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Production Date"
                                disabled
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="preparation_shift"
                                className="font-bold"
                            >
                                Preparation Shift
                            </label>

                            <select
                                name="preparation_shift"
                                onChange={form.handleChangeForm}
                                value={form.formData.preparation_shift}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                            >
                                <option value="Shift 1">Shift 1</option>
                                <option value="Shift 2">Shift 2</option>
                                <option value="Shift 3">Shift 3</option>
                            </select>
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="production_shift"
                                className="font-bold"
                            >
                                Production Shift
                            </label>

                            <select
                                name="production_shift"
                                onChange={form.handleChangeForm}
                                value={form.formData.production_shift}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                            >
                                <option value="Shift 1">Shift 1</option>
                                <option value="Shift 2">Shift 2</option>
                                <option value="Shift 3">Shift 3</option>
                            </select>
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="line_id"
                                className="font-bold"
                            >
                                Line
                            </label>

                            <Select
                                value={{
                                    value: form.tempLocation,
                                    label: form.tempLocation.line ?? "Choose Line ",
                                }}
                                onChange={(e) =>
                                    form.handleChangeForm(
                                        e,
                                        "line_id"
                                    )
                                }
                                options={form.responLine?.data.map(
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
                        <div className="flex items-center gap-3 w-[50%] pt-6">
                            <button
                                className="px-[20px] py-3 inline-flex items-center justify-center rounded bg-[#F04438] gap-2 w-1/2 text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50"
                                disabled={
                                    form.formData.preparation_shift === ""
                                        ? true
                                        : false
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
