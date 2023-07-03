import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Products = createAsyncThunk('Products',async()=>{
   try {
    const data = await axios.get(`http://localhost:8000/product`)
    return data.data.data
   } catch (error) {
   }
})
export const ProductDetails = createAsyncThunk('ProductDetails',async({id})=>{
   try {
    const data = await axios.get(`http://localhost:8000/product/${id}`)
    return data.data.data
   } catch (error) {
   }
})
export const Categorys = createAsyncThunk('Categorys',async()=>{
   try {
    const data = await axios.get(`http://localhost:8000/category`)
    return data.data.data
   } catch (error) {
   }
})

export const Users = createAsyncThunk('Users',async()=>{
   try {
      const data = await axios.get(`http://localhost:8000/user`)
      console.log(data.data.data)
      // return data.data.data
   } catch (error) {
   }
})

