import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import moment from "moment";
import {
    ArrowIcon,
    DownloadIcon,
    SaveIcons,
} from "../../../../../common/components/icons";
import useAccountFormModel from "./AccountFormModel";
import { SaveConfirmationDialog } from "../../../../../common/components/dialog/SaveConfirmationDialog";
import { SuccessDialog } from "../../../../../common/components/dialog/SuccessDialog";
import { EditIcon, TrashIcon } from "lucide-react";
import ImageView from "../../../../../common/components/dialog/ImageView";

export default function AccountFormView() {
    const user = useAccountFormModel();
    return (
        <>
            <main>
                <div className="flex justify-between items-center mb-6">
                    <Breadcrumbs items={["User"]} />
                    <span className="font-semibold text-[#6F6C6C]">
                        {user.shiftData} | {moment().format("h:mm A")} -{" "}
                        {moment().format("L")}
                    </span>
                </div>
                <div className=" rounded-[6px] flex flex-col gap-4 border border-[#D0D3D9] bg-[#FFF] ">
                    <div className="py-[20px] px-6 flex justify-between items-center border-b border-b-[#D0D3D9]">
                        <span className="text-2xl font-bold">
                            {user.id ? "Edit User" : "Add User"}
                        </span>
                        <button
                            onClick={user.onPageBack}
                            className="rounded py-3 px-5 inline-flex gap-2 items-center border border-[#514E4E] text-sm font-semibold "
                        >
                            <ArrowIcon color="#14988B" className="-rotate-90" />
                            Back
                        </button>
                    </div>
                    <form
                        className="py-6 px-8 flex flex-col gap-6 w-[80%]"
                        onSubmit={user.onButtonSave}
                    >
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="font-bold text-[#313030] "
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Input name"
                                value={user.form.name}
                                onChange={user.onChangeInput}
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="font-bold text-[#313030]"
                            >
                                KPK
                            </label>
                            <input
                                type="text"
                                name="kpk"
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Input KPK"
                                value={user.form.kpk}
                                onChange={user.onChangeInput}
                            />
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="font-bold text-[#313030]"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                placeholder="Input Email"
                                value={user.form.email}
                                onChange={user.onChangeInput}
                            />
                        </div>
                        {!user.id ? (
                            <div className="inline-flex flex-col gap-2">
                                <label
                                    htmlFor="name"
                                    className="font-bold text-[#313030]"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                                    placeholder="Input Password"
                                    value={user.form.password}
                                    onChange={user.onChangeInput}
                                />
                            </div>
                        ) : null}
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="role"
                                className="font-bold text-[#313030]"
                            >
                                Role
                            </label>
                            <select
                                value={user.form.role}
                                onChange={user.onChangeInput}
                                name="role"
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                            >
                                <option value="" disabled>
                                    Select
                                </option>
                                {user?.responseDataRole?.data?.map((item) => (
                                    <>
                                        <option value={item.id}>
                                            {item.name}
                                        </option>
                                    </>
                                ))}
                            </select>
                        </div>
                        <div className="inline-flex flex-col gap-2">
                            <label
                                htmlFor="role"
                                className="font-bold text-[#313030]"
                            >
                                Position
                            </label>
                            <select
                                name="position"
                                value={user.form.position}
                                onChange={user.onChangeInput}
                                className="rounded-lg px-4 py-2 outline-none border border-[#D0D3D9]"
                            >
                                <option value="" selected disabled>
                                    Select
                                </option>
                                {user?.responDataPosition?.data?.map((item) => {
                                    return (
                                        <>
                                            <option value={item.id}>
                                                {item.name}
                                            </option>
                                        </>
                                    );
                                })}
                            </select>
                        </div>
                        {/* Input Field Photo */}
                        <div className="relative flex ">
                            <div
                                className={` ${!!user.imgURL
                                        ? "bg-[#F04438]"
                                        : "bg-[#B9BDC7]"
                                    } h-[43px]  ${!!user.imgURL ? "w-[130px]" : "w-[94px]"
                                    } flex items-center justify-center rounded-l-lg cursor-pointer`}
                            >
                                {!!!user.imgURL ? (
                                    <label
                                        htmlFor="FILE"
                                        className="text-[#514E4E] cursor-pointer"
                                    >
                                        Choose
                                    </label>
                                ) : (
                                    <p
                                        onClick={user.handelOpenImage}
                                        className="text-white-lightest text-[16px] font-[400]"
                                    >
                                        View Image
                                    </p>
                                )}
                            </div>
                            <input
                                type="file"
                                name="image"
                                id="FILE"
                                className=" hidden  "
                                onChange={user.onChangeImage}
                            />
                            <div className="h-[43px] px-4 items-center flex bg-white  border border-[#D0D3D9] rounded-r-lg w-full">
                                {user.imgURL}
                            </div>
                            {!!user.imgURL && (
                                <>
                                    <div className="flex items-center gap-2 ml-3">
                                        <div className="h-8 w-8 bg-[#F79009] flex items-center justify-center">
                                            <label htmlFor="FILE">
                                                <EditIcon
                                                    color="white"
                                                    size={16}
                                                />
                                            </label>
                                        </div>
                                        <div
                                            onClick={user.removeImage}
                                            className="h-8 w-8 bg-[#F04438] flex items-center justify-center cursor-pointer"
                                        >
                                            <TrashIcon
                                                color="white"
                                                size={16}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="inline-flex gap-4 items-center w-1/2">
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 w-full rounded py-3 px-5 bg-[#F04438] text-[#FFF] text-sm font-semibold disabled:bg-[#F04438]/50"
                            // disabled={!!user.formData.name}
                            >
                                <SaveIcons />
                                Save
                            </button>
                        </div>
                    </form>
                </div>
                <SaveConfirmationDialog
                    open={user.modalConfirm}
                    setClose={user.handleCloseModal}
                    onSave={user.onConfirm}
                />
                <SuccessDialog
                    open={user.modalSuccess}
                    navigate={() => {
                        user.handleCloseModal();
                        user.onPageBack();
                    }}
                />
            </main>
            <ImageView
                open={user.openView}
                handleOpen={user.handelOpenImage}
                imageSrc={user.imgURL}
            />
        </>
    );
}
