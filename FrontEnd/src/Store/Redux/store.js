import { configureStore } from '@reduxjs/toolkit'
import {ProductReducer} from './Slice/ProductSlice'
import { CategoryReducer } from './Slice/CategorySlice'
export const store = configureStore({
  reducer: {
    product:ProductReducer,
    category:CategoryReducer
  },
})