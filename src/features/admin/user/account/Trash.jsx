import { Input } from "../../../../common/components/index.js";
import { BigTrashIcon } from "../../../../common/components/icons";

export const Trash = () => {
  return (
    <>
      <div className="pb-9 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <div className="flex justify-between px-12 py-6 bg-sky-lightest border-sky-light rounded-t-lg border-b">
          <div className="text-2xl text-gray-foundation-800 font-semibold">
            Trash
          </div>
        </div>
        <div className="px-[48px] py-[24px]">
          <div className="flex flex-row justify-between">
            <div className="text-black-700">
              Show
              <input
                type="number"
                min="1"
                className="w-[62px] h-[24px] rounded text-black-700 pl-[14px] border border-sky-base mx-2"
                placeholder="1"
              />
              Entries
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="border border-[1px] border-neutral-100 w-[191px]"
            />
          </div>
        </div>
        <div className="px-9">
          <table className="table-auto w-full">
            <thead className="bg-[#E2F1FF]">
              <tr
                className="font-inter text-xs font-[600] font-semibold uppercase h-[45px] text-ink-base border-y-[1px] border-gray-100 "
                align="center"
              >
                <td>Status</td>
                <td>Name</td>
                <td>Email</td>
                <td>Position</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="grid place-items-center my-16">
            <div className="flex flex-col items-center">
              <BigTrashIcon />
              <div className="text-2xl text-[#7C7B7B] font-medium mt-[30px]">
                No data available in table
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
