/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../../Common/Api";
const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(Users?.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(Users?.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(Users?.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const {  } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
