// React Imports
import React, { useState } from "react";

// Mui Imports
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Rating,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import StarRateIcon from "@mui/icons-material/StarRate";
import TableContainer from "@mui/material/TableContainer";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// React Router Imports
import { Link, useParams } from "react-router-dom";

// Custom Imports
import {
  ProductDetailTab,
  RelatedProductsArr,
  ReviewsData,
  ShareBtnData,
  TopReviewFilterData,
  rateFeaturesData,
  rows1,
  rows2,
  slideRatingData,
} from "./dummyData/product-detail-dummy-data";
import "./style/product-list-style.css";
import { productSectionData } from "../../home-page/popular-products-section/dummyData/products-data";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../store/slices/addCartSlice";

import { addToWishList } from "../../../store/slices/wishListSlice";

// Function Tabs
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Table style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  width: 200,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFC107" : "#308fe8",
  },
}));

const ProductDetail = () => {

  const [value, setValue] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [filterReview, setFilterReview] = useState("");

  const { productId } = useParams();

  const { quantity, cartProducts } = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  console.log(cartProducts, "cartProducts");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const BreadCrumbHandleClick = (event) => {
    event.preventDefault();
    //   console.info("You clicked a breadcrumb.");
  };

  const ReviewFilterHandler = (event) => {
    setFilterReview(event.target.value);
  };

  const [openShareBtnMenu, setOpenShareBtnMenu] = useState(false);

  const handleShareBtnMenuClick = (event) => {
    setOpenShareBtnMenu(event.currentTarget);
  };
  const handleShareBtnClose = () => {
    setOpenShareBtnMenu(null);
  };

  const productDetails = productSectionData.filter(
    (product) => product.id == productId
  );

  return (
    <>
      <div
        role="presentation"
        onClick={BreadCrumbHandleClick}
        className="px-4 md:px-10 lg:px-10 mb-5"
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
            to={"/pages/shop"}
            underline="hover"
            color="inherit"
            className="text-sm font-medium text-green-500 hover:text-green-600 hover:font-bold"
          >
            Bakery Biscuits
          </Link>
          <Typography sx={{ fontSize: "14px" }}>
            Napolitanke Ljesnjak
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="px-4 md:px-10 lg:px-10 mb-5">
        <Grid container gap={4}>
          <Grid item xs={11.9} md={5.5}>
            <div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-container swiper2"
              >
                {productDetails?.map((product) =>
                  product.images?.map((item, index) => (
                    <SwiperSlide key={index} className="my-swiper-slide">
                      <img
                        className="rounded-lg swiper-slide-img"
                        src={item?.productImg}
                        alt=""
                      />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper1"
              >
                {productDetails?.map((product) =>
                  product.images?.map((item, index) => (
                    <SwiperSlide key={index} className="swiper1-slide">
                      <img
                        className="rounded-lg border border-2 border-green-500 swiper-slide-img"
                        src={item?.productImg}
                        alt=""
                      />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            </div>
          </Grid>

          <Grid item xs={11} md={5.5}>
            {productDetails?.map((data) => {
              return (
                <div>
                  <span className="text-sm text-green cursor-pointer">
                    {data?.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-700 my-4">
                    {data?.productName}
                  </h1>
                  {data?.reviews && (
                    <div className="flex items-center">
                      <Rating
                        name="half-rating-read"
                        defaultValue={data?.rating}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                      <span className="text-sm text-green cursor-pointer ml-2">
                        {data?.reviews} reviews
                      </span>
                    </div>
                  )}

                  <div className="flex items-center my-4">
                    <span className="text-xl font-semibold me-2">
                      ${data?.currentPrice}
                    </span>
                    <span className="text-xl text-gray-500 font-medium line-through">
                      {data?.previousPrice && `$${data?.previousPrice}`}
                    </span>

                    {data?.off && (
                      <span className="text-sm text-red-500 font-medium ms-4">
                        {data?.off}% Off
                      </span>
                    )}
                  </div>

                  <Divider sx={{ marginY: "20px" }} />

                  <div className="my-4">
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        padding: "7px 16px",
                        borderColor: "#889397",
                        borderRadius: "8px",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "#889397",
                        "&:hover": {
                          borderColor: "#889397",
                          backgroundColor: "#889397",
                          color: "#fff",
                        },
                      }}
                    >
                      250g
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        padding: "7px 16px",
                        borderColor: "#889397",
                        borderRadius: "8px",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "#889397",
                        "&:hover": {
                          borderColor: "#889397",
                          backgroundColor: "#889397",
                          color: "#fff",
                        },
                        marginX: "10px",
                      }}
                    >
                      500g
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        padding: "7px 16px",
                        borderColor: "#889397",
                        borderRadius: "8px",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "#889397",
                        "&:hover": {
                          borderColor: "#889397",
                          backgroundColor: "#889397",
                          color: "#fff",
                        },
                      }}
                    >
                      1kg
                    </Button>
                  </div>

                  <div>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(decreaseQuantity(data.id))}
                      sx={{
                        fontWeight: "bold",
                        minWidth: "10px",
                        borderColor: "#c1c7c6",
                        color: "#5c6c75",
                        "&:hover": {
                          borderColor: "#c1c7c6",
                          backgroundColor: "#f0f3f2",
                        },
                      }}
                    >
                      -
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        fontWeight: "bold",
                        borderColor: "#c1c7c6",
                        color: "#5c6c75",
                        "&:hover": {
                          borderColor: "#c1c7c6",
                          backgroundColor: "#f0f3f2",
                        },
                      }}
                    >
                      {cartProducts[0]?.quantity
                        ? cartProducts[0]?.quantity
                        : 1}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(increaseQuantity(data.id))}
                      sx={{
                        fontWeight: "bold",
                        minWidth: "10px",
                        borderColor: "#c1c7c6",
                        color: "#5c6c75",
                        "&:hover": {
                          borderColor: "#c1c7c6",
                          backgroundColor: "#f0f3f2",
                        },
                      }}
                    >
                      +
                    </Button>
                  </div>

                  <div className="my-4">
                    <Button
                      variant="contained"
                      onClick={() => {
                        dispatch(addCart(data));
                      }}
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor: "#0aad0a",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        "&:hover": {
                          backgroundColor: "#0aad0a",
                        },
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      <LocalMallOutlinedIcon
                        sx={{ fontSize: "20px", marginRight: "5px" }}
                      />
                      Add to Cart
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        paddingY: "8px",
                        borderColor: "#c1c7c6",
                        borderRadius: "8px",
                        "&:hover": {
                          borderColor: "#099309",
                        },
                        marginX: "10px",
                      }}
                    >
                      <SyncAltOutlinedIcon sx={{ color: "#c1c7c6" }} />
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={()=>{dispatch(addToWishList(data))}}
                      size="small"
                      sx={{
                        paddingY: "8px",
                        borderColor: "#c1c7c6",
                        borderRadius: "8px",
                        "&:hover": {
                          borderColor: "#099309",
                        },
                      }}
                    >
                      <FavoriteBorderOutlinedIcon sx={{ color: "#c1c7c6" }} />
                    </Button>
                  </div>
                  <Divider sx={{ marginY: "20px" }} />

                  <div>
                    <div className="mb-4 flex">
                      <span className="me-8 text-sm text-gray-500 font-medium w-36">
                        Product Code:
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {data?.productCode}
                      </span>
                    </div>

                    <div className="my-4 flex">
                      <span className="me-8 text-sm text-gray-500 font-medium w-36">
                        Availability:
                      </span>
                      <span
                        className="text-sm text-gray-500 font-medium"
                        style={{
                          color:
                            data?.availability === "Out of Stock"
                              ? "red"
                              : "#0AAD0A",
                        }}
                      >
                        {data?.availability}
                      </span>
                    </div>

                    <div className="mb-4 flex">
                      <span className="me-8 text-sm text-gray-500 font-medium w-36">
                        Type:
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {data?.type}
                      </span>
                    </div>
                    <div className="my-4 flex">
                      <span className="me-8 text-sm text-gray-500 font-medium w-36">
                        Shipping:
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        01 day shipping. ( Free pickup today)
                      </span>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant="outlined"
                      aria-controls={
                        openShareBtnMenu ? "basic-menu" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={openShareBtnMenu ? "true" : undefined}
                      onClick={handleShareBtnMenuClick}
                      sx={{
                        padding: "7px 16px",
                        borderColor: "#889397",
                        borderRadius: "8px",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "#889397",
                        "&:hover": {
                          borderColor: "#889397",
                          backgroundColor: "#889397",
                          color: "#fff",
                        },
                        marginY: "10px",
                      }}
                    >
                      Share <KeyboardArrowDownOutlinedIcon />
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={openShareBtnMenu}
                      open={openShareBtnMenu}
                      onClose={handleShareBtnClose}
                    >
                      {ShareBtnData?.map((menu) => {
                        return (
                          <>
                            <MenuItem
                              // onClick={handleClose}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="flex">
                                {/* <span>{menu?.icon}</span> */}
                                <span className="pt-1 px-3">{menu?.label}</span>
                              </div>
                            </MenuItem>
                          </>
                        );
                      })}
                    </Menu>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>

        <Box sx={{ width: "100%", marginTop: "10%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Product Details"
                sx={{ textTransform: "capitalize" }}
              />
              <Tab label="Information" sx={{ textTransform: "capitalize" }} />
              <Tab label="Reviews" sx={{ textTransform: "capitalize" }} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <div className="my-4">
              <div className="my-4">
                <h1 className="text-xl mb-1 font-bold text-gray-800">
                  {ProductDetailTab?.heading1}
                </h1>
                <p className="text-sm text-gray-500">
                  {ProductDetailTab?.para1}
                </p>
              </div>
              <div className="my-4">
                <h1 className="text-lg mb-1 font-bold text-gray-800">
                  {ProductDetailTab?.heading2}
                </h1>
                <p className="text-sm text-gray-500">
                  {ProductDetailTab?.para2}
                </p>
              </div>
              <div className="my-4">
                <h1 className="text-lg mb-1 font-bold text-gray-800">Units</h1>
                <span className="text-sm text-gray-500">
                  {ProductDetailTab?.unit}
                </span>
              </div>
              <div className="my-4">
                <h1 className="text-lg mb-1 font-bold text-gray-800">Seller</h1>
                <span className="text-sm text-gray-500">
                  {ProductDetailTab?.seller}
                </span>
              </div>
              <div className="my-4">
                <h1 className="text-lg mb-1 font-bold text-gray-800">
                  Disclaimer
                </h1>
                <p className="text-sm text-gray-500 text-gray-800">
                  {ProductDetailTab?.disclaimer}
                </p>
              </div>
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <h1 className="text-xl mb-4 font-bold text-gray-800">Details</h1>
            <TableContainer>
              <Grid container gap={{ lg: 3 }}>
                <Grid item xs={12} md={12} lg={5.82}>
                  <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableBody>
                      {rows1.map((row) => (
                        <StyledTableRow key={row?.label}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              color: "#5c6c75",
                            }}
                          >
                            {row?.label}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              color: "#5c6c75",
                            }}
                          >
                            {row?.rowValue}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item xs={12} md={12} lg={5.82}>
                  <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableBody>
                      {rows2.map((row) => (
                        <StyledTableRow key={row?.label}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              color: "#5c6c75",
                            }}
                          >
                            {row?.label}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              color: "#5c6c75",
                            }}
                          >
                            {row?.rowValue}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </TableContainer>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <Grid container gap={{ xs: 1, md: 1, lg: 3 }}>
              <Grid
                item
                xs={12}
                md={3.88}
                lg={3.76}
                sx={{
                  display: { xs: "none", md: "block" },
                  border: "1px solid red",
                }}
              >
                <h1 className="text-xl mb-4 font-bold text-gray-800">
                  Customer reviews
                </h1>
                <div className="flex items-center">
                  <Rating name="read-only" readOnly small defaultValue={4.1} />
                  <span className="text-sm mx-2 text-gray-500 ">
                    4.1 out of 5
                  </span>
                  <span className="text-sm text-gray-500">
                    11,130 global ratings
                  </span>
                </div>

                <div className="my-4 ">
                  {slideRatingData?.map((itemSlide) => {
                    return (
                      <>
                        <div className="flex items-center mb-2.5">
                          <span className="text-sm text-gray-500">
                            {itemSlide?.starValue}
                          </span>
                          <StarRateIcon
                            sx={{
                              color: "#FFC107",
                              fontSize: "20px",
                              marginX: "8px",
                            }}
                          />
                          <BorderLinearProgress
                            variant="determinate"
                            value={itemSlide?.progressValue}
                          />
                          <span className="text-sm text-gray-500 ml-2">
                            {itemSlide?.progressPercentNum}%
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <h1 className="text-xl mb-2 font-bold text-gray-800">
                    Review this product
                  </h1>
                  <p className="text-sm mb-4 text-gray-500">
                    Share your thoughts with other customers.
                  </p>
                </div>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    borderColor: "#c1c7c6",
                    borderRadius: "8px",
                    color: "#5c6c75",
                    padding: "8px 50px",
                    "&:hover": {
                      borderColor: "#c1c7c6",
                      backgroundColor: "#c1c7c6",
                    },
                  }}
                >
                  Write the Review
                </Button>
              </Grid>

              <Grid item xs={12} md={8} lg={8} sx={{ border: "1px solid red" }}>
                <div className="flex justify-between mb-8">
                  <h1 className="text-xl mb-4 font-bold text-gray-800">
                    Reviews
                  </h1>
                  <select
                    name="productFilter"
                    value={filterReview}
                    onChange={ReviewFilterHandler}
                    className="w-36 border rounded-lg px-3 py-2.5 text-sm md:ml-3 hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                  >
                    {TopReviewFilterData?.map((item) => {
                      return (
                        <>
                          <option
                            value={item?.id}
                            className="text-xs md:text-base"
                          >
                            {item?.option}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>

                <div>
                  {ReviewsData?.map((item) => {
                    return (
                      <>
                        <div className="w-full flex">
                          <Avatar
                            alt=""
                            src={item?.avatar}
                            sx={{ width: 56, height: 56 }}
                          />
                          <div className="ml-4 w-full">
                            <h1 className="text-md font-semibold text-gray-800">
                              {item?.reviewerName}
                            </h1>
                            <div className="flex my-2">
                              <span className="text-xs text-gray-500 me-4">
                                {item?.reviewDate}
                              </span>
                              <span className="text-xs font-bold">
                                {item?.purchaseType}
                              </span>
                            </div>
                            <div className="flex items-center mb-2">
                              <Rating
                                name="read-only"
                                value={item?.rating}
                                readOnly
                              />
                              <h3 className="text-sm font-bold ml-4">
                                {item?.feedback}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                              {item?.reviewPara}
                            </p>
                            {item?.productImg1 && (
                              <div className="flex my-4">
                                <img
                                  className="h-14 w-14 border border-gray-400 rounded-lg"
                                  src={item?.productImg1}
                                  alt=""
                                />
                                <img
                                  className="h-14 w-14 border border-gray-400 rounded-lg mx-2"
                                  src={item?.productImg2}
                                  alt=""
                                />
                                <img
                                  className="h-14 w-14 border border-gray-400 rounded-lg"
                                  src={item?.productImg3}
                                  alt=""
                                />
                              </div>
                            )}
                            <div className="flex justify-end mt-4">
                              <div className="flex items-center cursor-pointer mx-4">
                                <ThumbUpOutlinedIcon
                                  sx={{ fontSize: "16px", color: "#5c6c75" }}
                                />
                                <span className="text-sm text-gray-500 ml-2">
                                  Helpful
                                </span>
                              </div>
                              <div className="flex items-center cursor-pointer">
                                <OutlinedFlagIcon
                                  sx={{ fontSize: "16px", color: "#5c6c75" }}
                                />
                                <span className="text-sm text-gray-500 ml-2">
                                  Report Abuse
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Divider sx={{ marginY: "20px" }} />
                      </>
                    );
                  })}
                </div>

                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    borderColor: "#c1c7c6",
                    borderRadius: "8px",
                    color: "#5c6c75",
                    padding: "8px 30px",
                    "&:hover": {
                      borderColor: "#c1c7c6",
                      backgroundColor: "#c1c7c6",
                    },
                  }}
                >
                  Read More Reviews
                </Button>
                <h1 className="text-xl font-semibold text-gray-800 my-6">
                  Create Review
                </h1>
                <h3 className="text-lg font-semibold text-gray-800">
                  Overall rating
                </h3>
                <Rating name="no-value" value={null} />
                <Divider sx={{ marginY: "20px" }} />

                <div>
                  <h1 className="text-xl font-semibold text-gray-800 my-6">
                    Rate Featuring
                  </h1>
                  {rateFeaturesData?.map((item) => {
                    return (
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item?.heading}
                        </h3>
                        <Rating name="no-value" value={item?.rating} />
                      </div>
                    );
                  })}
                </div>
                <Divider sx={{ marginY: "20px" }} />

                <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-2">
                  Add a headline
                </h3>
                <TextField
                  type="search"
                  name="search"
                  placeholder="What's most important to know"
                  size="small"
                  sx={{
                    display: { xs: "block", lg: "flex" },
                    width: "500px",
                    "& .MuiOutlinedInput-root": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "8px",
                        fontSize: "16px",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#099309",
                        borderWidth: "1px",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#099309",
                        borderWidth: "2px",
                      },
                    },
                  }}
                />
                <Divider sx={{ marginY: "20px" }} />
                <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-2">
                  Add a photo or video
                </h3>
                <p className="text-sm text-lg-500 mb-2">
                  Shoppers find images and videos more helpful than text alone.
                </p>

                <div class="cursor-pointer mt-4 relative overflow-hidden w-full">
                  <div class="upload-btn-wrapper text-center cursor-pointer w-full">
                    <button
                      class="w-3/4 md:px-24 py-8 md:py-20 text-gray-500 bg-gray-100 rounded-md border border-dashed border-gray-300"
                      type="button"
                    >
                      Drop files here to upload
                    </button>
                    <input type="file" />
                  </div>
                </div>
                <Divider sx={{ marginY: "20px" }} />

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-2">
                    Add a written review
                  </h3>
                  <TextField
                    id="outlined-multiline-static"
                    placeholder="What did you like or dislike? What did you use this product for?"
                    multiline
                    fullWidth
                    minRows={3}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderRadius: "8px",
                          fontSize: "16px",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#099309",
                          borderWidth: "1px",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#099309",
                          borderWidth: "2px",
                        },
                      },
                    }}
                  />
                </div>
                <div className="flex justify-end mt-8">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderColor: "##0AAD0A",
                      backgroundColor: "#0AAD0A",
                      borderRadius: "8px",
                      color: "#fff",
                      padding: "8px 20px",
                      "&:hover": {
                        borderColor: "#0AAD0A",
                        backgroundColor: "#0AAD0A",
                      },
                    }}
                  >
                    Submit Reviews
                  </Button>
                </div>
              </Grid>
            </Grid>
          </CustomTabPanel>
        </Box>

        <Box className="my-20">
          <h1 className="text-2xl font-bold text-gray-800 my-4">
            Related Items
          </h1>
          <Grid container gap={{ xs: 1.25, md: 2, lg: 2 }}>
            {RelatedProductsArr?.map((item) => {
              return (
                <Grid items xs={5.8} sm={5.85} md={3.75} lg={2.27}>
                  <div className="border rounded-lg py-4 px-3 hover:shadow-xl hover:border-green-500">
                    <div className="relative">
                      <div className="flex justify-center">
                        <img src={item?.image} alt="app" />
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
                            sx={{ borderRadius: "8px", paddingX: "2px" }}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <div>
                      <Tooltip title={item?.productName} placement="top">
                        <h3 className="cursor-pointer hover:text-green-500">
                          {item?.productName?.length > 20
                            ? `${item?.productName.slice(0, 20)}...`
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

                      <div className="flex item-center justify-between">
                        <div>
                          <span className="text-sm">${item?.currentPrice}</span>
                          <span className="line-through ml-2 text-sm text-gray-500">
                            {item?.previousPrice && `$${item?.previousPrice}`}
                          </span>
                        </div>
                        <div>
                          <Button
                            onClick={() => {
                              dispatch(addCart(item));
                            }}
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              backgroundColor: "#099309",
                              "&:hover": {
                                backgroundColor: "#099309",
                              },
                              fontSize: "14px",
                            }}
                          >
                            <AddIcon
                              sx={{ fontSize: "16px", marginRight: "2px" }}
                            />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ProductDetail;
