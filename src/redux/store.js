import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cartSlice";
import { homeSlice } from "./features/home/homeSlice";
import { productsSlice } from "./features/products/productsSlice";

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
