import React from "react";

export const Tr = ({ children, even = false }) => {
  return (
    <>
      <tr className={`${even && "bg-gray-50"}`}>{children}</tr>
    </>
  );
};
