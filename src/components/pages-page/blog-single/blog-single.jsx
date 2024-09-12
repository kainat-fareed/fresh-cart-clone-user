// React imports
import React from "react";

// Mui Imports
import { Box, Breadcrumbs, Divider, Grid, Typography } from "@mui/material";

// Custom Imports
import { Link } from "react-router-dom";
import { BlogSingleRecipeArr } from "./dummyData/blog-single-page-data";
import LeftImg from "../../../assets/images/blogs/left-img.jpg";

const BlogSingle = () => {
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
            <Typography sx={{ fontSize: "14px" }}>Blog Single</Typography>
          </Breadcrumbs>
        </div>

        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          {BlogSingleRecipeArr?.map((blog) => {
            return (
              <Grid item xs={12} md={8} className="border border-red-500">
                <h4 className="text-sm text-green-500 text-center font-medium mt-8">
                  {blog?.type}
                </h4>
                <h1 className="text-4xl text-gray-800 font-bold my-5 text-center">
                  {blog?.RecipeName}
                </h1>
                <div className="flex justify-center">
                  <span className="text-xs text-gray-500">
                    {blog?.blogDate}
                  </span>
                  <span className="text-xs text-gray-500 ml-3">Read time:</span>
                  <span className="text-xs text-gray-700 font-bold ml-0.5">
                    {blog?.duration}min
                  </span>
                </div>
                <img className="rounded-lg my-5" src={blog?.recipeImg} alt="" />
                <p className="text-sm text-gray-500 my-4">{blog?.para1}</p>
                <p className="text-sm text-gray-500">{blog?.para2}</p>
                <p className="text-sm text-gray-500 my-4">{blog?.para3}</p>
                <p className="text-sm text-gray-500">{blog?.para4}</p>
                <p className="text-sm text-gray-500 my-4">{blog?.para5}</p>

                <Divider sx={{ marginY: "20px" }} />

                <h1 className="text-3xl font-bold text-green-500 text-center italic leading-loose">
                  "Failure will never overtake me if <br /> rmy determination to
                  succeed is <br /> strong enough."
                </h1>

                <p className="text-gray-500 text-center my-4">__ Og Mandino</p>
                <Divider sx={{ marginY: "20px" }} />
                <p className="text-sm text-gray-500">{blog?.para6}</p>
                <p className="text-sm text-gray-500 my-4">{blog?.para7}</p>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default BlogSingle;
