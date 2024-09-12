// React import
import React, { useState } from "react";

// Mui imports
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// Yup Validation imports
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// custom imports
import { shopCartArr } from "./dummyData/shop-cart-data";
import { inputBorder, inputBorderDefault } from "./style/shop-redeem-style";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../store/slices/addCartSlice";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const [openSnackBar, setOpenSnackbar] = useState(false);

  const { quantity, cartProducts } = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  const redeemSchema = yup
    .object()
    .shape({
      email: yup.string().email("Invalid email").required("Email is required"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(redeemSchema),
    defaultValues: {
      email: "",
    },
  });

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

  return (
    <>
      <Snackbar
        open={openSnackBar}
        action={action}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={3000}
        message="Form Submitted Successfully"
        ContentProps={{
          sx: {
            background: "#099309",
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      <div className="px-4 md:px-10 lg:px-10 mb-5">
        <h1 className="text-3xl font-bold text-gray-800 my-2">Shop Cart</h1>
        <p className="text-sm text-gray-500">Shopping in 382480</p>
        <Grid container gap={{ sx: 2, md: 3, lg: 4 }}>
          <Grid item xs={12} md={8} lg={8.1}>
            <div className="p-2 border border-red-300 bg-red-100 rounded-md my-4">
              <h1 className="text-sm text-red-900">
                You’ve got FREE delivery. Start
                <span className="font-bold ml-1">checkout now!</span>
              </h1>
            </div>
            <Divider sx={{ marginTop: "20px" }} />
            <>
            {cartProducts.length === 0 ? (
                <div className="flex justify-center items-center h-96">
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
                        <Grid item xs={6} md={6} lg={7}>
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
                                <DeleteOutlineIcon onClick={() => {
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
                        <Grid item xs={4} md={4.2} lg={3}>
                          <div className=" h-full flex items-center">
                            <Button
                              variant="outlined"
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
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
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
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
                              +
                            </Button>
                          </div>
                        </Grid>
                        <Grid item xs={2} md={1.8} lg={2}>
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

            <div className="my-4 flex justify-between">
              <Link to="/pages/shop">
                <Button
                  variant="contained"
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
                  Continue Shopping
                </Button>
              </Link>

              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#26404B",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#26404B",
                  },
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Update Cart
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} md={3.6} lg={3.5}>
            <div className="border border-gray-400 rounded-md p-4 mt-8">
              <h2 className="text-md text-gray-800 font-bold">Summary</h2>
              <div className="border border-gray-300 rounded-md my-4">
                <div className="flex justify-between border-b p-2">
                  <span>Item Subtotal</span>
                  <span>$70.00</span>
                </div>
                <div className="flex justify-between border-b p-2">
                  <span>Service Fee</span>
                  <span>$3.00</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Subtotal</span>
                  <span>$67.00</span>
                </div>
              </div>

              <div className="mt-4 mb-1">
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#0aad0a",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    "&:hover": {
                      backgroundColor: "#0aad0a",
                    },
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Go To Checkout
                  <span className="ml-8 lg:ml-16">$67.00</span>
                </Button>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mt-2">
                By placing your order, you agree to be bound by the Freshcart
                <span className="text-green-500 cursor-pointer mx-1">
                  Terms of Service
                </span>
                and
                <span className="text-green-500 cursor-pointer mx-1">
                  Privacy Policy
                </span>
                .
              </p>

              <div className="mt-8">
                <h2 className="text-md text-gray-800 font-bold mb-4">
                  Add Promo or Gift Card
                </h2>
                <div>
                  <form
                    onSubmit={handleSubmit((data) => {
                      onSubmit(data);
                    })}
                  >
                    <label htmlFor="redeem" className="text-sm text-gray-600">
                      Email Address
                    </label>
                    <div className="mt-4">
                      <FormControl fullWidth>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field: { value, onChange } }) => {
                            return (
                              <TextField
                                label="Email"
                                placeholder="Promo or Gift Card"
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
                    <Button
                      disabled={!isDirty}
                      variant="contained"
                      fullWidth
                      sx={{
                        border: "1px solid #26404B",
                        background: "none",
                        color: "#26404B",
                        fontWeight: "bold",
                        padding: "7px 16px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "#26404B",
                          color: "#fff",
                        },
                        textTransform: "capitalize",
                        cursor: "pointer",
                      }}
                      type="submit"
                    >
                      Redeem
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Terms & Conditions apply
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ShopCart;
