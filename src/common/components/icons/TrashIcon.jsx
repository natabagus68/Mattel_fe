import React from "react";

export const TrashIcon = ({ width = 18, height = 18, ...props }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="3" fill="#F04438" />
        <path
          d="M9.75 5.25V6H6V7.5H6.75V17.25C6.75 17.6478 6.90804 18.0294 7.18934 18.3107C7.47064 18.592 7.85218 18.75 8.25 18.75H15.75C16.1478 18.75 16.5294 18.592 16.8107 18.3107C17.092 18.0294 17.25 17.6478 17.25 17.25V7.5H18V6H14.25V5.25H9.75ZM9.75 9H11.25V15.75H9.75V9ZM12.75 9H14.25V15.75H12.75V9Z"
          fill="#FEECEB"
        />
      </svg>
    </>
  );
};
