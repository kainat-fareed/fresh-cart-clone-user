// React import
import React from "react";

// Mui imports
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Divider, Grid, List, ListItem } from "@mui/material";

// Custom imports
import AmazonPay from "../../../assets/images/payment/amazonpay.svg";
import AmericanExp from "../../../assets/images/payment/american-express.svg";
import MasterCard from "../../../assets/images/payment/mastercard.svg";
import Paypal from "../../../assets/images/payment/paypal.svg";
import Visa from "../../../assets/images/payment/visa.svg";
import GooglePlayBtn from "../../../assets/images/googleplay-btn.svg";
import AppleStoreBtn from "../../../assets/images/appstore-btn.svg";

const ShopFooter = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#F0F3F2" }} className="p-10 mt-10">
        <Grid container gap={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={12} md={4.4} lg={4.4}>
            <h1 className="ml-4 font-bold">Categories</h1>
            <Grid container>
              <Grid item xs={12} md={6}>
                <List className="text-gray-600">
                  <ListItem>Vegetables & Fruits</ListItem>
                  <ListItem>Breakfast & instant food</ListItem>
                  <ListItem>Bakery & Biscuits</ListItem>
                  <ListItem>Atta, rice & dal</ListItem>
                  <ListItem>Sauces & spreads</ListItem>
                  <ListItem>Organic & gourmet</ListItem>
                  <ListItem>Baby care</ListItem>
                  <ListItem>Cleaning essentials</ListItem>
                  <ListItem>Personal care</ListItem>
                </List>
              </Grid>

              <Grid item xs={12} md={6}>
                <List className="text-gray-600">
                  <ListItem>Dairy, bread & eggs</ListItem>
                  <ListItem>Cold drinks & juices</ListItem>
                  <ListItem>Tea, coffee & drinks</ListItem>
                  <ListItem>Masala, oil & more</ListItem>
                  <ListItem>Chicken, meat & fish</ListItem>
                  <ListItem>Paan corner</ListItem>
                  <ListItem>Pharma & wellness</ListItem>
                  <ListItem>Home & office</ListItem>
                  <ListItem>Pet care</ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={1.6}>
            <h1 className="ml-4 font-bold">Get to know us</h1>
            <List className="text-gray-600">
              <ListItem>Company</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Help Center</ListItem>
              <ListItem>Our Value</ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={1.6}>
            <h1 className="ml-4 font-bold">For Consumers</h1>
            <List className="text-gray-600">
              <ListItem>Payment</ListItem>
              <ListItem>Shipping</ListItem>
              <ListItem>Product Returns</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Shop Chekout</ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={2}>
            <h1 className="ml-4 font-bold">Become a Shopper</h1>
            <List className="text-gray-600">
              <ListItem>Shopper Oppertunities</ListItem>
              <ListItem>Become a Shopper</ListItem>
              <ListItem>Earnings</ListItem>
              <ListItem>Ideas & Guides</ListItem>
              <ListItem>New Retailers</ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={2}>
            <h1 className="ml-4 font-bold">Freshcart Programs</h1>
            <List className="text-gray-600">
              <ListItem>Freshcart Programs</ListItem>
              <ListItem>Gift Cards</ListItem>
              <ListItem>Promos & Coupons</ListItem>
              <ListItem>Freshcard Ads</ListItem>
              <ListItem>Careers</ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "#ffffff",
            opacity: 0.5,
            marginY: "20px",
          }}
        />

        <div className="flex justify-between items-center">
          <div className="hidden lg:flex items-center">
            <h3 className="text-sm">Payment Partners</h3>
            <img
              className="mx-2 hover:cursor-pointer"
              src={AmazonPay}
              alt="Amazon Pay"
            />
            <img
              className="hover:cursor-pointer"
              src={AmericanExp}
              alt="American Express"
            />
            <img
              className="mx-2 hover:cursor-pointer"
              src={MasterCard}
              alt="Master Card"
            />
            <img className="hover:cursor-pointer" src={Paypal} alt="Paypal" />
            <img className="mx-2 hover:cursor-pointer" src={Visa} alt="Visa" />
          </div>
          <div className="flex items-center justify-center sm:w-full lg:w-auto">
            <h1 className="text-sm">Get deliveries with FreshCart</h1>
            <img className="mx-3" src={AppleStoreBtn} alt="App store app" />
            <img src={GooglePlayBtn} alt="Google play app" />
          </div>
        </div>
        <Divider
          sx={{
            backgroundColor: "#ffffff",
            opacity: 0.5,
            marginY: "20px",
          }}
        />
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            © 2022 - 2024 FreshCart eCommerce HTML Template. All rights
            reserved. Powered by
            <span className="text-green hover:cursor-pointer">Codescandy</span>.
          </p>
          <div className="flex">
            <span className="text-sm mr-2">Follow us on</span>
            <FacebookIcon
              sx={{
                "&:hover": {
                  color: "#099309",
                  cursor: "pointer",
                },
              }}
            />
            <TwitterIcon
              sx={{
                marginX: "5px",
                "&:hover": {
                  color: "#099309",
                  cursor: "pointer",
                },
              }}
            />
            <InstagramIcon
              sx={{
                "&:hover": {
                  color: "#099309",
                  cursor: "pointer",
                },
              }}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default ShopFooter;
