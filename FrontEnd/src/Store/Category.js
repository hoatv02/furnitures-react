import axios from 'axios'
import create from 'zustand'
const urlBase = 'http://localhost:3000/'
export const useCategoryStore = create((set) => ({
  url:urlBase,
  categorys: [],
  setCategorys: async (url) => {
    const response = await axios.get(urlBase + 'category')
    set({ categorys: response.data.data })
  }
}))