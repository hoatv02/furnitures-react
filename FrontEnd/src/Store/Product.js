import axios from 'axios'
import create from 'zustand'
const urlBase = 'http://localhost:3000/'
export const useProductStore = create((set) => ({
  url:urlBase,
  products: [],
  setProducts: async () => {
    const response = await axios.get(urlBase + 'product')
    set({ products: await response.data.data })
  }
}))
export const useEditProductStore = create((set) => ({
  url:urlBase ,
  products: [],
  setProducts: async (id,callback) => {
    const response = await axios.get(urlBase + `product/${id}`)
    console.log(callback(response))
    // console.log(response.data.data)
    set({ products:await response.data.data })
  }
  
}))
