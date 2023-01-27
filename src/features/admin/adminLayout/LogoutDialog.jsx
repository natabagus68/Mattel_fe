import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  LogoutIcon,
  LogoutWarningIcon,
} from "../../../common/components/icons";

export const LogoutDialog = ({ logoutOpen, setLogoutOpen }) => {
  return (
    <>
      <button
        onClick={() => setLogoutOpen(true)}
        className="flex gap-3 w-full min-w-[149px] px-2 py-3 rounded bg-white-lightest text-gray-foundation-500 hover:bg-gray-50"
      >
        <LogoutIcon />
        <span>Logout</span>
      </button>
    </>
  );
};
LogoutDialog.Modal = ({ logoutOpen, setLogoutOpen }) => {
  // const [logout, { logoutIsLoading }] = useLogoutMutation();
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Transition appear show={logoutOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setLogoutOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex justify-center items-center flex-col w-full max-w-md transform overflow-hidden rounded-2xl bg-white-lightest align-middle shadow-xl transition-all text-center min-w-[696px] py-12">
                  <LogoutWarningIcon />
                  <div className="mt-10 mb-14">
                    <div className="text-gray-foundation-500 text-2xl">
                      Are you sure want to Logout?
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      type={`button`}
                      role={`button`}
                      onClick={() => logout()}
                      className="bg-red-500 text-white p-3 min-w-[185px] rounded-md"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => setLogoutOpen(false)}
                      className="bg-gray-100 p-3 min-w-[185px] rounded-md text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
