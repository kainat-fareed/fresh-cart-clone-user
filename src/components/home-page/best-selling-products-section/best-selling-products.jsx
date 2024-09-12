// React imports
import React from "react";

// Mui imports
import { Box, Button, Chip, Rating, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";

// Custom imports
import { BestProductsData } from "./dummyData/selling-products-data";
import { productSectionData } from "../popular-products-section/dummyData/products-data";
import { Link } from "react-router-dom";

import "../popular-products-section/style/style.css";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../store/slices/wishListSlice";
import { addCart} from "../../../store/slices/addCartSlice";

const BestSellingProducts = () => {
  const dispatch = useDispatch()
  return (
    <>
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
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h1 class="ms-3 text-2xl font-bold">Best Selling Products</h1>
          </div>
          <p className="ms-9">
            Find the bestseller products in your area with discount.
          </p>

          <Box className="my-10 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              mousewheel={false}
              modules={[Autoplay, FreeMode, Mousewheel]}
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
              {productSectionData?.slice(6, 12)?.map((item) => {
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
                                  <Link
                                    to={`/pages/product-detail/${item?.id}`}
                                  >
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
                                  item?.sale == "Sale" ||
                                  item?.sale == `${item?.sale}%`
                                    ? "error"
                                    : "warning"
                                }
                              />
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                        <div>
                          <Tooltip title={item?.productName} placement="top">
                            <h3 className="cursor-pointer hover:text-green-500">
                              {item?.productName?.length > 25
                                ? `${item?.productName.slice(0, 25)}...`
                                : item?.productName}
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
                                {item?.previousPrice &&
                                  `$${item?.previousPrice}`}
                              </span>
                            </div>
                            <span
                              className="text-xs"
                              style={{
                                color:
                                  item?.availability === "Out of Stock"
                                    ? "red"
                                    : "#0aad0a",
                              }}
                            >
                              {item?.availability}
                            </span>
                          </div>
                          <div className="mt-3">
                            <Button
                             onClick={()=>{dispatch(addCart(item))}}
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                backgroundColor: "#0aad0a",
                                "&:hover": {
                                  backgroundColor: "#0aad0a",
                                },
                                borderRadius: "50px",
                                padding: "10px 40px",
                                width: "100%",
                                fontSize: "14px",
                              }}
                            >
                              Add to cart
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

        {/* 15% off Button */}

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Box className="mb-10 flex justify-center">
            <Button
              variant="contained"
              sx={{
                transform: "upper",
                backgroundColor: "#FFF7E0",
                color: "#ffc107",
                "&:hover": {
                  backgroundColor: "#ffc107",
                  color: "#000000",
                },
                borderRadius: "50px",
                padding: "10px 40px",
                width: "75%",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              Save an extra 15% on Authorship order
            </Button>
          </Box>
        </Box>
      </>
    </>
  );
};

export default BestSellingProducts;
