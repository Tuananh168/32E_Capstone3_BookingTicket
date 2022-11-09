import React from "react";
import { Redirect } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import { USER_LOGIN } from "../util/settings/config";

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
        {
          path: "checkout/:id",
          element: <Checkout />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },

    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return routing;
};

export default Routers;
