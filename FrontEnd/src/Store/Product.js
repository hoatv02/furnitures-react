import axios from 'axios'
import create from 'zustand'
const urlBase = 'http://localhost:3000/'
export const useProductStore = create((set) => ({
  url:urlBase,
  products: [],
  setProducts: async (url) => {
    const response = await axios.get(urlBase + 'product')
    set({ products: await response.data.data })
  }
}))
export const useEditProductStore = create((set) => ({
  url:urlBase ,
  products: [],
  setProducts: async (url) => {
    const response = await axios.get(urlBase + `product/63ad2a313fd2fd6ed13da83c`)
    console.log(response.data.data)
    set({ products: await response.data.data })
  }
}))