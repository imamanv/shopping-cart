import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    buyItem: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (!cartItem) state.cartItems.push({ ...payload, quantity: 1 });
      else
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            item.quantity++;
          }
          return item;
        });
    },
    reduceQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (cartItem.quantity === 1)
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        );
      else cartItem.quantity--;
    },
    increaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (cartItem.quantity === cartItem.stock) return state;
      else cartItem.quantity++;
    },
    getTotal: (state) => {
      let totalQuantity = 0;
      let totalAmount = 0;
      state.cartItems.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
        totalAmount += cartItem.quantity * cartItem.price;
      });
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    cartToggle: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  buyItem,
  reduceQuantity,
  increaseQuantity,
  getTotal,
  cartToggle,
} = cartSlice.actions;
