// React Imports
import React from "react";

// Mui Imports
import { Avatar, Box, Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Custom Imports
import { LocationData } from "./dummyData/store-location-data";

const BestStoreLocation = () => {
  return (
    <>
      <Box className="px-10 mt-20">
        <div className="flex justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{
                color: "#099309",
              }}
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"></path>
            </svg>
            <h1 class="ms-3 text-2xl font-bold">Best stores in Locations</h1>
          </div>
          <div className="flex items-center">
            <span className="text-green text-sm bold">
              All Stores <NavigateNextIcon/>
            </span>
          </div>
        </div>
        <p className="ms-9">
          Find the best store products in your area with discount.
        </p>

        {/* Section Cards */}

        <div className="my-5">
          <Grid container gap={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            {LocationData?.map((item) => {
              return (
                <Grid items xs={11.75} sm={11.75} md={3.75}>
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
                        <span className="text-xs text-gray-500">
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

export default BestStoreLocation;
