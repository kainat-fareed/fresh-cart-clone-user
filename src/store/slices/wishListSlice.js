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
  wishlistArr: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const isExist = state.wishlistArr.find(
        (product) => product.id === action.payload.id
      );

      if (!isExist) {
        state.wishlistArr.push({ ...action.payload });
        Toast.fire({
          icon: "success",
          title: "Successfully Added to wishlist",
        });
      } else {
        Toast.fire({
          icon: "warning",
          title: "Already added in wishlist",
        });
      }
    },

    removeFromWishList: (state, action) => {
      
      state.wishlistArr = state.wishlistArr.filter(
        (product) => product.id !== action.payload
      );

      Toast.fire({
        icon: "warning",
        title: "Product removed successfully",
      });
    },
  },
});

export const { addToWishList,removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
