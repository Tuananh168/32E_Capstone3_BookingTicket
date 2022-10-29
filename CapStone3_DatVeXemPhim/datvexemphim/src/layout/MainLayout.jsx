import React from "react";
import Header from "./Header/Header";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeMenu from "../pages/Home/HomeMenu/HomeMenu";
import Home from "../pages/Home/Home";
import Footer from "./Footer/Footer";

const MainLayout = () => {
  return (
    <div className="container max-lg:auto">
      <Header />

      <HomeCarousel />

      <Home />
      <hr />
      <Footer />
    </div>
  );
};

export default MainLayout;
