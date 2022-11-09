import React from "react";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Footer from "./Footer/Footer";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <main>
        {/* <Home /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
