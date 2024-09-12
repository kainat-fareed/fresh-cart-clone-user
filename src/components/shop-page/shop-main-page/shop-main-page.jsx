// React imports
import React, { useState } from "react";

// mui Imports
import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Rating,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";

// React Router Dom import
import { Link } from "react-router-dom";

// Custom Imports
import {
  categoryArr,
  checkboxArr,
  productPerPage,
  productPrice,
  ratingCheckboxArr,
} from "./dummyData/side-bar-nav-items";
import { productsData } from "./dummyData/shop-products-data";
import FruitsBanner from "../../../assets/images/banner/assortment-citrus-fruits.png";
import "../../home-page/popular-products-section/style/style.css";
import { productSectionData } from "../../home-page/popular-products-section/dummyData/products-data";

import { useDispatch } from "react-redux";
import { addToWishList } from "../../../store/slices/wishListSlice";
import { addCart } from "../../../store/slices/addCartSlice";

const ShopPage = () => {
  const dispatch = useDispatch()
  // States
  const [listOpen, setListOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState();
  const [checked, setChecked] = useState(checkboxArr);
  const [searchValue, setSearchValue] = useState("");
  const [filterProductPerPage, setFilterProductPerPage] = useState("35"); // ("20")
  const [filterPrice, setFilterPrice] = useState("");
  const [ratingChecked, setRatingChecked] = useState(ratingCheckboxArr);
  // const [productsDataArr, setProductsDataArr] = useState(productsData);
  const [productsDataArr, setProductsDataArr] = useState(productSectionData);
  const [value, setValue] = useState([6, 300]);
  const [productsGrid, setProductsGrid] = useState({
    threeColumns: 3.75,
    fourColumns: 2.8,
    listView: false,
    listActive: false,
    threeGridActive: false,
    fourGridActive: true,
  });

  const BreadCrumbHandleClick = (event) => {
    event.preventDefault();
    //   console.info("You clicked a breadcrumb.");
  };

  const productPerPageFilterHandler = (event) => {
    console.log(event.target.value, "products");
    setFilterProductPerPage(event.target.value);
  };

  const priceFilterHandler = (event) => {
    const { value } = event.target;
    setFilterPrice(value);

    if (value === "lowToHigh") {
      const selectFilter = productsDataArr?.sort(
        (a, b) => parseFloat(a.currentPrice) - parseFloat(b.currentPrice)
      );

      setProductsDataArr(selectFilter);
    } else if (value === "highToLow") {
      const selectFilter = productsDataArr?.sort(
        (a, b) => parseFloat(b.currentPrice) - parseFloat(a.currentPrice)
      );

      setProductsDataArr(selectFilter);
    }
  };

  const searchHandlerInput = (value) => {
    setSearchValue(value);

    const filterData = checkboxArr?.filter((item) =>
      item?.label.toLowerCase().includes(value.toLowerCase())
    );

    setChecked(filterData);
  };

  const handleClick = (label) => {
    setListOpen(!listOpen);
    setOpenCollapse(label);
    console.log(label);
  };

  const clickHandlerStore = (store, i) => {
    const checkedBox = checked?.map((item, index) => {
      if (i == index) {
        return {
          ...item,
          check_box: !item?.check_box,
        };
      }
      return item;
    });
    setChecked(checkedBox);
  };

  const clickHandlerRating = (store, i) => {
    const checkedBoxRating = ratingChecked?.map((item, index) => {
      if (i == index) {
        return {
          ...item,
          check_box: !item?.check_box,
        };
      }
      return item;
    });
    setRatingChecked(checkedBoxRating);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            Shop
          </Link>
          <Typography sx={{ fontSize: "14px" }}>Snacks & Munchies</Typography>
        </Breadcrumbs>
      </div>

      <Box className="mx-4 md:mx-10">
        <Grid container gap={2}>
          <Grid item lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
            <h1 className="mt-5 ml-5 text-lg font-bold">Categories</h1>
            <List>
              {categoryArr.map((item) => (
                <>
                  <ListItem>
                    <ListItemButton onClick={() => handleClick(item?.label)}>
                      <ListItemText primary={item?.label} />
                      {item?.label === openCollapse ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                  </ListItem>

                  <Collapse
                    in={item?.label === openCollapse ? true : false}
                    timeout="auto"
                    unmountOnExit
                    className="mx-2"
                  >
                    <List
                      component="div"
                      disablePadding
                      className="shadow-2xl bg-white mx-4 rounded-lg"
                    >
                      {item.options?.map((value) => {
                        return (
                          <>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary={value?.item} />
                            </ListItemButton>
                          </>
                        );
                      })}
                    </List>
                  </Collapse>
                  <Divider sx={{ margin: "0px 25px" }} />
                </>
              ))}
            </List>
            <Box>
              <h1 className="my-5 ml-5 text-lg font-bold">Stores</h1>

              <div>
                <input
                  type="search"
                  value={searchValue}
                  placeholder="Search by store"
                  className="border rounded-lg px-3 py-2.5 text-sm w-64 mx-5 hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                  onChange={(e) => searchHandlerInput(e.target.value)}
                />
              </div>
              <div className="my-5">
                {checked?.map((store, i) => {
                  return (
                    <div className="mx-5 my-2">
                      <input
                        type="checkbox"
                        checked={store?.check_box}
                        onClick={() => clickHandlerStore(store, i)}
                        className="focus:ring focus:ring-green-400"
                      />
                      <label className="ml-2">{store?.label}</label>
                    </div>
                  );
                })}
              </div>

              <>
                <h1 className="mt-5 ml-5 text-lg font-bold">Prices</h1>
                <Box sx={{ width: 250, marginX: "20px" }}>
                  <Slider
                    sx={{ color: "#0AAD0A" }}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    Price: {`$${value[0]} - $${value[1]}`}
                  </Typography>
                </Box>
              </>

              <Box>
                <h1 className="mt-5 ml-5 text-lg font-bold">Rating</h1>
                {ratingChecked?.map((price, index) => {
                  return (
                    <>
                      <div className="flex items-center">
                        <Checkbox
                          size="small"
                          checked={price?.check_box}
                          onClick={() => clickHandlerRating(price, index)}
                          color="success"
                        />
                        <Rating
                          size="small"
                          name="read-only"
                          value={price?.rating}
                          readOnly
                        />
                      </div>
                    </>
                  );
                })}
              </Box>

              <div className="relative mt-5">
                <img
                  className="w-52 rounded-lg"
                  src={FruitsBanner}
                  alt="Menu Banner"
                />

                <div className="absolute bottom-28 left-8 flex flex-col items-center">
                  <h3 className="font-bold text-2xl">Fresh Fruits</h3>
                  <span>Get Upto 25% Off</span>
                  <Button
                    variant="contained"
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "#001e2b",
                      "&:hover": {
                        backgroundColor: "#001e2b",
                      },
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      marginTop: "10px",
                    }}
                  >
                    Shop Now
                    <ArrowForwardIcon
                      sx={{ fontSize: "16px", marginLeft: "5px" }}
                    />
                  </Button>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={8.84}>
            <div className="bg-gray-100 py-10 rounded-lg">
              <h1 className="text-3xl font-bold mx-10">Shop List</h1>
            </div>

            <div class="lg:flex justify-between items-center mt-5">
              <div class="mb-3 lg:mb-0">
                <p class="mt-2">
                  <span className="me-2">{filterProductPerPage}</span>
                  Products found
                </p>
              </div>

              <div class="md:flex md:justify-between md:items-center">
                <div class="flex justify-between items-center">
                  <div>
                    <ListOutlinedIcon
                      onClick={() => {
                        setProductsGrid((prev) => ({
                          ...prev,
                          listView: true,
                          listActive: true,
                          fourGridActive: false,
                          threeGridActive: false,
                        }));
                      }}
                      sx={{
                        color: productsGrid.listActive ? "#099309" : "#c1c7c6",
                        "&:hover": {
                          color: "#099309",
                          cursor: "pointer",
                        },
                      }}
                    />

                    <GridViewOutlinedIcon
                      onClick={() => {
                        setProductsGrid((prev) => ({
                          ...prev,
                          fourColumns: 3.75,
                          listView: false,
                          threeGridActive: true,
                          fourGridActive: false,
                          listActive: false,
                        }));
                      }}
                      sx={{
                        color: productsGrid.threeGridActive
                          ? "#099309"
                          : "#c1c7c6",
                        marginX: "10px",
                        "&:hover": {
                          color: "#099309",
                          cursor: "pointer",
                        },
                      }}
                    />

                    <GridOnOutlinedIcon
                      onClick={() => {
                        setProductsGrid((prev) => ({
                          ...prev,
                          fourColumns: 2.8,
                          listView: false,
                          fourGridActive: true,
                          listActive: false,
                          threeGridActive: false,
                        }));
                      }}
                      sx={{
                        color: productsGrid.fourGridActive
                          ? "#099309"
                          : "#c1c7c6",
                        "&:hover": {
                          color: "#099309",
                          cursor: "pointer",
                        },
                      }}
                    />
                  </div>

                  <Box
                    sx={{
                      display: { xs: "block", md: "block", lg: "none" },
                      marginLeft: "10px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#c1c7c6",
                        color: "#c1c7c6",
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        "&:hover": {
                          borderColor: "#099309",
                          backgroundColor: "#099309",
                          color: "#ffffff",
                        },
                      }}
                    >
                      <FilterAltOutlinedIcon
                        sx={{
                          marginRight: "4px",
                        }}
                      />
                      Filters
                    </Button>
                  </Box>
                </div>

                <div className="mt-4 md:mt-0">
                  <select
                    name="productFilter"
                    value={filterProductPerPage}
                    onChange={productPerPageFilterHandler}
                    className="w-36 border rounded-lg px-3 py-2.5 text-sm md:ml-3 hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                  >
                    {productPerPage?.map((item) => {
                      return (
                        <>
                          <option
                            value={item?.value}
                            className="text-xs md:text-base"
                          >
                            {item?.option}
                          </option>
                        </>
                      );
                    })}
                  </select>

                  <select
                    name="priceFilter"
                    value={filterPrice}
                    onChange={priceFilterHandler}
                    className="w-48 md:w-52 border rounded-lg px-3 py-2.5 text-sm ml-5 md:ml-3 hover:border-green-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-200"
                  >
                    {productPrice?.map((item) => {
                      return (
                        <>
                          <option
                            className="text-xs md:text-base"
                            value={item?.value}
                          >
                            {item?.option}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            {/* Products */}
            <Box className="mt-10">
              {!productsGrid.listView && (
                <Grid container gap={{ xs: 1.25, md: 2, lg: 2.5 }}>
                  {productsDataArr
                    ?.slice(13, filterProductPerPage)
                    ?.map((item) => {
                      return (
                        <Grid
                          items
                          xs={5.8}
                          sm={5.85}
                          md={productsGrid?.threeColumns}
                          lg={productsGrid?.fourColumns}
                        >
                          <div className="border rounded-lg py-4 px-3 hover:shadow-xl hover:border-green-500 container">
                            {/* <Link to={`/pages/product-detail/${item?.id}`}> */}
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
                                        <VisibilityOutlinedIcon
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
                                        <FavoriteBorderOutlinedIcon
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
                              <Tooltip
                                title={item?.productName}
                                placement="top"
                              >
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
                                  <span className="text-sm">
                                    ${item?.currentPrice}
                                  </span>
                                  <span className="line-through ml-2 text-sm text-gray-500">
                                    {item?.previousPrice &&
                                      `$${item?.previousPrice}`}
                                  </span>
                                </div>
                                <div>
                                  <Button
                                    variant="contained"
                                    onClick={()=>{dispatch(addCart(item))}}
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
                                      sx={{
                                        fontSize: "16px",
                                        marginRight: "2px",
                                      }}
                                    />
                                    Add
                                  </Button>
                                </div>
                              </div>
                            </div>
                            {/* </Link> */}
                          </div>
                        </Grid>
                      );
                    })}
                </Grid>
              )}

              {/* List Products */}
              {productsGrid.listView && (
                <Box className="mt-10">
                  {productsData?.slice(0, filterProductPerPage)?.map((item) => {
                    return (
                      <div className="border rounded-lg py-4 px-3 hover:shadow-xl hover:border-green-500 md:flex mb-4">
                        <div className="relative">
                          <div className="md:ml-8 sm:flex sm:justify-center">
                            <img src={item?.productImg} alt="app" />
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

                        <div className="ml-8 mt-4">
                          <h3 className="text-xs text-gray-500 cursor-pointer">
                            {item?.category}
                          </h3>
                          <h3 className="cursor-pointer hover:text-green-500">
                            {item?.productName}
                          </h3>

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

                          <div className="mt-4">
                            <span className="text-sm">
                              ${item?.currentPrice}
                            </span>
                            <span className="line-through ml-2 text-sm text-gray-500">
                              {item?.previousPrice && `$${item?.previousPrice}`}
                            </span>
                          </div>

                          <div className="my-4">
                            <Tooltip title="Quick View" placement="top" arrow>
                              <Link to={`/pages/product-detail/${item?.id}`}>
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
                                  }}
                                >
                                  <VisibilityOutlinedIcon
                                    sx={{ color: "#c1c7c6" }}
                                  />
                                </Button>
                              </Link>
                            </Tooltip>

                            <Tooltip title="Wishlist" placement="top" arrow>
                              {/* <Link to={`/pages/shop-wishlist/`}> */}
                                <Button
                                  variant="outlined"
                                  onClick={()=>{dispatch(addToWishList(item))}}
                                  size="small"
                                  sx={{
                                    paddingY: "8px",
                                    borderColor: "#c1c7c6",
                                    borderRadius: "8px",
                                    marginX: "5px",
                                    "&:hover": {
                                      borderColor: "#099309",
                                    },
                                  }}
                                >
                                  <FavoriteBorderOutlinedIcon
                                    sx={{ color: "#c1c7c6" }}
                                  />
                                </Button>
                              {/* </Link> */}
                            </Tooltip>

                            <Tooltip title="Compare" placement="top" arrow>
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
                                }}
                              >
                                <SyncAltOutlinedIcon
                                  sx={{ color: "#c1c7c6" }}
                                />
                              </Button>
                            </Tooltip>
                          </div>

                          <div>
                            <Button
                              variant="contained"
                              onClick={()=>{dispatch(addCart(item))}}
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
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ShopPage;
