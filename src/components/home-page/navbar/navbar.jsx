// React imports
import React, { useState } from "react";

// Mui imports
import { Box, Button, Grid, Menu, MenuItem } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Custom Imports
import {
  DocsItems,
  accountItems,
  allCategoryItems,
  megaMenuItems,
  pagesItems,
  shopItems,
  storeItems,
} from "./dummyData/nav-items";
import MenuItemImage from "../../../assets/images/banner/menu-banner.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClick = (event) => {
    setOpenCategoryMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenCategoryMenu(null);
  };

  // Handle Shop
  const [openShopMenu, setOpenShopMenu] = useState(false);

  const handleShopClick = (event) => {
    setOpenShopMenu(event.currentTarget);
  };
  const handleShopClose = () => {
    setOpenShopMenu(null);
  };

  // Handle Store
  const [openStoreMenu, setOpenStoreMenu] = useState(false);

  const handleStoreClick = (event) => {
    setOpenStoreMenu(event.currentTarget);
  };
  const handleStoreClose = () => {
    setOpenStoreMenu(null);
  };

  // Handle MegaMenu
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const handleMegaMenuClick = (event) => {
    setOpenMegaMenu(event.currentTarget);
  };
  const handleMegaMenuClose = () => {
    setOpenMegaMenu(null);
  };

  // Handle Pages

  const [openPages, setOpenPages] = useState(false);

  const handlePagesClick = (event) => {
    setOpenPages(event.currentTarget);
  };
  const handlePagesClose = () => {
    setOpenPages(null);
  };

  // Handle Account

  const [openAccount, setOpenAccount] = useState(false);

  const handleAccountClick = (event) => {
    setOpenAccount(event.currentTarget);
  };
  const handleAccountClose = () => {
    setOpenAccount(null);
  };

  // Handle Docs

  const [openDocs, setOpenDocs] = useState(false);

  const handleDocsClick = (event) => {
    setOpenDocs(event.currentTarget);
  };
  const handleDocsClose = () => {
    setOpenDocs(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <div className="px-10 my-2 flex">
          <Button
            id="demo-positioned-button"
            aria-controls={
              openCategoryMenu ? "demo-positioned-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={openCategoryMenu ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            sx={{
              backgroundColor: "#099309",
              "&:hover": {
                backgroundColor: "#099309",
              },
            }}
          >
            <FormatAlignLeftIcon sx={{ fontSize: "16px" }} />
            <span className="mx-2 capitalize">All Categories</span>
          </Button>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={openCategoryMenu}
            open={openCategoryMenu}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: 270,
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {allCategoryItems?.map((nav) => {
              return (
                <>
                  <MenuItem
                    // onClick={handleClose}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="flex">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                        fill="#3d4f58"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={nav?.path} fill-rule="evenodd"></path>
                      </svg>
                      <span className="pt-1 px-3">{nav?.label}</span>
                    </div>
                    <ChevronRightIcon sx={{ fontSize: "16px" }} />
                  </MenuItem>
                </>
              );
            })}
          </Menu>

          {/* Home Menu */}
          <div className="mx-2">
            <Button
              id="basic-button"
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "none",
                },
                textTransform: "capitalize",
              }}
            >
              <Link to={"/"}>Home</Link>
            </Button>
          </div>

          {/* Shop Menu */}
          <div>
            <Button
              id="basic-button"
              aria-controls={openShopMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openShopMenu ? "true" : undefined}
              onClick={handleShopClick}
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "none",
                },
                textTransform: "capitalize",
              }}
            >
              Shop
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={openShopMenu}
              open={openShopMenu}
              onClose={handleShopClose}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {shopItems?.map((shopNav) => {
                return (
                  <>
                    <MenuItem onClick={handleShopClose}>
                      <Link to={shopNav?.path}>{shopNav?.item}</Link>
                    </MenuItem>
                  </>
                );
              })}
            </Menu>
          </div>

          {/* Store Menu */}
          <div className="mx-2">
            <Button
              id="basic-button"
              aria-controls={openStoreMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openStoreMenu ? "true" : undefined}
              onClick={handleStoreClick}
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "none",
                },
                textTransform: "capitalize",
              }}
            >
              Stores
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={openStoreMenu}
              open={openStoreMenu}
              onClose={handleStoreClose}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {storeItems?.map((storeNav) => {
                return (
                  <>
                    <MenuItem onClick={handleStoreClose}>
                      <Link to={storeNav?.path}>{storeNav?.item}</Link>
                    </MenuItem>
                  </>
                );
              })}
            </Menu>
          </div>

          {/* Mega Menu */}
          <div>
            <Button
              id="basic-button"
              aria-controls={openMegaMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMegaMenu ? "true" : undefined}
              onClick={handleMegaMenuClick}
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "none",
                },
                textTransform: "capitalize",
              }}
            >
              Mega Menu
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={openMegaMenu}
              open={openMegaMenu}
              onClose={handleMegaMenuClose}
              PaperProps={{
                style: {
                  width: "100%",
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Grid container className="mt-4">
                <Grid item xs={12} lg={3} className="px-5">
                  <h1 className="text-green font-bold mb-2 px-2">
                    {megaMenuItems?.Dairy_Bread_Eggs?.label}
                  </h1>

                  {megaMenuItems?.Dairy_Bread_Eggs?.list_items?.map((item) => {
                    return (
                      <>
                        <h3 className="mb-1 hover:bg-gray-100 py-1 px-2 rounded-lg cursor-pointer">
                          {item?.item}
                        </h3>
                      </>
                    );
                  })}
                </Grid>
                <Grid item xs={3} className="px-5">
                  <h1 className="text-green font-bold mb-2 px-2">
                    {megaMenuItems?.Breakfast_Instant_Food?.label}
                  </h1>

                  {megaMenuItems?.Breakfast_Instant_Food?.list_items?.map(
                    (item) => {
                      return (
                        <>
                          <h3 className="mb-1 hover:bg-gray-100 py-1 px-2 rounded-lg cursor-pointer">
                            {item?.item}
                          </h3>
                        </>
                      );
                    }
                  )}
                </Grid>
                <Grid item xs={3} className="px-5">
                  <h1 className="text-green font-bold mb-2 px-2">
                    {megaMenuItems?.Cold_Drinks_Juices?.label}
                  </h1>

                  {megaMenuItems?.Cold_Drinks_Juices?.list_items?.map(
                    (item) => {
                      return (
                        <>
                          <h3 className="mb-1 hover:bg-gray-100 py-1 px-2 rounded-lg cursor-pointer">
                            {item?.item}
                          </h3>
                        </>
                      );
                    }
                  )}
                </Grid>
                <Grid item xs={3} className="px-5">
                  <div className="relative">
                    <img src={MenuItemImage} alt="Menu Banner" />
                  </div>
                  <div className="absolute top-10 right-44">
                    <h3 className="text-md font-bold">
                      Don't miss this <br /> offer today.
                    </h3>
                    <Button
                      variant="contained"
                      sx={{
                        color: "#ffffff",
                        backgroundColor: "#099309",
                        "&:hover": {
                          backgroundColor: "#099309",
                        },
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        marginTop: "10px",
                      }}
                    >
                      Shop Now
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Menu>
          </div>

          {/* Pages Menu */}
          <div className="mx-2">
            <Button
              id="basic-button"
              aria-controls={openPages ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openPages ? "true" : undefined}
              onClick={handlePagesClick}
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "none",
                },
                textTransform: "capitalize",
              }}
            >
              Pages
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={openPages}
              open={openPages}
              onClose={handlePagesClose}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {pagesItems?.map((item) => {
                return (
                  <>
                    <MenuItem onClick={handlePagesClose}>
                      <Link to={item?.path}>{item?.item}</Link>
                    </MenuItem>
                  </>
                );
              })}
            </Menu>
          </div>

          {/* Account */}
          <div>
            <Button
              id="basic-button"
              aria-controls={openAccount ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openAccount ? "true" : undefined}
              onClick={handleAccountClick}
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "none",
                },
                textTransform: "capitalize",
              }}
            >
              Account
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={openAccount}
              open={openAccount}
              onClose={handleAccountClose}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {accountItems?.map((AccountNav) => {
                return (
                  <>
                    <MenuItem onClick={handleAccountClose}>
                      <Link to={AccountNav.path}>{AccountNav.item}</Link>
                    </MenuItem>
                  </>
                );
              })}
            </Menu>
          </div>

          {/* Docs Menu */}
          <div className="mx-2">
            <Button
              id="basic-button"
              aria-controls={openDocs ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openDocs ? "true" : undefined}
              onClick={handleDocsClick}
              sx={{
                color: "#000000",
                "&:hover": {
                  backgroundColor: "none",
                },
                textTransform: "capitalize",
              }}
            >
              Docs
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={openDocs}
              open={openDocs}
              onClose={handleDocsClose}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {DocsItems?.map((docsNav) => {
                return (
                  <>
                    <MenuItem
                    // onClick={handleClose}
                    >
                      <div className="flex">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 16 16"
                          fill="#0DAE0C"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={docsNav?.path1} fill-rule="evenodd"></path>
                          <path d={docsNav?.path2} fill-rule="evenodd"></path>
                        </svg>
                        <span className=" px-3">{docsNav?.options}</span>
                      </div>
                    </MenuItem>
                  </>
                );
              })}
            </Menu>
          </div>
        </div>
      </Box>
    </>
  );
};

export default NavBar;
