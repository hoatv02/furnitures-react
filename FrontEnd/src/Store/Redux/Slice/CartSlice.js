/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    cart: [],
    quantity: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const b = [...state.cart, action.payload];
      const aa =b.filter((item) => item.id !== action.payload);
      if(!aa){
        state.cart = [...state.cart, action.payload]
      }else{
        state.quantity+=1
        state.cart = [...state.cart, action.payload]
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addCart } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
