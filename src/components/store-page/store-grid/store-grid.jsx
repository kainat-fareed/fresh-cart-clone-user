// React Import
import React from "react";

// Mui Imports
import { Avatar, Box, Breadcrumbs, Grid, Typography } from "@mui/material";

// React Dom Imports
import { Link } from "react-router-dom";

// Custom imports
import StoreLogo from "../../../assets/images/stores-logo/store-graphics.svg";
import { StoreLocationData } from "./dummyData/store-grid-data";

const StoreGrid = () => {
  const BreadCrumbHandleClick = (event) => {
    event.preventDefault();
    //   console.info("You clicked a breadcrumb.");
  };

  return (
    <>
      <Box className="mx-4 md:mx-10">
        <div
          role="presentation"
          onClick={BreadCrumbHandleClick}
          className="mb-5"
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              to={"/"}
              underline="hover"
              color="inherit"
              className="text-sm font-medium text-green-500 hover:text-green-600 hover:font-bold"
            >
              Home
            </Link>
            <Link
              to={"/pages/store"}
              underline="hover"
              color="inherit"
              className="text-sm font-medium text-green-500 hover:text-green-600 hover:font-bold"
            >
              Store
            </Link>
            <Typography sx={{ fontSize: "14px" }}>Store Grid</Typography>
          </Breadcrumbs>
        </div>

        <div className="bg-gray-100 flex justify-between items-center px-6 md:px-10 rounded-lg py-6">
          <div>
            <h1 className="font-bold text-3xl text-gray-800">Stores</h1>
          </div>
          <div>
            <img src={StoreLogo} alt="Store graphics" />
          </div>
        </div>

        <div className="my-6">
          <p className="mb-3 text-sm text-gray-800 font-bold">
            We have <span className="text-green-500">36</span> vendors now
          </p>
          <Grid container gap={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
            {StoreLocationData?.map((item) => {
              return (
                <Grid items xs={11.75} sm={11.75} md={3.75} lg={2.82}>
                  <div className="border py-5 px-4 rounded-lg hover:shadow-lg hover:border-green-500">
                    <div>
                      <div className="flex justify-center">
                        <Avatar
                          alt="Store images"
                          src={item?.avatar}
                          sx={{
                            width: 65,
                            height: 65,
                          }}
                        />
                      </div>
                      <h2 className="my-3 text-lg font-bold text-center hover:text-green-500 cursor-pointer">
                        {item?.martName}
                      </h2>
                      <div className="flex my-1 ">
                        <span className="text-sm text-gray-500">
                          {item?.shop1}
                        </span>
                        <span className="mx-3 text-sm text-gray-500">
                          {item?.shop2}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item?.shop3}
                        </span>
                      </div>
                      <div className="flex flex-col my-3">
                        <span
                          className="text-xs text-gray-500 font-semibold"
                          style={{
                            color:
                              item?.delivery === "Delivery"
                                ? "#5c6c75"
                                : "#0aad0a",
                          }}
                        >
                          {item?.delivery}
                        </span>

                        <span className="text-xs text-gray-500 mt-1">
                          {item?.pickUp}
                        </span>
                      </div>
                      <div className="flex my-2">
                        <span className="bg-gray-200 border border-gray-500 px-2 py-0.5 rounded-sm text-xs font-bold">
                          {item?.distance}
                        </span>
                        {item?.price && (
                          <span className="mx-3 bg-gray-200 border border-gray-500 px-2 py-0.5 rounded-sm text-xs font-bold">
                            {item?.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default StoreGrid;
