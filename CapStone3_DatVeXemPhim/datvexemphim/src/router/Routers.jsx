import React from "react";
import { Redirect } from "react-router";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import { USER_LOGIN } from "../util/settings/config";
// vlin chữ C ko cần ghi hoa :v

const Routers = () => {
  // if (!localStorage.getItem(USER_LOGIN)) {
  //   return <Redirect to="login" />;
  // }
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
          path: "news",
          element: <News />,
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
    {
      path: "checkout/:id",
      element: <Checkout />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return routing;
};

export default Routers;
