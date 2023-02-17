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
import { MachineProblem } from "../features/admin/dashboard/machine-problem/MachineProblem.jsx";
import { MonitoringLine } from "../features/admin/monitoring/line/MonitoringLine";
import { PartForm } from "../features/admin/master-data/part/PartForm";
import { LineLocationForm } from "../features/admin/master-data/line/LineLocationForm";
import { GuestLayouts } from "../features/guest/GuestLayouts.jsx";
import { AccountDetail } from "../features/admin/user/account/AccountDetail";
import { AccountForm } from "../features/admin/user/account/AccountForm";
import { Layout } from "../features/admin/monitoring/layout/Layout.jsx";
import { Trash } from "../features/admin/user/account/Trash.jsx";
import { Access } from "../features/admin/user/access/Access";
import { MappingMenu } from "../features/admin/user/access/mapping-permissions/MappingMenu.jsx";
import { AccessForm } from "../features/admin/user/access/AccessForm";
import { PermissionForm } from "../features/admin/user/access/mapping-permissions/PermissionForm";
import LineLocation from "../features/admin/master-data/line/index.jsx";
import LineGroup from "../features/admin/master-data/line-group/index.jsx";
import { LineGroupForm } from "../features/admin/master-data/line-group/LineGroupForm.jsx";
import LineDevice from "../features/admin/master-data/line-device/index.jsx";
import { LineDeviceForm } from "../features/admin/master-data/line-device/LineDeviceForm.jsx";
import MachineCategory from "../features/admin/master-data/machine-category/index.jsx";
import { MachineCategoryForm } from "../features/admin/master-data/machine-category/MachineCategoryForm.jsx";
import Part from "../features/admin/master-data/part/index.jsx";
import Machine from "../features/admin/master-data/machine/index.jsx";

const Root = () => {
  return <Outlet />;
};

const dashboardRouter = [
  {
    path: "dashboard/general",
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
    element: <Machine />,
  },
  { path: "master/machine/create", element: <MachineForm /> },
  { path: "master/machine/edit", element: <MachineForm /> },
  { path: "master/line", element: <LineLocation /> },
  { path: "master/line/create", element: <LineLocationForm /> },
  { path: "master/line/edit", element: <LineLocationForm /> },
  { path: "master/line-group", element: <LineGroup /> },
  { path: "master/line-group/create", element: <LineGroupForm /> },
  { path: "master/line-group/edit", element: <LineGroupForm /> },
  { path: "master/line-device", element: <LineDevice /> },
  { path: "master/line-device/create", element: <LineDeviceForm /> },
  { path: "master/line-device/edit", element: <LineDeviceForm /> },
  { path: "master/part", element: <Part /> },
  { path: "master/part/create", element: <PartForm /> },
  { path: "master/part/edit", element: <PartForm /> },
  { path: "master/machine-category", element: <MachineCategory /> },
  { path: "master/machine-category/create", element: <MachineCategoryForm /> },
  { path: "master/machine-category/edit", element: <MachineCategoryForm /> },
];
const accountRouter = [
  {
    path: "user/account",
    element: <Account />,
  },
  { path: "user/account/:id/detail", element: <AccountDetail /> },
  { path: "user/account/:id/edit", element: <AccountForm /> },
  { path: "user/account/create", element: <AccountForm /> },
  { path: "user/account/trash", element: <Trash /> },
  { path: "user/access", element: <Access /> },
  { path: "user/access/:id/permission", element: <MappingMenu /> },
  { path: "user/access/permission/create", element: <PermissionForm /> },
  { path: "user/access/create", element: <AccessForm /> },
  { path: "user/access/:id/edit", element: <AccessForm /> },
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
