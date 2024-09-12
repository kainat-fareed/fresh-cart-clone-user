// React imports
import React from "react";

// Mui imports
import { Box, Button, Grid, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Custom Imports
import { RecipesData } from "./dummyData/recipes-data";

const PopularRecipe = () => {
  return (
    <>
      <Box className="px-10 mt-20 my-10">
        <div className="flex justify-between">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="mt-1"
              viewBox="0 0 16 16"
              style={{
                color: "#099309",
              }}
            >
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"></path>
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path>
            </svg>
            <h1 class="ms-3 text-2xl font-bold">Our most popular recipes</h1>
          </div>
          <div className="flex items-center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#099309",
                "&:hover": {
                  backgroundColor: "#099309",
                },
                textTransform: "capitalize",
              }}
            >
              View all recipes
            </Button>
          </div>
        </div>
        <p className="ms-9">Check out most popular recipes of all time.</p>

        {/* Section Cards */}
        <div className="my-5">
          <Grid container gap={{ xs: 2, md: 3, lg: 3 }}>
            {RecipesData?.map((item) => {
              return (
                <Grid items xs={11.75} sm={5.75} lg={2.80}>
                  <div>
                    <img
                      className="rounded-lg"
                      src={item?.recipeImage}
                      alt="Recipe"
                    />
                    <Tooltip title={item?.recipeName} placement="top">
                      <h1 className="my-2 font-bold hover:text-green-500 cursor-pointer">
                        {item?.recipeName?.length > 30
                          ? `${item?.recipeName.slice(0, 30)}...`
                          : item?.recipeName}
                      </h1>
                    </Tooltip>
                    <p className="my-2 text-sm text-gray-500">
                      {item?.description?.length > 96
                        ? `${item?.description.slice(0, 96)}...`
                        : item?.description}
                    </p>
                    <div className="text-sm">
                      <span>
                        <AccessTimeIcon
                          sx={{ fontSize: "18px", marginBottom: "2px" }}
                        />
                      </span>
                      <span className="font-bold mx-0.5">
                        {item?.duration}
                      </span>
                      <span className="text-gray-500">min</span>
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
export default PopularRecipe;
