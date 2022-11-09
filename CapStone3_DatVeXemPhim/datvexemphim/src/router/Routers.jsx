import React from "react";
import { Redirect } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";
import AdminMainLayout from "../components/layouts/AdminMainLayout";
import MainLayout from "../layout/MainLayout";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Login from "../pages/Admin/Login/Login";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import { USER_LOGIN } from "../util/settings/config";
import SignUp from "../pages/Admin/SignUp/SignUp";
import FilmManage from "../pages/Admin/FilmManage/FilmManage";
import UserManage from "../pages/Admin/UserManage/UserManage";
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
    {
      path: 'admin',
      element: <AdminMainLayout />,
      children: [
        // {
        //   path: '',
        //   element:<Navigate to='login'/>,
        // },
        // {
        //   path: 'login',
        //   element:<Login/>,
        // },
        // {
        //   path: 'signup',
        //   element:<SignUp/>,
        // },
        {
          path: 'film',
          element:<FilmManage/>,
        },
        {
          path: 'user',
          element:<UserManage/>,
        },
      ]
    }
  ]);
  return routing;
};

export default Routers;
