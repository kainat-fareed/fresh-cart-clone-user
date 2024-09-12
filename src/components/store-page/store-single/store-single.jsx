// React imports
import React, { useState } from "react";

// Mui Imports
import {
  Avatar,
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Rating,
  Typography,
  Button,
  Chip,
  Tooltip,
  TextField,
  ButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

// React DOM Imports
import { Link } from "react-router-dom";

// Custom Imports
import StoreLogo from "../../../assets/images/stores-logo/store-graphics.svg";
import {
  ProductListArr,
  StoreData,
  listArr,
} from "./dummyData/single-store-data";
import { productsData } from "../../shop-page/shop-main-page/dummyData/shop-products-data";
import {
  productPerPage,
  productPrice,
} from "../../shop-page/shop-main-page/dummyData/side-bar-nav-items";

const StoreSingle = () => {
    
  const BreadCrumbHandleClick = (event) => {
    event.preventDefault();
    //   console.info("You clicked a breadcrumb.");
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [filterProductPerPage, setFilterProductPerPage] = useState("20");
  const [filterPrice, setFilterPrice] = useState("");
  const [productsDataArr, setProductsDataArr] = useState(productsData);
  const [productsGrid, setProductsGrid] = useState({
    threeColumns: 3.75,
    fourColumns: 2.8,
    listView: false,
    listActive: false,
    threeGridActive: false,
    fourGridActive: true,
  });

  const handleListClick = (index) => {
    setActiveIndex(index);
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
              to={"/pages/store"}
              underline="hover"
              color="inherit"
              className="text-sm font-medium text-green-500 hover:text-green-600 hover:font-bold"
            >
              Store
            </Link>
            <Typography sx={{ fontSize: "14px" }}>Store Grid</Typography>
          </Breadcrumbs>
        </div>

        <Grid container gap={2}>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{ display: { xs: "block", lg: "block" } }}
          >
            {StoreData?.map((item) => {
              return (
                <div>
                  <Avatar
                    alt="Store images"
                    src={item?.avatar}
                    sx={{
                      width: 65,
                      height: 65,
                    }}
                  />
                  <h1 className="text-lg font-bold text-gray-800 mt-3">
                    {item?.martName}
                  </h1>
                  <p className="text-xs text-gray-500">{item?.store}</p>
                  <p className="text-xs text-green-500 mt-1.5">
                    {item?.guarantee}
                  </p>
                  <div className="my-3 flex items-center">
                    <Rating
                      name="read-only"
                      value={item?.ratingValue}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="mx-2 text-sm text-gray-700">
                      {item?.ratingNumber}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({item?.reviews} <span className="ms-1">Reviews</span>)
                    </span>
                  </div>
                </div>
              );
            })}
            <Divider sx={{ marginY: "10px" }} />

            <Box
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <List>
                {listArr?.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      disablePadding
                      size="small"
                      sx={{ marginBottom: "5px" }}
                    >
                      <ListItemButton
                        sx={{
                          borderRadius: "8px",
                          padding: "4px 10px",
                          backgroundColor:
                            activeIndex === index ? "#001e2b" : "transparent",
                          "&:hover": {
                            backgroundColor: "#c1c7c6",
                          },
                        }}
                        onClick={() => handleListClick(index)}
                      >
                        <ListItemIcon
                          sx={{
                            fontSize: "12px",
                            color: activeIndex === index ? "#fff" : "#21313c",
                          }}
                        >
                          {item?.icon}
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            fontSize: "12px",
                            color: activeIndex === index ? "#fff" : "#21313c",
                          }}
                          primary={item?.label}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Divider sx={{ marginY: "10px" }} />
            <div className="mt-5">
              {ProductListArr?.map((list) => {
                return (
                  <h3 className="text-sm font-medium text-gray-800 hover:text-green-500 hover:cursor-pointer my-2">
                    {list?.item}
                  </h3>
                );
              })}
            </div>
          </Grid>

          <Grid item xs={12} md={12} lg={8.84}>
            <Grid container gap={2} className="bg-gray-100 flex justify-between items-center px-6 md:px-10 rounded-lg py-6">
              <Grid item xs={12} lg={4.8}>
                <div>
                  <h1 className="font-bold text-xl text-gray-800">
                    E-Grocery Super Market
                  </h1>
                  <p className="text-md text-gray-500 mb-4">
                    Whatever the occasion, we've got you covered.
                  </p>

                  <TextField
                    type="search"
                    name="search"
                    size="small"
                    fullWidth
                    placeholder="Search E-Grocery Super Market"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      display: { xs: "flex" },
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
                    className="relative"
                  />

                  <ButtonGroup
                    variant="search"
                    aria-label="Basic button group"
                    sx={{ display: { xs: "none", lg: "flex" } }}
                    className="absolute left-1/2 bottom-1/3"
                  >
                    <Button>
                      <SearchIcon color="action" />
                    </Button>
                  </ButtonGroup>
                </div>
              </Grid>
              <Grid item xs={12} lg={6.8}>
                <img src={StoreLogo} alt="Store graphics" />
              </Grid>
            </Grid>

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
                          threeColumns: 3.75,
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
                    ?.slice(0, filterProductPerPage)
                    ?.map((item) => {
                      return (
                        <Grid
                          items
                          xs={5.8}
                          sm={5.85}
                          md={productsGrid?.threeColumns}
                          lg={productsGrid?.fourColumns}
                        >
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
                          </div>
                        </Grid>
                      );
                    })}
                </Grid>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StoreSingle;
