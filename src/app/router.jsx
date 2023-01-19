import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { AdminLayout } from "../features/admin/adminLayout";
import { GuestLayouts } from "../features/guest/GuestLayouts";
import { General } from "../features/admin/dashboard/general/General";
import { ManPower } from "../features/admin/dashboard/manpower/ManPower";
import { Report } from "../features/admin/report/Report.jsx";
import { MachineForm } from "../features/admin/master-data/machine/MachineForm";
import { Account } from "../features/admin/user/account/Account";
import { Mechanic } from "../features/admin/monitoring/mechanic/Mechanic.jsx";
import { MachineMaster } from "../features/admin/master-data/machine/MachineMaster.jsx";
import { MachineProblem } from "../features/admin/dashboard/machine-problem/MachineProblem.jsx";
import { MonitoringLine } from "../features/admin/monitoring/line/MonitoringLine";
import { PartMaster } from "../features/admin/master-data/part/PartMaster";
import { PartForm } from "../features/admin/master-data/part/PartForm";
import { DeviceMaster } from "../features/admin/master-data/device/DeviceMaster.jsx";
import { DeviceForm } from "../features/admin/master-data/device/DeviceForm";
import { LineLocationMaster } from "../features/admin/master-data/line-location/LineLocationMaster";
import { LineLocationForm } from "../features/admin/master-data/line-location/LineLocationForm";

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
      { path: "dashboard/machine-problem", element: <MachineProblem /> },
      {
        path: "monitoring/line",
        element: <MonitoringLine />,
      },
      { path: "monitoring/mechanic", element: <Mechanic /> },
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
      { path: "line-location", element: <LineLocationMaster /> },
      { path: "line-location/create", element: <LineLocationForm /> },
      { path: "line-location/edit", element: <LineLocationForm /> },
      { path: "machine-part", element: <PartMaster /> },
      { path: "machine-part/create", element: <PartForm /> },
      { path: "machine-part/edit", element: <PartForm /> },
      { path: "machine-device", element: <DeviceMaster /> },
      { path: "machine-device/create", element: <DeviceForm /> },
      { path: "machine-device/edit", element: <DeviceForm /> },
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
