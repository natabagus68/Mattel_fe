import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { AdminLayout } from "../features/admin/adminLayout";
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
import { GuestLayouts } from "../features/guest/GuestLayouts.jsx";
import { AccountDetail } from "../features/admin/user/account/AccountDetail";
import { AccountForm } from "../features/admin/user/account/AccountForm";
import { Layout } from "../features/admin/monitoring/layout/Layout.jsx";
import { Trash } from "../features/admin/user/account/Trash.jsx";
import { Access } from "../features/admin/user/access/Access";
import { MappingMenu } from "../features/admin/user/access/mapping-permissions/MappingMenu.jsx";
import { AccessForm } from "../features/admin/user/access/AccessForm";
import { PermissionForm } from "../features/admin/user/access/mapping-permissions/PermissionForm";

const Root = () => {
  return <Outlet />;
};

const dashboardRouter = [
  {
    path: "dashboard",
    element: <General />,
  },
  {
    path: "dashboard/man-power",
    element: <ManPower />,
  },
  { path: "dashboard/machine-problem", element: <MachineProblem /> },
];
const monitoringRouter = [
  {
    path: "monitoring/line",
    element: <MonitoringLine />,
  },
  { path: "monitoring/mechanic", element: <Mechanic /> },
  { path: "monitoring/layout", element: <Layout /> },
];
const reportRouter = [
  {
    path: "report",
    element: <Report />,
  },
];
const masterRouter = [
  {
    path: "master/machine",
    element: <MachineMaster />,
  },
  { path: "master/machine/create", element: <MachineForm /> },
  { path: "master/machine/edit", element: <MachineForm /> },
  { path: "master/line-location", element: <LineLocationMaster /> },
  { path: "master/line-location/create", element: <LineLocationForm /> },
  { path: "master/line-location/edit", element: <LineLocationForm /> },
  { path: "master/machine-part", element: <PartMaster /> },
  { path: "master/machine-part/create", element: <PartForm /> },
  { path: "master/machine-part/edit", element: <PartForm /> },
  { path: "master/machine-device", element: <DeviceMaster /> },
  { path: "master/machine-device/create", element: <DeviceForm /> },
  { path: "master/machine-device/edit", element: <DeviceForm /> },
];
const accountRouter = [
  {
    path: "account",
    element: <Account />,
  },
  { path: "account/:id/detail", element: <AccountDetail /> },
  { path: "account/:id/edit", element: <AccountForm /> },
  { path: "account/create", element: <AccountForm /> },
  { path: "account/trash", element: <Trash /> },
  { path: "access", element: <Access /> },
  { path: "access/:id/permission", element: <MappingMenu /> },
  { path: "access/permission/create", element: <PermissionForm /> },
  { path: "access/create", element: <AccessForm /> },
  { path: "access/:id/edit", element: <AccessForm /> },
];

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
    errorElement: <Error404 />,
    children: [
      ...dashboardRouter,
      ...monitoringRouter,
      ...reportRouter,
      ...masterRouter,
      ...accountRouter,
      {
        path: "404",
        element: <Error404 text="You dont get access" />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

// export const router = (permission) => {
//   return createBrowserRouter([
//     {
//       path: config.pathPrefix,
//       element: <Navigate to={`${config.pathPrefix}login`} />,
//     },
//     {
//       path: config.pathPrefix,
//       element: <GuestLayouts />,
//       errorElement: <Error404 />,
//       children: [
//         {
//           path: "login",
//           element: <Login />,
//         },
//       ],
//     },
//     {
//       path: config.pathPrefix,
//       element: <AdminLayout />,
//       errorElement: <Error404 />,
//       children: [
//         // permission.includes("#dashboard") && dashboardRouter,
//         // permission.includes("#monitoring") && monitoringRouter,
//         // permission.includes("#report") && reportRouter,
//         // permission.includes("#master") && masterRouter,
//         // permission.includes("#account") && accountRouter,
//       ],
//     },
//     {
//       path: "*",
//       element: <Error404 />,
//     },
//   ]);
// };
