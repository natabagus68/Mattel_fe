import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { AdminLayout } from "../features/admin/adminLayout";
import { General } from "../features/admin/dashboard/general/General";
import { ManPower } from "../features/admin/dashboard/manpower/ManPower";
import { Report } from "../features/admin/report/Report.jsx";
import MachineForm from "../features/admin/master-data/machine/form/MachineForm";
import { Account } from "../features/admin/user/account/Account";
import { Mechanic } from "../features/admin/monitoring/mechanic/Mechanic.jsx";
import { MachineProblem } from "../features/admin/dashboard/machine-problem/MachineProblem.jsx";
import { MonitoringLine } from "../features/admin/monitoring/line/MonitoringLine";
import { PartForm } from "../features/admin/master-data/machine-part/PartForm";
import { LineLocationForm } from "../features/admin/master-data/line/LineLocationForm";
import { GuestLayouts } from "../features/guest/GuestLayouts.jsx";
import AccountDetail from "../features/admin/user/account/detail/AccountDetail";
import { AccountForm } from "../features/admin/user/account/AccountForm";
import { Layout } from "../features/admin/monitoring/layout/Layout.jsx";
import { Trash } from "../features/admin/user/account/Trash.jsx";
import { Access } from "../features/admin/user/access/Access";
import { MappingMenu } from "../features/admin/user/access/mapping-permissions/MappingMenu.jsx";
import { PermissionForm } from "../features/admin/user/access/mapping-permissions/PermissionForm";
import LineGroupForm from "../features/admin/master-data/line-group/form/LineGroupForm";
import LineDeviceForm from "../features/admin/master-data/line-device/form/LineDeviceForm";
import MachineCategoryForm from "../features/admin/master-data/machine-category/form/MachineCategoryForm";
import InputChangeOverView from "../features/admin/layoutMenu/inputChangeOver/InputChangeOverView";
import ChangeOverSummaryView from "../features/admin/layoutMenu/changeoverSummary/view/ChangeOverSummaryView";
import ChangeOverSummaryForm from "../features/admin/layoutMenu/changeoverSummary/form/ChangeOverSummaryForm";
import ChangeOverTicket from "../features/admin/layoutMenu/changeOverTicket/ChangeOverTicket";
import DrawingAndMachineView from "../features/admin/layoutMenu/drawingAndMachine/view/DrawingAndMachineView";
import DrawingAndMachineForm from "../features/admin/layoutMenu/drawingAndMachine/form/DrawingAndMachineForm";
import DrawingAndMachineDetail from "../features/admin/layoutMenu/drawingAndMachine/detail/DrawingAndMachineDetail";
import ManpowerNew from "../features/admin/dashboard/manpowerNew/ManpowerNew";
import GeneralView from "../features/admin/dashboard/generalNew/GeneralView";
import MachineProblemNew from "../features/admin/dashboard/machineProblemNew/MachineProblemNew";
import LineView from "../features/admin/dashboard/Line/LineView";
import ToyView from "../features/admin/master-data/toy/view/ToyView";
import ToyForm from "../features/admin/master-data/toy/form/ToyForm";
import LineMasterView from "../features/admin/master-data/line/view/LineView";
import LineForm from "../features/admin/master-data/line/form/LineForm";
import LineGroupView from "../features/admin/master-data/line-group/view/LineGroupView";
import LineDeviceView from "../features/admin/master-data/line-device/view/LineDeviceView";
import MachinePartView from "../features/admin/master-data/machine-part/view/MachinePartView";
import MachinePartForm from "../features/admin/master-data/machine-part/form/MachinePartForm";
import MachineCategoryView from "../features/admin/master-data/machine-category/view/MachineCategoryView";
import MachineView from "../features/admin/master-data/machine/view/MachineView";
import DowntimeView from "../features/admin/master-data/downtime/view/DowntimeView";
import DowntimeForm from "../features/admin/master-data/downtime/form/DowntimeForm";
import AccountView from "../features/admin/user/account/view/AccountView";
import AccountFormView from "../features/admin/user/account/form/AccountFormView";
import AccessUser from "../features/admin/user/access/view/access-view";
import AccessForm from "../features/admin/user/access/form/access-form-view";
import { Permission } from "../features/admin/user/access/permission/permission-view";

const Root = () => {
  return <Outlet />;
};

const dashboardRouter = [
  {
    path: "dashboard/general",
    element: <GeneralView />,
  },
  {
    path: "dashboard/man-power",
    element: <ManpowerNew />,
  },
  {
    path: "dashboard/machine-problem",
    element: <MachineProblemNew />,
  },
  {
    path: "dashboard/line",
    element: <LineView />,
  },
];
const layoutMenu = [
  { path: "layout-menu/input-changeover", element: <InputChangeOverView /> },
  {
    path: "layout-menu/changeover-summary",
    element: <ChangeOverSummaryView />,
  },
  {
    path: "layout-menu/changeover-summary/:id/edit",
    element: <ChangeOverSummaryForm />,
  },
  { path: "layout-menu/changeover-ticket", element: <ChangeOverTicket /> },
  {
    path: "layout-menu/drawing-and-machine",
    element: <DrawingAndMachineView />,
  },
  {
    path: "layout-menu/drawing-and-machine/:id/add",
    element: <DrawingAndMachineForm />,
  },
  {
    path: "layout-menu/drawing-and-machine/:id/show",
    element: <DrawingAndMachineDetail />,
  },
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
  { path: "master/toy", element: <ToyView /> },
  { path: "master/toy/add", element: <ToyForm /> },
  { path: "master/toy/:id/edit", element: <ToyForm /> },
  { path: "master/machine", element: <MachineView /> },
  { path: "master/machine/add", element: <MachineForm /> },
  { path: "master/machine/:id/edit", element: <MachineForm /> },
  { path: "master/line", element: <LineMasterView /> },
  { path: "master/line/add", element: <LineForm /> },
  { path: "master/line/:id/edit", element: <LineForm /> },
  { path: "master/line-group", element: <LineGroupView /> },
  { path: "master/line-group/add", element: <LineGroupForm /> },
  { path: "master/line-group/:id/edit", element: <LineGroupForm /> },
  { path: "master/line-device", element: <LineDeviceView /> },
  { path: "master/line-device/add", element: <LineDeviceForm /> },
  { path: "master/line-device/:id/edit", element: <LineDeviceForm /> },
  { path: "master/machine-part", element: <MachinePartView /> },
  { path: "master/machine-part/add", element: <MachinePartForm /> },
  { path: "master/machine-part/:id/edit", element: <MachinePartForm /> },
  { path: "master/machine-category", element: <MachineCategoryView /> },
  { path: "master/machine-category/add", element: <MachineCategoryForm /> },
  {
    path: "master/machine-category/:id/edit",
    element: <MachineCategoryForm />,
  },
  { path: "master/downtime", element: <DowntimeView /> },
  { path: "master/downtime/add", element: <DowntimeForm /> },
  { path: "master/downtime/:id/edit", element: <DowntimeForm /> },
];
const accountRouter = [
  {
    path: "user/account",
    element: <AccountView />,
  },
  { path: "user/account/:id/detail", element: <AccountDetail /> },
  { path: "user/account/:id/edit", element: <AccountFormView /> },
  { path: "user/account/add", element: <AccountFormView /> },
  { path: "user/account/trash", element: <Trash /> },
  { path: "user/access", element: <AccessUser /> },
  { path: "user/access/:id/permission", element: <MappingMenu /> },
  { path: "user/access/permission/create/:id", element: <Permission /> },
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
      ...layoutMenu,
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
