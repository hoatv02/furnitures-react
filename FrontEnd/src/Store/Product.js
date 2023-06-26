import axios from 'axios'
import create from 'zustand'
const urlBase = 'http://localhost:8000/'
export const useProductStore = create((set) => ({
  url:urlBase,
  products: [],
  setProducts: async (products) => {
    const response = await axios.get(urlBase + 'product/' + products)
    set({ products: await response.data.data })
  }
}))
export const useProductDetailStore = create((set) => ({
  url:urlBase ,
  products: [],
  setProducts: async (id,callback) => {
    const response = await axios.get(urlBase + `product/${id}`)
    callback(response)
    set({ products:await response.data.data })
  }
  
}))

// export const useSearchProductStore = create((set) => ({
//   url:urlBase,
//   key:[],
//   setKey : async (key)=>{
//     console.log(key)
//     const response = await axios.get(urlBase + `search/` + key)
//     set({key : await response.data.data})
//   }
  
// }))