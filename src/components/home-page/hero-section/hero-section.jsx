// React Imports
import React from "react";

// Mui Imports
import { Box, Button, Card, CardContent } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

// Custom Imports
import HeroBanner from "../../../assets/images/banner/banner-home.jpg";

const HeroSection = () => {
  const styles = {
    heroContainer: {
      backgroundImage: `url(${HeroBanner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100",
    },
  };
  return (
    <>
      <div style={styles.heroContainer}>
        <Box container xs={12} md={7} lg={6}>
          <div className="px-5 lg:px-32 md:px-20 lg:py-32 md:py-28 py-10">
            <Card sx={{ maxWidth: 355, borderRadius: 2 }}>
              <CardContent className="mx-2">
                <PlaceOutlinedIcon
                  sx={{ fontSize: "32px" }}
                  className="text-red-500"
                />
                <h1 className="mt-2 text-2xl font-bold">
                  Check what's in your local store
                </h1>
                <p className="text-sm my-1">
                  See delivery and collection options
                </p>

                <div className="flex items-center mt-3">
                  <input
                    type="text"
                    id="postcod"
                    placeholder="Enter Postcode"
                    maxlength="6"
                    className="border rounded-lg px-3 py-2.5 text-sm w-56 hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-300"
                  />

                  <Button
                    variant="text"
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "#099309",
                      "&:hover": {
                        backgroundColor: "#099309",
                      },
                      textTransform: "capitalize",
                      marginLeft: "10px",
                      padding: "8px 17px",
                      borderRadius: "8px",
                    }}
                  >
                    Check
                  </Button>
                </div>
              </CardContent>
            </Card>
            <p className="text-xs text-white mt-2 leading-6">
              Hello, Sign in for the best experience. New to Freshcart? <br />
              <span className="cursor-pointer">Register</span>
            </p>
          </div>
        </Box>
      </div>
    </>
  );
};

export default HeroSection;
