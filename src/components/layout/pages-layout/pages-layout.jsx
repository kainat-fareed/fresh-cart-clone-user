// React Imports
import React from "react";

// React Router Dom Imports
import { Outlet } from "react-router-dom";

// Custom Imports
import NavBar from "../../home-page/navbar/navbar";
import ShopHeader from "../../shop-page/shop-header/shop-header";
import { Divider } from "@mui/material";
import ShopFooter from "../../shop-page/shop-footer/footer";

const PagesLayout = () => {
  return(
  <>
    <ShopHeader />
    <NavBar />
    <Divider sx={{marginY:"15px"}}/>
    <Outlet />
    <ShopFooter/>
  </>
  )
};
export default PagesLayout;
