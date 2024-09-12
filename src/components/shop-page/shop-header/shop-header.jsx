// React Imports
import React, { useState } from "react";

// Mui Imports
import {
  Badge,
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
  Drawer,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItem,
  Popover,
  Typography,
  IconButton,
  Snackbar,
  FormControl,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Visibility from "@mui/icons-material/Visibility";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

// Yup Validation imports
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Custom Imports
import LogoFreshCart from "../../../assets/images/freshcart-logo.svg";
import { navLinks } from "../../home-page/header-section/dummyData/header-sideNav-links";
import { Link } from "react-router-dom";
import {
  inputBorder,
  inputBorderDefault,
} from "../checkout/style/checkout-style";
import { shopCartArr } from "../shop-cart/dummyData/shop-cart-data";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../store/slices/addCartSlice";
import { removeFromWishList } from "../../../store/slices/wishListSlice";

const ShopHeader = () => {
  const { quantity, cartProducts } = useSelector((state) => state.addCart);
  const { wishlistArr } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  console.log(cartProducts, "cartProducts");
  // console.log(wishlistArr, "wishlistArr");

  // SignUp Schema for contact popover
  const signUpSchema = yup
    .object()
    .shape({
      name: yup
        .string()
        .min(2, "Too Short!")
        .max(10, "Too Long!")
        .required("Required"),
      email: yup
        .string("Enter your email")
        .email("Invalid email")
        .required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must contain at least 8 character")
        .max(20, "Password should be less then or equal 20 words")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .matches(/^\S*$/, "White Spaces are not allowed"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const [openSnackBar, setOpenSnackbar] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    setOpenSnackbar(true);
    if (!errors) {
    }
  };

  console.log(errors, "errors");

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setOpenSnackbar(false)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Menu List items
  const [listOpen, setListOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState();

  const handleClick = (label) => {
    setListOpen(!listOpen);
    setOpenCollapse(label);
    console.log(label);
  };

  // Shop Cart menu Drawer

  const [openCartMenu, setOpenCartMenu] = useState(false);

  const toggleCartDrawer = (newOpen) => () => {
    setOpenCartMenu(newOpen);
  };

  // Popover contact sign-up form
  const [contactSignUp, setcontactSignUp] = useState(false);

  const handleContactClick = (event) => {
    setcontactSignUp(event.currentTarget);
  };

  const handleContactClose = () => {
    setcontactSignUp(false);
  };

  const openSignUp = Boolean(contactSignUp);
  const id = openSignUp ? "simple-popover" : undefined;

  return (
    <>
      <Box className="px-10 pt-10">
        <Snackbar
          open={openSnackBar}
          action={action}
          onClose={() => setOpenSnackbar(false)}
          autoHideDuration={3000}
          message="Email Registered Successfully"
          ContentProps={{
            sx: {
              background: "#099309",
            },
          }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        />
      </Box>

      <Box className="px-4 md:px-10 mb-4" sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Box className="flex w-full">
            <img src={LogoFreshCart} alt="Fresh Cart Logo" />

            <TextField
              type="text"
              name="search"
              size="small"
              placeholder=" Search for products"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <SearchIcon sx={{ cursor: "pointer" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                display: { xs: "none", lg: "flex" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontFamily: "",
                  fontSize: "14px",
                  "&.Mui-hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "none",
                    },
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#099309",
                      borderWidth: "2px",
                    },
                  },
                },
                marginLeft: "20px",
                width: "450px",
              }}
            />
            <Button
              variant="outlined"
              sx={{
                fontSize: "14px",
                color: "#5c6c75",
                fontWeight: "bold",
                textTransform: "capitalize",
                borderColor: "#C1C7C6",
                borderRadius: "8px",
                "&:hover": {
                  borderColor: "#C1C7C6",
                  backgroundColor: "#C1C7C6",
                },
                marginLeft: "5px",
                display: { xs: "none", lg: "flex" },
              }}
            >
              <PlaceOutlinedIcon
                sx={{ fontSize: "16px", marginRight: "5px" }}
              />
              Location
            </Button>
          </Box>
          <Box className="flex w-36">
            <Badge
              badgeContent={wishlistArr?.length}
              color="success"
              sx={{ cursor: "pointer" }}
            >
              <Link to="/pages/shop-wishlist">
                <FavoriteBorderIcon color="action" />
              </Link>
            </Badge>

            <PersonOutlineIcon
              color="action"
              onClick={handleContactClick}
              sx={{ marginX: "15px", cursor: "pointer" }}
            />

            <Popover
              id={id}
              open={openSignUp}
              anchorEl={contactSignUp}
              // onClose={handleContactClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 300, left: 720 }}
              anchorOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
            >
              <div className="w-full me-4 px-8 my-8">
                <div className="flex justify-between mb-8">
                  <Typography sx={{ fontWeight: "bold", fontSize: "23px" }}>
                    Sign Up
                  </Typography>
                  <CloseIcon
                    sx={{ fontSize: "20px" }}
                    onClick={handleContactClose}
                    className="fw-bold ml-5 hover:text-red-500"
                  />
                </div>

                <form
                  onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                  })}
                >
                  <div>
                    <label className="font-bold inline-block mb-2">Name</label>
                    <FormControl fullWidth>
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                          return (
                            <TextField
                              label="Name"
                              placeholder="Enter your name"
                              size="small"
                              value={value}
                              onChange={onChange}
                              sx={
                                !errors?.name?.message
                                  ? inputBorderDefault
                                  : inputBorder
                              }
                            />
                          );
                        }}
                      />
                      <div className="text-red-500 my-2 text-sm">
                        {errors?.name?.message}
                      </div>
                    </FormControl>
                  </div>
                  <div>
                    <label className="font-bold inline-block mb-2">
                      Email address
                    </label>
                    <FormControl fullWidth>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                          return (
                            <TextField
                              label="Email"
                              placeholder="Enter Your Email"
                              size="small"
                              value={value}
                              onChange={onChange}
                              sx={
                                !errors?.email?.message
                                  ? inputBorderDefault
                                  : inputBorder
                              }
                            />
                          );
                        }}
                      />
                      <div className="text-red-500 my-2 text-sm">
                        {errors?.email?.message}
                      </div>
                    </FormControl>
                  </div>

                  <div>
                    <label className="font-bold inline-block mb-2">
                      Password
                    </label>
                    <FormControl fullWidth>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                          return (
                            <TextField
                              label="Password"
                              placeholder="Enter your password"
                              size="small"
                              value={value}
                              onChange={onChange}
                              sx={
                                !errors?.password?.message
                                  ? inputBorderDefault
                                  : inputBorder
                              }
                              type={`${
                                showPassword?.password ? "text" : "password"
                              }`}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      "&:hover": {
                                        cursor: "pointer",
                                      },
                                    }}
                                  >
                                    <div
                                      aria-label="toggle password visibility"
                                      onClick={() => {
                                        setShowPassword({
                                          ...showPassword,
                                          password: !showPassword?.password,
                                        });
                                      }}
                                      edge="end"
                                    >
                                      {showPassword?.password ? (
                                        <VisibilityOff color="disabled" />
                                      ) : (
                                        <Visibility color="disabled" />
                                      )}
                                    </div>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          );
                        }}
                      />
                      <div className="text-red-500 mt-2 text-sm">
                        {errors?.password?.message}
                      </div>
                    </FormControl>
                  </div>
                  <p className="text-xs text-gray-500">
                    By Signup, you agree to our
                    <span className="text-green-500 cursor-pointer mx-1">
                      Terms of Service
                    </span>
                    &
                    <span className="text-green-500 cursor-pointer mx-1">
                      Privacy Policy
                    </span>
                  </p>
                  <Button
                    disabled={!isDirty}
                    variant="contained"
                    sx={{
                      backgroundColor: "#099309",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      "&:hover": {
                        backgroundColor: "#099309",
                      },

                      marginY: "15px",
                    }}
                    type="submit"
                  >
                    Sign Up
                  </Button>

                  <p className="text-sm text-center mt-4">
                    Already have an account?
                    <Link to="/auth/sign-in">
                      <span className="text-green-500 mx-1 hover:cursor-pointer">
                        Sign in
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </Popover>

            <Badge
              badgeContent={cartProducts.length}
              color="success"
              sx={{ cursor: "pointer" }}
            >
              <LocalMallOutlinedIcon
                color="action"
                onClick={toggleCartDrawer(true)}
              />
            </Badge>
          </Box>
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <MenuOpenIcon
              sx={{ fontSize: "30px", marginLeft: "15px" }}
              onClick={toggleDrawer(true)}
              className="text-green"
            />
          </Box>
        </Toolbar>
      </Box>

      <Box>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: { xs: "360px", md: "480px" } }} role="presentation">
            <div className="flex justify-between items-center	px-5 my-5">
              <img src={LogoFreshCart} alt="Fresh Cart Logo" />
              <CloseIcon
                sx={{ fontSize: "20px" }}
                onClick={toggleDrawer(false)}
                className="fw-bold ml-5 hover:text-red-500"
              />
            </div>
            <div className="mx-2">
              <input
                type="search"
                name="search"
                id=""
                placeholder="Search for projects"
                className="border w-full p-2 relative rounded-lg"
              />
              <SearchIcon className="absolute right-5 top-20" />
            </div>

            <div className="mx-2 mt-2">
              <input
                type="choose"
                name="location"
                id=""
                placeholder="Pick Location"
                className="border w-full p-2 relative text-center rounded-lg"
              />
              <PlaceOutlinedIcon
                sx={{ fontSize: "20px" }}
                className="absolute left-40 top-32"
              />
            </div>

            <List>
              <ListItemButton>
                <ListItemText className="mx-2" primary="Home" />
              </ListItemButton>

              {navLinks.map((item) => (
                <>
                  <ListItem>
                    <ListItemButton
                      onClick={() => handleClick(item.label, console.log(item))}
                    >
                      <ListItemText primary={item.label} />
                      {item.label === openCollapse ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                  </ListItem>

                  <Collapse
                    in={item.label === openCollapse ? true : false}
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
                              <ListItemText primary={value} />
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
          </Box>
        </Drawer>
      </Box>

      {/* Cart Drawer */}
      <Box>
        <Drawer
          anchor="right"
          open={openCartMenu}
          onClose={toggleCartDrawer(false)}
        >
          <Box
            sx={{ width: { xs: "400px", sm: "450", md: "560px" } }}
            role="presentation"
          >
            <div className="px-5 my-3">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl text-gray-800 font-medium">
                  Shop Cart
                </h1>
                <CloseIcon
                  sx={{ fontSize: "20px" }}
                  onClick={toggleCartDrawer(false)}
                  className="fw-bold ml-5 hover:text-red-500"
                />
              </div>
              <p className="text-sm text-gray-500">Location in 382480</p>
            </div>
            <Divider />
            <div className="px-5">
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <div className="p-2 border border-red-300 bg-red-100 rounded-md my-4">
                    <h1 className="text-sm text-red-900">
                      You’ve got FREE delivery. Start
                      <span className="font-bold ml-1">checkout now!</span>
                    </h1>
                  </div>
                  <Divider sx={{ marginTop: "20px" }} />
                </Grid>
              </Grid>
            </div>
            <>
              {cartProducts.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#0aad0a",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "10px 30px",
                      "&:hover": {
                        backgroundColor: "#0aad0a",
                        color: "#fff",
                      },
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Your cart is empty
                  </Button>
                </div>
              ) : (
                <>
                  {cartProducts?.map((item) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item xs={5} md={6} lg={6}>
                            <div className="flex items-center">
                              <img
                                className="w-24"
                                src={item?.productImg}
                                alt="Products"
                              />
                              <div>
                                <h1 className="text-sm text-gray-800 font-semibold">
                                  {item?.productName}
                                </h1>
                                <span className="text-xs text-gray-500">
                                  {item?.weight}
                                </span>
                                <div className="flex items-center cursor-pointer mt-2">
                                  <DeleteOutlineIcon
                                     onClick={() => {
                                      dispatch(removeFromCart(item?.id));
                                    }}
                                    sx={{ fontSize: "16px", color: "#198754" }}
                                  />
                                  <span className="text-xs text-gray-500 ml-2">
                                    Remove
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={4.5} md={3} lg={3}>
                            <div className=" h-full flex items-center">
                              <Button
                                onClick={() =>
                                  dispatch(decreaseQuantity(item.id))
                                }
                                variant="outlined"
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
                                onClick={() =>
                                  dispatch(increaseQuantity(item.id))
                                }
                                variant="outlined"
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
                          </Grid>
                          <Grid item xs={2} md={2.8} lg={2.8}>
                            <div className="flex h-full justify-end items-center">
                              <div className="flex flex-col">
                                <span
                                  className="text-sm font-bold"
                                  style={
                                    item?.currentPrice >= 20
                                      ? { color: "red" }
                                      : {}
                                  }
                                >
                                  ${item?.currentPrice}
                                </span>
                                {item?.previousPrice && (
                                  <span className="text-xs text-gray-500 line-through text-end">
                                    ${item?.previousPrice}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                        <Divider />
                      </>
                    );
                  })}
                </>
              )}
            </>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default ShopHeader;
