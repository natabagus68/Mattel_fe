import React from "react";

export const Dropdown = ({ list, width = "190px", value, onChange }) => {
  return (
    <>
      <select
        className={`px-[10px] bg-white-lightest rounded-lg border-[1px] border-white-lightest border-solid w-[${width}] h-[44px] flex flex-1 items-center font-body shadow-[0_1px_2px_rgba(16,24,40,0.05)] text-gray-300`}
        onClick={() => {}}
        onChange={onChange}
        value={value}
      >
        {list.map((el) => (
          <option value={el.key} className="font-body text-base" key={el.key}>
            {el.value}
          </option>
        ))}
      </select>
    </>
  );
};
