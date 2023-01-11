import React from "react";

export const Input = ({
  type = "text",
  className = "",
  placeholder = "",
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        // value={value}
        className={`border rounded-lg px-2.5 py-3.5 text-gray-700 
        placeholder-gray-300 disabled:bg-gray-50 h-[44px] w-[114px] 
        box-shadow[0_1px_2px_rgba(16, 24, 40, 0.05)] ${className}`}
        {...props}
      />
    </>
  );
};
