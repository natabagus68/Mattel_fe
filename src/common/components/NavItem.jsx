import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretIcon } from "./icons/index.js";
import { useDispatch } from "react-redux";
import { setActiveRouteName } from "../../features/admin/adminLayout/adminLayoutSlice.js";

export const NavItem = ({
  children,
  label,
  icon = null,
  className = null,
  to = null,
  active = null,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const toggle = (e) => {
    if (children) {
      setOpen((open) => !open);
    } else {
      dispatch(setActiveRouteName({ activeRoute: label }));
    }
  };
  return (
    <div
      className={`${
        open || active
          ? `text-[#DD5353] hover-text-[#DD5353]`
          : `text-white-base hover:text-white-lightest`
      }${className}`}
    >
      <NavLink
        to={to}
        onClick={toggle}
        className={({ isActive }) =>
          `flex items-center cursor-pointer ${
            (isActive && to !== null) || active === true ? "text-[#DD5353]" : ""
          }`
        }
      >
        {icon}
        {
          <div className={`whitespace-nowrap font-body font-semibold`}>
            {label}
          </div>
        }
        {children && (
          <CaretIcon
            className={`ml-auto transition mr-10 ${open && "rotate-90"}`}
          />
        )}
      </NavLink>
      {children && (
        <div
          className={`${
            open || active ? `max-h-screen` : `max-h-0`
          } -mb-1 pt-2 flex flex-col gap-2 relative transition-[max-height] overflow-hidden pl-[34px] text-white-base font-body font-semibold`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
