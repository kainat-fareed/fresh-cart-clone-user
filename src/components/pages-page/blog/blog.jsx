// React imports
import React from "react";

// Mui Imports
import { Box, Breadcrumbs, Grid, Tooltip, Typography } from "@mui/material";

// Custom Imports
import BlogLargeImg from "../../../assets/images/blogs/blog-large.jpg";
import { Link } from "react-router-dom";
import { BlogRecipesData } from "../blog/dummyData/bolg-recipes-data";

const Blog = () => {
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
              to={"/pages/Blog"}
              underline="hover"
              color="inherit"
              className="text-sm font-medium text-green-500 hover:text-green-600 hover:font-bold"
            >
              Blog
            </Link>
            <Typography sx={{ fontSize: "14px" }}>FreshCart Blog</Typography>
          </Breadcrumbs>
        </div>

        <h1 className="text-3xl text-gray-800 font-bold mb-5">FreshCart Blog</h1>
        <Grid container gap={2}>
          <Grid item xs={12} lg={7.8}>
            <img
              className="rounded-lg hover:cursor-pointer"
              src={BlogLargeImg}
              alt="Blog Large"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="lg:px-4 mt-2 lg:mt-8">
              <h1 className="text-3xl text-gray-800 font-medium mb-4">
                Garlic Cream Bucatini with Peas and Asparagus
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                erat ut neque bibendum egestas sed quis justo. Integer non
                rhoncus diam. Nullam eget dapibus lectus, vitae condimentum sem.
              </p>
              <div class="flex justify-between">
                <span className="text-xs text-gray-500">25 April 2023</span>
                <span className="text-xs text-gray-500">
                  Read time:
                  <span class="text-gray-700 font-bold ml-0.5">6min</span>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className="my-5">
          <Grid container gap={{ xs: 2, md: 3, lg: 3.5 }}>
            {BlogRecipesData?.map((item) => {
              return (
                <Grid items xs={11.75} sm={5.75} lg={3.82} className="my-3">
                  <div>
                    <img
                      className="rounded-lg mb-3"
                      src={item?.recipeImage}
                      alt="Recipe"
                    />
                    <span className="text-green-500 text-sm text-semibold hover:text-green-700 hover:cursor-pointer">
                      {item?.type}
                    </span>
                    <Tooltip title={item?.recipeName} placement="top">
                      <h1 className="my-2 font-bold hover:text-green-500 cursor-pointer">
                        {item?.recipeName?.length > 45
                          ? `${item?.recipeName.slice(0, 45)}...`
                          : item?.recipeName}
                      </h1>
                    </Tooltip>
                    <p className="my-2 text-sm text-gray-500">
                      {item?.description?.length > 110
                        ? `${item?.description.slice(0, 110)}...`
                        : item?.description}
                    </p>
                    <div className="flex justify-between">
                      <div>
                        <span className="text-xs text-gray-500">
                          {item?.date}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">
                          Read time:
                        </span>
                        <span className="text-xs font-bold mx-0.5">
                          {item?.duration}min
                        </span>
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

export default Blog;
