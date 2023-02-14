import React from "react";

export const Td = ({ children, className, align = "left", ...props }) => {
  return (
    <>
      <td
        className={`border-b border-sky-base text-gray-700 py-3 px-8 whitespace-nowrap ${className}`}
        {...props}
        align={align}
      >
        {children}
      </td>
    </>
  );
};
