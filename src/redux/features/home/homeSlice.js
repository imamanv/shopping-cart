import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  banners: [],
};
export const getCategories = createAsyncThunk(
  "home/getCategories",
  async () => {
    try {
      const resp = await axios.get("/server/categories/index.get.json");
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getBanners = createAsyncThunk("home/getBanners", async () => {
  try {
    const resp = await axios.get("/server/banners/index.get.json");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
});
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducer: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      let categories = [...action.payload];
      let sortedCategories = categories.sort((a, b) => {
        if (a.order - b.order > 0) return 1;
        else return -1;
      });
      state.categories = sortedCategories;
    },
    [getCategories.pending]: (state) => {
      state.isLoading = false;
    },
    [getBanners.fulfilled]: (state, action) => {
      state.banners = action.payload;
    },
  },
});
