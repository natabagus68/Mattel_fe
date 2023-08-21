import React from "react";
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
import { useAccessForm } from "./access-form-view-model";
import { FailedDialog } from "../../../../../common/components/dialog/FailedDialog";

export default function AccessForm() {
    const model = useAccessForm();
    return (
        <main>
            <div className="flex justify-between items-center mb-6">
                <Breadcrumbs items={["Machine"]} />
                <span className="font-semibold text-[#6F6C6C]"></span>
            </div>
            <div className="rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] text-[#313030] min-h-[600px]">
                <div className="py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]">
                    <span className="text-2xl font-bold">
                        {model.id ? "Edit Role" : "Add Role"}
                    </span>
                    <button
                        onClick={() => model.navigate(-1)}
                        className="rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold "
                    >
                        <ArrowIcon color="#14988B" className="-rotate-90" />
                        Back
                    </button>
                </div>
                <div className="px-6 pb-6 flex flex-col gap-5">
                    <form
                        onSubmit={model.handleSubmit}
                        className="flex flex-col w-[85%] gap-6"
                    >
                        <div className="inline-flex flex-col gap-2">
                            <label htmlFor="name" className="font-bold">
                                Role
                            </label>
                            <input
                                type="text"
                                value={model.form.name}
                                onChange={model.changeFormValue}
                                placeholder="Input role"
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                            />
                        </div>

                        <div className="flex items-center gap-3 w-[50%] pt-6">
                            <button
                                disabled={model.desable}
                                className="px-[20px] py-3 inline-flex items-center justify-center rounded bg-[#F04438] gap-2 w-1/2 text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50"
                            >
                                <SaveIcons />
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <FailedDialog
                open={model.modalFailed}
                navigate={() => {
                    model.handleCloseModal();
                }}
                message={model.failedMessage}
            />
            <SuccessDialog
                open={model.modalSuccess}
                navigate={() => {
                    model.handleCloseModal();
                    model.handleBack();
                }}
            />
        </main>
    );
}
