import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { MoboNavbar, Navbar } from "./Navbar";


const Layout = () => {
  return (
    <div className="layout-container">
      <div className="navbar-layout-wrapper">
        <MoboNavbar />
        <Navbar />
      </div>
      <div className="content-layout-wrapper">
        <div className="content-route-container">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
