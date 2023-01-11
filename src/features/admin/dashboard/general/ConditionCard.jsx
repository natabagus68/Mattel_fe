import { LightIcon } from "../../../../common/components/icons";
import { fontSize, statusColor } from "./const.js";

export const ConditionCard = ({ lineNum, status, Condition = "Condition" }) => {
  return (
    <>
      <div className="w-[211px] h-[205px] p-[18px] rounded-[9.36759px] bg-[#FFFBFE] shadow-[0_2.3419px_15.6126px_rgba(0, 0, 0, 0.07), 0_1.56126px_4.68379px_1.56126px_rgba(0, 0, 0, 0.01)] font-inter">
        <div className="font-bold text-neutral-500 text-[15.6126px]">
          {lineNum}
        </div>
        <div className="mt-3 flex ">
          {/*Line Condition*/}
          <div className="bg-white-lightest w-[121.13px] h-[124.38px] p-[13px_15px] radius-[10.8155px] shadow-[0_4.32621px_21.6311px_rgba(0, 0, 0, 0.07] flex flex-col items-center justify-center">
            <div
              className={`text-green-400 font-bold ${statusColor(
                status
              )} text-${fontSize(status)}`}
            >
              {status}
            </div>
            <div className="mt-[6.49px] text-sm font-medium text-center text-neutral-500">
              {Condition}
            </div>
          </div>
          {/*Line Light*/}
          <div className="ml-[13px]">
            <LightIcon
              className="mt-[3.41px]"
              fill={status === "QC" ? "#F59F00" : "#B3B5B7"}
            />
            <LightIcon
              className="mt-[3.41px]"
              fill={status === "Material" ? "#229BD8" : "#B3B5B7"}
            />
            <LightIcon
              fill={status === "Maintenance" ? "#DE1B1B" : "#B3B5B7"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
