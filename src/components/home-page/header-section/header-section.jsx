// React Imports
import React, { useState } from "react";

// MUI Imports
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Divider,
  Drawer,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// Custom Imports
import { navLinks } from "./dummyData/header-sideNav-links";
import LogoFreshCart from "../../../assets/images/freshcart-logo.svg";
import DeliveryBoyImage from "../../../assets/images/stores-logo/delivery-boy.svg";
import { Link } from "react-router-dom";

const HeaderSection = () => {
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

  // popover location
  const [location, setLocation] = useState(null);

  const handleLocationClick = (event) => {
    setLocation(event.currentTarget);
  };

  const handleLocationClose = () => {
    setLocation(null);
  };

  const openLoc = Boolean(location);
  const id = openLoc ? "simple-popover" : undefined;

  // popover Register
  const [register, setRegister] = useState(null);

  const handleRegClick = (event) => {
    setRegister(event.currentTarget);
  };

  const handleRegClose = () => {
    setRegister(null);
  };

  const openReg = Boolean(register);
  const idx = openReg ? "simple-popover" : undefined;

  return (
    <>
      <Box className="px-10 mb-4" sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Box className="flex w-full">
            <img src={LogoFreshCart} alt="Fresh Cart Logo" />

            <TextField
              type="search"
              name="search"
              size="small"
              fullWidth
              placeholder="Search for area, location more"
              sx={{
                display: { xs: "none", lg: "flex" },
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
                marginLeft: "10px",
              }}
              className="relative"
            />

            <ButtonGroup
              variant="search"
              aria-label="Basic button group"
              sx={{ display: { xs: "none", lg: "flex" }}}
              className="absolute right-1/2 mt-0.5"
            >
              <Button>
                <SearchIcon color="action" />
              </Button>
            </ButtonGroup>
          </Box>

          <Box className=" w-full flex justify-end items-center">
            <div>
              <Box
                sx={{ display: { xs: "none", sm: "flex" } }}
                className="mx-5 flex items-center text-gray-500 hover:text-green-500 text-sm cursor-pointer ff-inter "
                onClick={handleLocationClick}
              >
                <PlaceOutlinedIcon sx={{ fontSize: "20px", mr: "8px" }} />
                Set A Location
              </Box>

              <Popover
                id={id}
                open={openLoc}
                anchorEl={location}
                onClose={handleLocationClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 70, left: 950 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                PaperProps={{
                  style: { width: "400px" },
                }}
              >
                <div className="flex justify-between m-5">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Add Your Location
                  </Typography>
                  <CloseIcon
                    sx={{ fontSize: "20px" }}
                    onClick={handleLocationClose}
                    className="hover:text-red-500"
                  />
                </div>
                <div className="mx-2">
                  <TextField
                    type="search"
                    name="search"
                    size="small"
                    fullWidth
                    placeholder="Search for area, location more"
                    sx={{
                      display: { xs: "none", lg: "flex" },
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
                  <Divider orientation="vertical" flexItem />
                  <ButtonGroup
                    variant="text"
                    aria-label="Basic button group"
                    className="absolute top-16 right-2 mt-0.5"
                  >
                    <Button>
                      <SearchIcon color="action" />
                    </Button>
                  </ButtonGroup>
                </div>
                <img
                  src={DeliveryBoyImage}
                  alt="Delivery Boy"
                  className="my-10"
                />
              </Popover>
            </div>

            <>
              <Box
                sx={{ display: { xs: "none", lg: "flex" } }}
                className="text-gray-500 hover:text-green-500 text-sm cursor-pointer"
                onClick={handleRegClick}
              >
                Register
              </Box>
              <Popover
                id={idx}
                open={openReg}
                anchorEl={register}
                onClose={handleRegClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 70, left: 900 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                PaperProps={{
                  style: { width: "400px" },
                }}
              >
                <div className="flex justify-between m-5">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Register via Phone Number
                  </Typography>
                  <CloseIcon
                    sx={{ fontSize: "20px" }}
                    onClick={handleRegClose}
                    className="hover:text-red-500"
                  />
                </div>
                <div className="bg-slate-100 px-10 py-5">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      marginBottom: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Enter your phone number to Signup or Register
                  </Typography>

                  <TextField
                    type="tel"
                    name="number"
                    size="small"
                    fullWidth
                    sx={{
                      display: { xs: "none", lg: "flex" },
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment>
                          <SmartphoneIcon />
                          +91-
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div className="my-2">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#099309",
                        padding: "8px 0px",
                        "&:hover": {
                          backgroundColor: "#099309",
                        },
                      }}
                      className="rounded-lg w-full"
                    >
                      Next
                    </Button>
                  </div>
                  <div className="mt-3">
                    <span className="text-green text-xs font-bold cursor-pointer">
                      Terms of Service
                    </span>
                    <span className="text-green text-xs font-bold cursor-pointer mx-2">
                      Privacy Policy
                    </span>
                  </div>
                </div>
              </Popover>
            </>

            <Box className="mx-5 flex items-center text-gray-500 hover:text-green-500 text-sm cursor-pointer">
              <ShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
              $0.00
              <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "20px" }} />
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000000",
                "&:hover": {
                  backgroundColor: "#000000",
                },
                display: { xs: "none", lg: "flex" },
                borderRadius: "8px",
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: "8px 17px"
              }}
            >
              <Link to="/auth/sign-in"> Sign In </Link>
            </Button>

            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <MenuOpenIcon
                sx={{ fontSize: "30px" }}
                onClick={toggleDrawer(true)}
                className="text-green"
              />
            </Box>
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
                className="border w-full p-2 rounded-lg"
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
    </>
  );
};

export default HeaderSection;
