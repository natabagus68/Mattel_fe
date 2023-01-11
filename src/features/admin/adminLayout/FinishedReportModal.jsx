import { InputLabel } from "../../../common/components/input/InputLabel";
import { SelectLabel } from "../../../common/components/input/SelectLabel";

export const FinishedReportModal = ({ visible = false }) => {
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
        } overflow-scroll`}
      >
        <div className="bg-white-lightest z-50 opacity-100 px-[39px] pb-[32px] rounded-[15px] flex flex-col items-center my-[48px]">
          <div className="mt-[24px] flex justify-center font-medium text-[32px]">
            Finished Report
          </div>
          <div className="mt-[16px] flex flex-col gap-[16px]  w-[696px]">
            <InputLabel label="Machine" name="machine" placeholder="27" />
            <InputLabel label="Line" name="line" placeholder="Line C-27" />
            <SelectLabel
              name="part"
              label="Machine Part"
              list={["Conveyor", "Other"]}
            />
            <InputLabel
              label="Description"
              name="desc"
              placeholder="Describe the problem"
              row={6}
            />
          </div>
          <div className="mt-[26px] flex  gap-[16px]">
            <button className="rounded-[4px] bg-graphite-800 flex items-center justify-center w-[340px] h-[72px] text-white-lightest font-medium text-2xl">
              Save
            </button>
            <button className="rounded-[4px] bg-white-lightest border border-neutral-500 flex items-center justify-center w-[340px] h-[72px] text-neutral-500 font-medium text-2xl">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
