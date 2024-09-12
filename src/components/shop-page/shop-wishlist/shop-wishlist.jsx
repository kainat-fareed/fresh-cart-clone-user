// React Imports
import React from "react";

// Mui Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button, Checkbox, Chip } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";

// Custom Imports
import { rows } from "./dummyData/list-dummy";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../../store/slices/wishListSlice";
import { addCart } from "../../../store/slices/addCartSlice";

const ShopWishlist = () => {
  const { wishlistArr } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  console.log(wishlistArr, "wishlistArr");

  return (
    <div className="px-4 md:px-10 lg:px-10 mb-5">
      <h1 className="text-3xl font-bold text-gray-800 my-2">My Wishlist</h1>
      <p className="text-sm text-gray-500">
        There are {wishlistArr?.length} products in this wishlist.
      </p>
      <div style={{ height: 600, width: "100%" }} className="mt-8">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "10%" }}>
                  <Checkbox />
                </TableCell>
                <TableCell style={{ width: "15%" }}></TableCell>
                <TableCell
                  style={{ width: "15%" }}
                  sx={{
                    color: "#5c6c75",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Product
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#5c6c75",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Amount
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#5c6c75",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#5c6c75",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Actions
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#5c6c75",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Remove
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlistArr?.map((row) => (
                <TableRow
                  key={row?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <img
                      src={row?.productImg}
                      alt="products images"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </TableCell>
                  <TableCell style={{ width: "15%" }}>
                    <span className="font-bold text-md text-gray-700">
                      {row?.productName}
                    </span>
                    <br />
                    <span className="text-sm text-gray-500">{row?.weight}</span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#5c6c75",
                      fontSize: "16px",
                    }}
                  >
                    ${row?.currentPrice}
                  </TableCell>

                  <TableCell align="center">
                    <Chip
                      size="small"
                      label={row?.availability}
                      color={
                        row?.availability === "In Stock" ? "success" : "error"
                      }
                      sx={{
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        dispatch(addCart(row));
                      }}
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor:
                          row?.availability === "Out of Stock"
                            ? "#001e2b"
                            : "#099309",

                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor:
                            row?.availability === "Out of Stock"
                              ? "#26404b"
                              : "#099309",
                        },
                      }}
                    >
                      {row?.availability === "Out of Stock"
                        ? "Contact Us"
                        : row?.action}
                    </Button>
                  </TableCell>

                  <TableCell align="center">
                    <DeleteIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(removeFromWishList(row.id));
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ShopWishlist;
