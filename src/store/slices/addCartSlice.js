import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
});
const initialState = {
  cartProducts: [],
};

export const counterSlice = createSlice({
  name: "addCart",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      let productItem = state.cartProducts.find(
        (product) => product.id === action.payload
      );

      if (productItem) {
        productItem.quantity += 1;
        productItem.totalPrice =
          productItem.quantity * productItem.currentPrice;
      }
    },
    decreaseQuantity: (state, action) => {
      let productItem = state.cartProducts.find(
        (product) => product.id === action.payload
      );

      if (productItem.quantity === 1) return;

      if (productItem) {
        productItem.quantity -= 1;
        productItem.totalPrice =
          productItem.totalPrice - productItem.currentPrice;
      }
    },
    addCart: (state, action) => {
      let idExists = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      if (!idExists) {
        state.cartProducts.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.currentPrice,
        });
        Toast.fire({
          icon: "success",
          title: "Successfully Added to Cart",
        });
      } else {
        Toast.fire({
          icon: "warning",
          title: "Already added in Cart",
        });
      }
    },
    removeFromCart: (state, action) => {
      
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );

      Toast.fire({
        icon: "warning",
        title: "Product removed successfully",
      });
    },
  },
});

export const { increaseQuantity, decreaseQuantity, addCart, removeFromCart } =
  counterSlice.actions;

export default counterSlice.reducer;
