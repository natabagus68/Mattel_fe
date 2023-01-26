// import { RouterProvider } from "react-router-dom";
// import { router } from "./app/router.jsx";
// import { useMeQuery } from "./features/auth/authApiSlice.js";
// import { useEffect, useState } from "react";
//
// export const App = () => {
//   const { data: me = { data: {} }, isSuccess } = useMeQuery({
//     skip: localStorage.getItem("token"),
//   });
//   const [permission, setPermission] = useState([]);
//   useEffect(() => {
//     if (isSuccess) {
//       setPermission(
//         me.data.positions[0].permissions.map((el) => el.name.toLowerCase())
//       );
//     }
//     return () => {
//       setPermission([]);
//     };
//   }, [isSuccess]);
//   console.log(router(permission));
//
//   return <RouterProvider router={router(permission)} />;
// };
