import { DangerWarningIcon } from "../../../common/components/icons/index.js";

export const WarningPopUp = ({ visible = false }) => {
  return (
    <>
      <div
        className={`fixed bg-[#0000007d] opacity-50 z-20 w-full h-full ${
          !visible && "hidden"
        }`}
      ></div>
      <div
        className={`fixed inset-0 z-50 w-full h-full grid items-center justify-center ${
          !visible && "hidden"
        }`}
      >
        <div className="bg-white-lightest z-50 opacity-100 px-[39px] pb-[32px] rounded-[15px] flex flex-col items-center">
          <div className="mt-[42px]">
            <DangerWarningIcon />
          </div>
          <div className="mt-[12px] font-medium text-[40px] text-gray-foundation-500">
            WARNING!!
          </div>
          <div className="text-2xl font-normal text-neutral-400">
            Maintenance Calling <br />
          </div>
          <div className="text-2xl font-normal text-neutral-400">Line B-24</div>
          <div className="text-2xl font-normal text-neutral-400">07:35:40</div>
          <div className="mt-[26px] flex gap-[16px]">
            <button className="rounded-[4px] bg-graphite-800 flex items-center justify-center w-[301px] h-[72px] text-white-lightest font-medium text-2xl">
              Response / OK
            </button>
            <button className="rounded-[4px] bg-white-lightest border border-neutral-500 flex items-center justify-center w-[301px] h-[72px] text-neutral-500 font-medium text-2xl">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
