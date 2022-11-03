import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Contact from "../pages/Contact/Contact";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
// vlin chữ C ko cần ghi hoa :v
const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="home" />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
