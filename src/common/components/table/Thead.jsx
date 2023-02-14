import React from "react";

export const Thead = ({ children }) => {
  return (
    <>
      <thead className="font-inter text-xs font-[600] font-semibold uppercase h-[45px] text-ink-base border-y-[1px] border-gray-100 bg-[#E2F1FF]">
        {children}
      </thead>
    </>
  );
};
