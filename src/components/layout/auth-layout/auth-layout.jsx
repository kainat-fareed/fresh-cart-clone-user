// React Imports
import React from "react";

// Mui Imports
import { Box } from "@mui/material";

// React Router DOM imports
import { Link, Outlet } from "react-router-dom";

// Custom Imports
import Logo from "../../../assets/images/freshcart-logo.svg";
import AmazonPay from "../../../assets/images/payment/amazonpay.svg";
import AmericanExp from "../../../assets/images/payment/american-express.svg";
import MasterCard from "../../../assets/images/payment/mastercard.svg";
import Paypal from "../../../assets/images/payment/paypal.svg";
import Visa from "../../../assets/images/payment/visa.svg";

const AuthLayout = () => {
  return (
    <>
      <Box className="px-10 py-3 flex items-center justify-between shadow-md">
        <img src={Logo} alt="logo" />
        <p className="text-sm">
          Already have an account?
          <span className="font-bold cursor-pointer text-green ml-1">
            <Link to="/auth/sign-in"> Sign In </Link>
          </span>
        </p>
      </Box>

      <Outlet />

      <Box style={{ backgroundColor: "#001E2B" }} className="px-10 py-5 mt-14">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-xs">
            © 2022 - 2024 FreshCart eCommerce HTML Template. All rights
            reserved. Powered by
            <span className="text-green hover:cursor-pointer">Codescandy</span>.
          </p>
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
            <img className="mx-2 hover:cursor-pointer" src={Visa} alt="Visa" />
          </div>
        </div>
      </Box>
    </>
  );
};

export default AuthLayout;
