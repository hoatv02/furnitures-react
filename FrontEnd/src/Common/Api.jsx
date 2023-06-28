import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Products = createAsyncThunk('Products',async()=>{
   try {
    const data = await axios.get(`http://localhost:8000/product`)
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

