import { useState } from "react";

export const DoubleChartContainer = ({ title, children, toggleList = [] }) => {
  const [activeToggle, setActiveToggle] = useState(0);
  const toggleActive = "bg-white-lightest rounded-[4px]";
  return (
    <>
      <div
        className={`bg-[#FFFBFE] p-6 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04),0_2px_6px_2px_rgba(0,0,0,0.01)] h-[335px]`}
      >
        <div className="flex justify-between">
          <div>{title}</div>
          <div className="bg-sky-lighter rounded-[5px] border-[1px] border-sky-lighter flex items-center gap-[10px] px-[12px] py-[4px]">
            {toggleList.map((el, index) => (
              <button
                className={`text-xs px-[6px] py-[2px] ${
                  activeToggle === index && toggleActive
                }`}
                key={index}
                onClick={setActiveToggle.bind(this, index)}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
        <div className={`mt-[10px]`}>{children[activeToggle]}</div>
      </div>
    </>
  );
};
