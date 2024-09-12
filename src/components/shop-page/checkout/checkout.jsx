// React Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mui Imports
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Radio,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PaymentIcon from "@mui/icons-material/Payment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

// Yup Validation imports
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Custom Imports
import {
  AddressArr,
  btnArr,
  deliveryData,
  shopDetailArr,
} from "./dummyData/checkout-data";
import { inputBorder, inputBorderDefault } from "./style/checkout-style";

const Checkout = () => {
  const paymentSchema = yup
    .object()
    .shape({
      firstName: yup
        .string()
        .min(2, "Too Short!")
        .max(10, "Too Long!")
        .required("First name is required"),
      cardNumber: yup
        .string()
        .required("Card number is required")
        .matches(/^[0-9]{16}$/, "Card number must be 16 digits"),
      expiryDate: yup
        .string()
        .required("Expiry date is required")
        .matches(
          /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
          "Expiry date must be in MM/YY format"
        ),
      cvv: yup
        .string()
        .required("CVV is required")
        .matches(/^[0-9]{3}$/, "CVV must be 3 digits"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      firstName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

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

  return (
    <>
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
      <div className="px-4 md:px-10 lg:px-10 mb-5">
        <h1 className="text-3xl font-bold text-gray-800 my-2">Checkout</h1>
        <p className="text-sm text-gray-500">
          Already have an account? Click here to
          <span className="text-green font-bold cursor-pointer ml-1">
            <Link to="/auth/sign-in"> Sign In </Link>
          </span>
          .
        </p>

        <Grid container gap={{ xs: 2, md: 2, lg: 4 }} className="my-8">
          <Grid item xs={12} md={12} lg={8.1}>
            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="flex justify-between w-full">
                    <div className="flex">
                      <PlaceOutlinedIcon sx={{ color: "#5c6c75" }} />
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          marginLeft: "5px",
                          color: "#21313c",
                          "&:hover": {
                            color: "#0aad0a",
                          },
                          marginTop: "2px",
                          marginLeft: "10px",
                        }}
                      >
                        Add Delivery Address
                      </Typography>
                    </div>
                    <div>
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          borderColor: "#0aad0a",
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#0aad0a",
                          "&:hover": {
                            borderColor: "#0aad0a",
                            backgroundColor: "#0aad0a",
                            color: "#fff",
                          },
                        }}
                      >
                        Add a new address
                      </Button>
                    </div>
                  </div>
                </AccordionSummary>

                <AccordionDetails>
                  <Grid container gap={{ xs: 1, sm: 2, md: 3, lg: 2 }}>
                    {AddressArr?.map((item) => {
                      return (
                        <Grid item xs={12} md={5.8} lg={5.88}>
                          <div className="border border-gray-500 rounded-md p-4 min-h-full">
                            <div className="flex items-center">
                              <Radio size="small" />
                              <label htmlFor="">{item?.location}</label>
                            </div>
                            <div className="ms-8">
                              <h2 className="font-bold text-md text-gray-700">
                                {item?.name}
                              </h2>
                              <p className="text-sm text-gray-600 my-1">
                                {item?.address}
                              </p>
                              <span className="text-sm text-gray-600">
                                P:{item?.phone}
                              </span>
                              <p className="text-sm text-red-500 mt-1">
                                {item?.addressType}
                              </p>
                            </div>
                          </div>
                        </Grid>
                      );
                    })}
                  </Grid>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <div className="flex">
                    <AccessTimeIcon sx={{ color: "#5c6c75" }} />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: "5px",
                        color: "#21313c",
                        "&:hover": {
                          color: "#0aad0a",
                        },
                        marginTop: "2px",
                        marginLeft: "10px",
                      }}
                    >
                      Delivery Time
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container gap={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
                    {btnArr?.map((btn) => {
                      return (
                        <Grid
                          item
                          xs={3.8}
                          sm={1.7}
                          md={1.5}
                          lg={1.5}
                          className="flex justify-center"
                        >
                          <button className="text-sm font-semibold bg-gray-200 hover:bg-green-500 hover:text-white hover:cursor-pointer rounded-md px-8 py-2">
                            {btn?.day}
                            <br />
                            <span className="text-xs">{btn?.date}</span>
                          </button>
                        </Grid>
                      );
                    })}
                  </Grid>

                  <Grid container className="my-8">
                    {deliveryData?.map((data) => {
                      return (
                        <Grid item xs={12}>
                          <Grid container gap={{ xs: 2, sm: 2, md: 2 }}>
                            <Grid
                              item
                              xs={4.3}
                              md={5}
                              className="flex items-center my-4"
                            >
                              <div className="flex items-center">
                                <Radio size="small" />
                                <label htmlFor="" className="text-sm">
                                  {data?.time}
                                </label>
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              md={2.2}
                              className="flex items-center justify-center"
                            >
                              <span className="text-sm">
                                ${data.charges.toFixed(2)}
                              </span>
                            </Grid>
                            <Grid
                              item
                              xs={1.7}
                              md={2}
                              className="flex items-center justify-center"
                            >
                              <Chip
                                size="small"
                                label={data?.status}
                                color={
                                  data?.status === "Free" ? "success" : "error"
                                }
                                sx={{
                                  borderRadius: "8px",
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={2.2}
                              md={2.1}
                              className="flex items-center justify-end"
                            >
                              <Button
                                variant="outlined"
                                size="small"
                                sx={{
                                  textTransform: "capitalize",
                                  borderColor: "#c1c7c6",
                                  color: "#5c6c75bf",
                                  fontWeight: "bold",
                                  "&:hover": {
                                    borderColor: "#c1c7c6",
                                    backgroundColor: "#c1c7c6",
                                  },
                                }}
                              >
                                Choose
                              </Button>
                            </Grid>
                          </Grid>
                          <Divider sx={{ marginY: "10px" }} />
                        </Grid>
                      );
                    })}
                  </Grid>
                  <div className="flex justify-end">
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        borderColor: "#c1c7c6",
                        color: "#5c6c75bf",
                        fontWeight: "bold",
                        "&:hover": {
                          borderColor: "#c1c7c6",
                          backgroundColor: "#c1c7c6",
                        },
                      }}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderColor: "#0aad0a",
                        backgroundColor: "#0aad0a",
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          borderColor: "#099309",
                          backgroundColor: "#099309",
                        },
                        marginLeft: "10px",
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <div className="flex">
                    <LocalMallOutlinedIcon sx={{ color: "#5c6c75" }} />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: "5px",
                        color: "#21313c",
                        "&:hover": {
                          color: "#0aad0a",
                        },
                        marginTop: "2px",
                        marginLeft: "10px",
                      }}
                    >
                      Delivery Instructions
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <h3 className="text-sm text-gray-800 mb-2">
                    Add a written reviewDelivery Instructions
                  </h3>
                  <TextField
                    id="outlined-multiline-static"
                    placeholder="Write delivery instruction"
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
                  <p className="text-xs text-gray-500 mt-1">
                    Add instructions for how you want your order shopped and/or
                    delivered
                  </p>
                  <div className="flex justify-end mt-4">
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        borderColor: "#c1c7c6",
                        color: "#5c6c75bf",
                        fontWeight: "bold",
                        "&:hover": {
                          borderColor: "#c1c7c6",
                          backgroundColor: "#c1c7c6",
                        },
                      }}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderColor: "#0aad0a",
                        backgroundColor: "#0aad0a",
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          borderColor: "#099309",
                          backgroundColor: "#099309",
                        },
                        marginLeft: "10px",
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <div className="flex">
                    <PaymentIcon sx={{ color: "#5c6c75" }} />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: "5px",
                        color: "#21313c",
                        "&:hover": {
                          color: "#0aad0a",
                        },
                        marginTop: "2px",
                        marginLeft: "10px",
                      }}
                    >
                      Payment Method
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex px-2 py-4 border border-gray-300 rounded-md">
                    <div>
                      <Radio size="small" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gay-700 font-bold mb-1">
                        Payment with paypal
                      </h3>
                      <p className="text-xs text-gray-500">
                        You will be redirected to PayPal website to complete
                        your purchase securely.
                      </p>
                    </div>
                  </div>

                  <div className="flex px-2 py-4 border border-gray-300 rounded-md my-2">
                    <div>
                      <Radio size="small" />
                    </div>
                    <div className="w-11/12">
                      <h3 className="text-sm text-gay-700 font-bold mb-1">
                        Credit / Debit Card
                      </h3>
                      <p className="text-xs text-gray-500">
                        Safe money transfer using your bank accou k account. We
                        support Mastercard tercard, Visa, Discover and Stripe.
                      </p>

                      <form
                        onSubmit={handleSubmit((data) => {
                          onSubmit(data);
                        })}
                      >
                        <div className="my-4">
                          <h3 className="text-sm text-gray-700 font-bold my-2">
                            Card Number
                          </h3>
                          <FormControl fullWidth>
                            <Controller
                              name="firstName"
                              control={control}
                              render={({ field: { value, onChange } }) => {
                                return (
                                  <TextField
                                    label="Card Number"
                                    placeholder="1234 4567 6789 4321"
                                    size="small"
                                    value={value}
                                    onChange={onChange}
                                    sx={
                                      !errors?.cardNumber?.message
                                        ? inputBorderDefault
                                        : inputBorder
                                    }
                                  />
                                );
                              }}
                            />
                            <div className="text-red-500 my-2 text-sm">
                              {errors?.cardNumber?.message}
                            </div>
                          </FormControl>

                          <Grid
                            container
                            gap={{ xs: 2, sm: 2 }}
                            className="mt-4"
                          >
                            <Grid item xs={5.48}>
                              <h3 className="text-sm text-gray-700 font-bold mb-2">
                                Name on Card
                              </h3>
                              <FormControl fullWidth>
                                <Controller
                                  name="firstName"
                                  control={control}
                                  render={({ field: { value, onChange } }) => {
                                    return (
                                      <TextField
                                        label="First Name"
                                        placeholder="Enter Your first name"
                                        size="small"
                                        value={value}
                                        onChange={onChange}
                                        sx={
                                          !errors?.firstName?.message
                                            ? inputBorderDefault
                                            : inputBorder
                                        }
                                      />
                                    );
                                  }}
                                />
                                <div className="text-red-500 my-2 text-sm">
                                  {errors?.firstName?.message}
                                </div>
                              </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                              <h3 className="text-sm text-gray-700 font-bold mb-2">
                                Expiry date
                              </h3>
                              <FormControl fullWidth>
                                <Controller
                                  name=""
                                  control={control}
                                  render={({ field: { value, onChange } }) => {
                                    return (
                                      <TextField
                                        label="Expiry Date"
                                        placeholder="Select date"
                                        size="small"
                                        value={value}
                                        onChange={onChange}
                                        sx={
                                          !errors?.expiryDate?.message
                                            ? inputBorderDefault
                                            : inputBorder
                                        }
                                      />
                                    );
                                  }}
                                />
                                <div className="text-red-500 my-2 text-sm">
                                  {errors?.expiryDate?.message}
                                </div>
                              </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                              <h3 className="text-sm text-gray-700 font-bold mb-2">
                                CVV Code
                              </h3>
                              <FormControl fullWidth>
                                <Controller
                                  name=""
                                  control={control}
                                  render={({ field: { value, onChange } }) => {
                                    return (
                                      <TextField
                                        label="CVV"
                                        placeholder="***"
                                        size="small"
                                        value={value}
                                        onChange={onChange}
                                        sx={
                                          !errors?.cvv?.message
                                            ? inputBorderDefault
                                            : inputBorder
                                        }
                                      />
                                    );
                                  }}
                                />
                                <div className="text-red-500 my-2 text-sm">
                                  {errors?.cvv?.message}
                                </div>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="flex px-2 py-4 border border-gray-300 rounded-md">
                    <div>
                      <Radio size="small" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gay-700 font-bold mb-1">
                        Pay with Payoneer
                      </h3>
                      <p className="text-xs text-gray-500">
                        You will be redirected to Payoneer website to complete
                        your purchase securely.
                      </p>
                    </div>
                  </div>

                  <div className="flex px-2 py-4 border border-gray-300 rounded-md mt-2">
                    <div>
                      <Radio size="small" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gay-700 font-bold mb-1">
                        Cash on delivery
                      </h3>
                      <p className="text-xs text-gray-500">
                        Pay with cash when your order is delivered.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        borderColor: "#c1c7c6",
                        color: "#5c6c75bf",
                        fontWeight: "bold",
                        "&:hover": {
                          borderColor: "#c1c7c6",
                          backgroundColor: "#c1c7c6",
                        },
                      }}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderColor: "#0aad0a",
                        backgroundColor: "#0aad0a",
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          borderColor: "#099309",
                          backgroundColor: "#099309",
                        },
                        marginLeft: "10px",
                      }}
                    >
                      Place order
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={3.5}
            className="border border-gray-400 rounded-md py-4"
          >
            <h2 className="text-md text-gray-800 font-bold mx-4 mb-4">
              Order Details
            </h2>
            <Divider sx={{ marginY: "20px" }} />
            {shopDetailArr?.map((item) => {
              return (
                <>
                  <Grid
                    container
                    gap={{ xs: 1, md: 1 }}
                    className="flex items-center"
                  >
                    <Grid item xs={2}>
                      <img src={item?.img} alt="" />
                    </Grid>
                    <Grid item xs={5}>
                      <h1 className="text-sm text-gray-800 font-semibold">
                        {item?.productName}
                      </h1>
                      <span className="text-xs text-gray-500">
                        {item?.weight}
                      </span>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className="flex justify-center items-center"
                    >
                      <span className="text-sm">{item?.quantity}</span>
                    </Grid>
                    <Grid item xs={2.2}>
                      <div className="flex h-full justify-end items-center">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold">
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
                  <Divider sx={{ marginY: "10px" }} />
                </>
              );
            })}

            <div className="flex justify-between mx-4 mb-1">
              <h3 className="text-sm">Item Subtotal</h3>
              <span className="text-sm font-bold">$70.00</span>
            </div>

            <div className="flex justify-between mx-4">
              <h3 className="text-sm">
                Service Fee
                <Tooltip
                  title="Default tooltip"
                  arrow
                  placement="top"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "#001e2b",
                        fontSize: "12px",
                        padding: "5px 10px",
                        borderRadius: "8px",
                        "& .MuiTooltip-arrow": {
                          color: "#001e2b",
                        },
                      },
                    },
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: "16px",
                      marginLeft: "5px",
                      color: "#c1c7c6",
                    }}
                  />
                </Tooltip>
              </h3>
              <span className="text-sm font-bold">$3.00</span>
            </div>
            <Divider sx={{ marginY: "20px" }} />
            <div className="flex justify-between mx-4 mb-1">
              <h3 className="text-sm font-bold">Subtotal</h3>
              <span className="text-sm font-bold">$73.00</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Checkout;
