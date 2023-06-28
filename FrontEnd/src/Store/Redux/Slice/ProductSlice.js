/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../../Common/Api";
const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    result:[]
  },
  reducers: {
    sortCategory: (state, { payload }) => {
      const resultSortData = state.data.filter(
        (item) => item.category === payload
      );
       state.result=resultSortData
    },
    filterProduct: (state, { payload }) => {
      const resultSearch = state.data.filter((item) =>
        item.productName.toLowerCase().includes("abc".toLowerCase())
      );
      state.result = resultSearch;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Products?.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(Products?.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(Products?.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { sortCategory, filterProduct } = ProductSlice.actions;
export const ProductReducer = ProductSlice.reducer;
