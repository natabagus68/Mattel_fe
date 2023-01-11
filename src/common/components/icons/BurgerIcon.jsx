import React from "react";

export const BurgerIcon = ({ width = 20, height = 14, ...props }) => {
  return (
    <>
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="14" height="1.6" rx="0.8" fill="#646566" />
        <rect y="4.80078" width="14" height="1.6" rx="0.8" fill="#646566" />
        <rect y="10.4004" width="14" height="1.6" rx="0.8" fill="#646566" />
      </svg>
    </>
  );
};
