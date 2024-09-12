// React Imports
import React from "react";

// Mui Imports
import { Divider, Grid } from "@mui/material";

// Custom Imports
import { shopOfferData, shopWithUsData } from "./dummyData/shop-offers-data";

const ShopOffersSection = () => {
  return (
    <>
      <div className=" px-10 my-10">
        <Grid container gap={{ xs: 1, sm: 2, md: 4 }}>
          {shopOfferData?.map((item) => {
            return (
              <Grid items xs={11.75} sm={11.75} lg={3.75}>
                <div className="my-10 flex items-center flex-col lg:px-10 md:px-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      style={{
                        color: "#099309",
                        // justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <path d={item?.path}></path>
                      <path d={item?.path1}></path>
                    </svg>
                  </div>
                  <h1 className="text-base font-bold my-5">{item?.title}</h1>
                  <p className="text-sm text-gray-500 text-center">
                    {item?.description}
                  </p>
                </div>
              </Grid>
            );
          })}
        </Grid>


        <Grid container gap={{ xs: 1, sm: 2, md: 4 }}>
          {shopWithUsData?.map((item) => {
            return (
              <Grid items xs={11.75} sm={11.75} lg={3.75}>
                <div className="my-10 flex items-center flex-col lg:px-10 md:px-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      style={{
                        color: "#099309",
                        // justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <path d={item?.path}></path>
                      <path d={item?.path1}></path>
                    </svg>
                  </div>
                  <h1 className="text-base font-bold my-5">{item?.title}</h1>
                  <p className="text-sm text-gray-500 text-center">
                    {item?.description}
                  </p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default ShopOffersSection;
