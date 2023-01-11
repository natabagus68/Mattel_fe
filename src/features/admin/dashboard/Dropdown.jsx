import React from "react";

export const Dropdown = ({ list, width = "190px" }) => {
  return (
    <>
      <select
        className={`px-[10px] bg-white-lightest rounded-lg border-[1px] border-white-lightest border-solid w-[${width}] h-[44px] flex flex-1 items-center font-body shadow-sm text-gray-300`}
        onClick={() => {}}
      >
        {list.map((el, index) => (
          <option className="font-body text-base" key={index}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};
