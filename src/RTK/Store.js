import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/cartSlice";
import ProductSlice from "./Slice/Product-Slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: ProductSlice,
  },
});
