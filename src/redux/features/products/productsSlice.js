import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const resp = await axios.get("/server/products/index.get.json");
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProducts.pending]: (state) => {
      state.isLoading = false;
    },
  },
});
