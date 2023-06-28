/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { Categorys } from "../../../Common/Api";
const Categoryslice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    sortData:[]
  },
  reducers: {
    // sortCategorys:(state,action)=>{
    //   state.sortData = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(Categorys?.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(Categorys?.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(Categorys?.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { sortCategorys } = Categoryslice.actions;
export const CategoryReducer = Categoryslice.reducer;
