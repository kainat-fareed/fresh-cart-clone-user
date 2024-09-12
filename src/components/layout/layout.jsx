// React imports
import React from "react";

// Mui imports
import { Divider } from "@mui/material";

// React Router imports
import { Outlet } from "react-router-dom";

// Custom imports
import HeaderSection from "../home-page/header-section/header-section";
import NavBar from "../home-page/navbar/navbar";

const Layout = () => {
  return (
    <>
      <HeaderSection />
      <Divider />
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
