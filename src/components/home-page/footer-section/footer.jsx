// React import
import React from "react";

// Mui imports
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Divider, Grid, List, ListItem } from "@mui/material";

// Custom imports
import Logo from "../../../assets/images/freshcart-white-logo.svg";
import AmazonPay from "../../../assets/images/payment/amazonpay.svg";
import AmericanExp from "../../../assets/images/payment/american-express.svg";
import MasterCard from "../../../assets/images/payment/mastercard.svg";
import Paypal from "../../../assets/images/payment/paypal.svg";
import Visa from "../../../assets/images/payment/visa.svg";

const Footer = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#001E2B" }} className="p-10">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="log" />
          <div>
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
        <Divider
          sx={{
            backgroundColor: "#ffffff",
            opacity: 0.5,
            marginY: "30px",
          }}
        />

        <Grid container gap={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={12} md={4.5} lg={4.4}>
            <h1 className="ml-4 font-bold text-white">Categories</h1>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
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

              <Grid item xs={12} sm={6} md={6}>
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

          <Grid item xs={12} md={1.7}>
            <h1 className="ml-4 font-bold text-white">Get to know us</h1>
            <List className="text-gray-600">
              <ListItem>Company</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Help Center</ListItem>
              <ListItem>Our Value</ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={1.7}>
            <h1 className="ml-4 font-bold text-white">For Consumers</h1>
            <List className="text-gray-600">
              <ListItem>Payment</ListItem>
              <ListItem>Shipping</ListItem>
              <ListItem>Product Returns</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Shop Chekout</ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={1.8}>
            <h1 className="ml-4 font-bold text-white">Become a Shopper</h1>
            <List className="text-gray-600">
              <ListItem>Shopper Oppertunities</ListItem>
              <ListItem>Become a Shopper</ListItem>
              <ListItem>Earnings</ListItem>
              <ListItem>Ideas & Guides</ListItem>
              <ListItem>New Retailers</ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={1.8}>
            <h1 className="ml-4 font-bold text-white">Freshcart Programs</h1>
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
            marginY: "30px",
          }}
        />

        <Grid container className="flex items-center">
          <Grid item xs={12} md={12} lg={8.5} className="flex justify-sm-center">
            <p className="text-gray-600 text-xs">
              © 2022 - 2024 FreshCart eCommerce HTML Template. All rights
              reserved. Powered by
              <span className="text-green hover:cursor-pointer ms-1">
                Codescandy
              </span>
              .
            </p>
          </Grid>
          <Grid item xs={12} md={12} lg={3.5} className="flex justify-center">
            <div className="flex items-center">
              <h3 className="text-white text-xs">Payment Partners</h3>
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
              <img
                className="mx-2 hover:cursor-pointer"
                src={Visa}
                alt="Visa"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
