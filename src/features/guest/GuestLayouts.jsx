import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "../../common/components";
import { useGetAuthenticatedUserQuery } from "../../app/services/authService";

export const GuestLayouts = () => {
  const { data: auth, isLoading } = useGetAuthenticatedUserQuery();
  if (auth?.data) return <Navigate to="dashboard" replace={true} />;
  return (
    <>
      {auth?.data && <Navigate to="dashboard" replace={true} />}
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};
