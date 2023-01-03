import React, { useEffect } from "react";
import styles from "./EditProduct.module.css";
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useEditProductStore, useProductStore } from "../../../../Store/Product";
const EditProduct = () => {
  const setProducts = useEditProductStore((state) => state.setProducts);
  const products = useEditProductStore((state) => state.id);
  const navigate = useNavigate()
  const {id} = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors
    }
  }= useForm()
  useEffect(() => {
    console.log(setProducts())
  }, []);
  // useEffect(()=>{
  //   (
  //     async()=>{
  //       try {
  //         const {data} = await axios.get(`http://localhost:3000/product/${id}`)
  //         reset(data.data)
  //         console.log("data",data.data)
  //       } catch (error) {
          
  //       }
  //     }
  //   )()
  // },[])
  const onSubmit = async (product) => {
    try {
      const {data} = await axios.put(`http://localhost:3000/product/${id}`,product)
      console.log('data',data)
      navigate('/admin/manageProduct')
    } catch (error) {
    }
  }
 
  return (
    <div className={styles.addProduct}>
      <h1 class='text-3xl py-3 font-bold text-uppercase'>Thêm mới sản phẩm</h1>
      <form class="row g-3 max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
        <div class="col-md-6">
          <label for="productName" class="form-label">
            Product Name
          </label>
          <input type="text" class="form-control" id="productName"   {...register('productName')}/>
        </div>
        <div class="col-md-6">
          <label for="price" class="form-label">
            Price
          </label>
          <input type="text" class="form-control" id="price"   {...register("price")}/>
        </div>
        
        <div class="col-md-6">
          <label for="quanity" class="form-label">
            Quantity
          </label>
          <input type="text" class="form-control" id="quanity"  {...register("quantity")}/>
        </div>
        <div class="col-md-6">
          <label for="category" class="form-label">
            Category
          </label>
          <select id="category" class="form-select rounded-sm " {...register("category")}>
            <option>Bàn ghế hiện đại loại 1</option>
            <option>Bàn ghế hiện đại loại 2</option>
            <option>Bàn ghế hiện đại loại 3</option>
          </select>
        </div>
        <div class="col-12">
          <label for="Address" class="form-label">
            File
          </label>
          <input
            type="file"
            class="form-control"
            id="file"
            placeholder="1234 Main St" {...register('file')}
          />
        </div>
        <div class="col-12">
          <label for="description" class="form-label">
            Description
          </label>
          <textarea type="text" class="form-control" id="description" {...register("description")}/>
        </div>
        <div class="col-12">
          <button  class="btn btn-danger text-red-500">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
