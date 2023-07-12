import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "../../common/components";
import { useGetAuthenticatedUserQuery } from "../../app/services/authService";
import { Dialog } from "@headlessui/react";

export const GuestLayouts = () => {
  const { data: auth, isLoading } = useGetAuthenticatedUserQuery();
  if (auth?.data) return <Navigate to="dashboard/general" replace={true} />;
  console.log(isLoading)
  return (
    <>
      {auth?.data && <Navigate to="dashboard/general" replace={true} />}
      {/* {!isLoading && <Loader />} */}

      <Outlet />
        <div className={`absolute h-screen w-screen z-10 bg-black-500/25 ${isLoading?'flex justify-center items-center' : 'hidden'}`}>
          <div className='p-10 scale-[2.0] bg-white-lightest w-fit rounded-3xl inline-flex justify-center items-center'>
            <Loader/>
          </div>
        </div>
    </>
  );
};
