import axios from 'axios'
import create from 'zustand'
export const useProductStore = create((set) => ({
  products: [],
  setProducts: async (url) => {
    const response = await axios.get(url)
    set({ products: await response.data.data })
  }
}))