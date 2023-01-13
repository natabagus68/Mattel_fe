import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { AdminLayout } from "../features/admin/adminLayout";
import { GuestLayouts } from "../features/guest/GuestLayouts";
import { General } from "../features/admin/dashboard/new-general/General";
import { ManPower } from "../features/admin/dashboard/manpower/ManPower";
import { Machine } from "../features/admin/dashboard/machine/Machine";
import { MachineDetail } from "../features/admin/dashboard/machine-detail/MachineDetail.jsx";
import { Report } from "../features/admin/report/Report.jsx";
import { MachineForm } from "../features/admin/master-data/machine/MachineForm";
import { Account } from "../features/admin/user/account/Account";
import { Mechanic } from "../features/admin/mechanic/Mechanic.jsx";
import { MachineMaster } from "../features/admin/master-data/machine/MachineMaster.jsx";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: config.pathPrefix,
    element: <Navigate to={`${config.pathPrefix}login`} />,
  },
  {
    path: config.pathPrefix,
    element: <GuestLayouts />,
    errorElement: <Error404 />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: config.pathPrefix,
    element: <AdminLayout />,
    errorElemepnt: <Error404 />,
    children: [
      {
        path: "dashboard/general",
        element: <General />,
      },
      {
        path: "dashboard/man-power",
        element: <ManPower />,
      },
      {
        path: "dashboard/machine",
        element: <Machine />,
      },
      {
        path: "dashboard/machine-detail",
        element: <MachineDetail />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "machine",
        element: <MachineMaster />,
      },
      { path: "machine/create", element: <MachineForm /> },
      { path: "machine/edit", element: <MachineForm /> },
      {
        path: "user/account",
        element: <Account />,
      },
      {
        path: "mechanic-status",
        element: <Mechanic />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
