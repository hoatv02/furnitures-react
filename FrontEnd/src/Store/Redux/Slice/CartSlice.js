/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../../Common/Api";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
    addCart:(state,action)=>{
        
    }
  },
  extraReducers: (builder) => {
   
  },
});

export const {  } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
