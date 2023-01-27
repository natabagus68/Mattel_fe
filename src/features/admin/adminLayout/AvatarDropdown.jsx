import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import userAvatar from "../../../assets/user.png";
import { LogoutDialog } from "./LogoutDialog";
import { useMeQuery } from "../../auth/authApiSlice.js";

export const AvatarDropdown = () => {
  const { data: auth } = useMeQuery();
  const [logoutOpen, setLogoutOpen] = useState(false);
  return (
    <>
      <Popover as="div" className="relative">
        <Popover.Button>
          <div className="flex gap-3 cursor-pointer items-center">
            <img className="w-[29px] h-[29px]" src={userAvatar} alt="" />
            <span className="text-white">{auth?.data?.name.split(" ")[0]}</span>
          </div>
        </Popover.Button>
        <Popover.Panel className="absolute right-0">
          <LogoutDialog logoutOpen={logoutOpen} setLogoutOpen={setLogoutOpen} />
        </Popover.Panel>
      </Popover>
      <LogoutDialog.Modal
        logoutOpen={logoutOpen}
        setLogoutOpen={setLogoutOpen}
      />
    </>
  );
};
