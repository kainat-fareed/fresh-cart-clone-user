// React Imports
import React from "react";

// Mui Imports
import { Box, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Custom Imports
import NotFoundImg from "../../assets/images/auth/error.svg";
import Logo from "../../assets/images/freshcart-logo.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Box className="px-10">
        <Box className=" lg:mt-10">
          <img src={Logo} alt="" />
        </Box>
        <Grid
          container
          gap={{ xs: 3, sm: 4, md: 4 }}
          className="flex items-center justify-center my-16"
        >
          <Grid item xs={12} md={12} lg={4}>
            <Box className="flex sm:justify-center">
              <div>
                <h1 className="text-3xl font-bold mb-3">
                  Something’s wrong here...
                </h1>
                <p className="text-sm mb-8">
                  We can’t find the page you’re looking for. <br /> Check out
                  our help center or head back to home.
                </p>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#001e2b",
                    "&:hover": {
                      backgroundColor: "#001e2b",
                    },
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    cursor:"pointer",
                    padding: "10px 16px",
                    borderRadius: "8px",
                  }}
                >
                  Help Center
                  <ArrowForwardIcon
                    sx={{
                      fontSize: "16px",
                      marginLeft: "2px",
                      fontWeight: "bold",
                    }}
                  />
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#099309",
                    "&:hover": {
                      backgroundColor: "#099309",
                    },
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    cursor:"pointer",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    marginLeft: "10px",
                  }}
                >
                  <Link to={"/"}> Back to home </Link>
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={4} className="flex justify-center">
            <img
              className="w-full h-auto"
              src={NotFoundImg}
              alt="Page Not Found"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PageNotFound;
