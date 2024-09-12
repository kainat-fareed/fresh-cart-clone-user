// React Import
import React from "react";

// Mui Imports
import { Box, Button, Chip, Rating, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

// React Router Dom Import
import { Link } from "react-router-dom";

// Custom Imports
import { productSectionData } from "./dummyData/products-data";
import "./style/style.css";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../store/slices/wishListSlice";
import { addCart } from "../../../store/slices/addCartSlice";

const PopularProductsSection = () => {

  const dispatch = useDispatch()
  return (
    <>
      <Box className="px-10 my-10">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mt-1"
            style={{
              color: "#099309",
            }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <h1 class="ms-3 text-2xl font-bold">FreshCart Popular Products</h1>
        </div>

        <Box className="my-10 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {productSectionData?.slice(0, 5)?.map((item) => {
              return (
                <SwiperSlide className="mb-10">
                    <div className="border rounded-lg py-4 px-3 hover:shadow-xl cursor-pointer hover:border-green-500 container">
                      <div className="relative">
                        <div className="flex justify-center">
                          <img src={item?.productImg} alt="app" />
                          <div class="middle">
                            <div>
                              <Tooltip
                                title="Quick view"
                                arrow
                                placement="top"
                                componentsProps={{
                                  tooltip: {
                                    sx: {
                                      bgcolor: "#21313c",
                                      "& .MuiTooltip-arrow": {
                                        color: "#21313c",
                                      },
                                    },
                                  },
                                }}
                              >
                                <Link to={`/pages/product-detail/${item?.id}`}>
                                <VisibilityIcon
                                  sx={{
                                    backgroundColor: "#fff",
                                    color: "#000000",
                                    fontSize: "30px",
                                    borderRadius: "8px",
                                    padding: "5px",
                                    "&:hover": {
                                      backgroundColor: "#0aad0a",
                                      color: "#fff",
                                    },
                                  }}
                                />
                                </Link>
                              </Tooltip>

                              <Tooltip
                                title="Wishlist"
                                arrow
                                placement="top"
                                componentsProps={{
                                  tooltip: {
                                    sx: {
                                      bgcolor: "#21313c",
                                      "& .MuiTooltip-arrow": {
                                        color: "#21313c",
                                      },
                                    },
                                  },
                                }}
                              >
                                {/* <Link to={`/pages/shop-wishlist/`}> */}
                                  <FavoriteBorderIcon
                                  onClick={()=>{dispatch(addToWishList(item))}}
                                    sx={{
                                      backgroundColor: "#fff",
                                      color: "#000000",
                                      fontSize: "30px",
                                      borderRadius: "8px",
                                      padding: "5px",
                                      marginLeft: "5px",
                                      "&:hover": {
                                        backgroundColor: "#0aad0a",
                                        color: "#fff",
                                      },
                                    }}
                                  />
                                {/* </Link> */}
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                        <span className="absolute top-0 text-sm">
                          {item?.sale ? (
                            <Chip
                              label={item?.sale}
                              color={
                                item?.sale == "Sale" || item?.sale == "Hot"
                                  ? "error"
                                  : "success"
                              }
                              sx={{borderRadius:"8px"}}
                            />
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">
                          {item?.category}
                        </span>
                        <Tooltip title={item?.productName} placement="top">
                          <h3>
                            {item?.productName}
                          </h3>
                        </Tooltip>
                        <div className="flex items-center my-2">
                          <Rating
                            name="half-rating-read"
                            defaultValue={3.5}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          <span className="text-xs text-gray-500 ml-1">
                            {item?.rating} ({item?.sold})
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <span className="text-sm">
                              ${item?.currentPrice}
                            </span>
                            <span className="line-through ml-2 text-sm text-gray-500">
                              {item?.previousPrice && `$${item?.previousPrice}`}
                            </span>
                          </div>
                          <Button
                           onClick={()=>{dispatch(addCart(item))}}
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              backgroundColor: "#0aad0a",
                              "&:hover": {
                                backgroundColor: "#0aad0a",
                              },
                            }}
                          >
                            + Add
                          </Button>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default PopularProductsSection;
