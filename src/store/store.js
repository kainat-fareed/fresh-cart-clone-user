import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/addCartSlice";
import wishListReducer from "./slices/wishListSlice"
export const store = configureStore({
  reducer: {
    addCart: counterReducer,
    wishlist: wishListReducer
  },
});
