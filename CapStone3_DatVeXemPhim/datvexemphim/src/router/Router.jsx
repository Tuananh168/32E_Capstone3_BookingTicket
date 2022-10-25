import React from "react";
import { Children } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Contact from "../pages/Contact/Contact";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      Children: [
        {
          path: "Contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return routing;
};

export default Router;
