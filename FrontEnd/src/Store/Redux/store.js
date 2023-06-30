import { configureStore } from '@reduxjs/toolkit'
import {ProductReducer} from './Slice/ProductSlice'
import { CategoryReducer } from './Slice/CategorySlice'
import { UserReducer } from './Slice/UserSlice'
import { CartReducer } from './Slice/CartSlice'
export const store = configureStore({
  reducer: {
    product:ProductReducer,
    category:CategoryReducer,
    user:UserReducer,
    cart:CartReducer
  },
})