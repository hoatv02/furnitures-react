import React, { useEffect, useState } from "react";
import styles from "./AddProduct.module.css";
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate, useNavigation } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  }= useForm();
  const handleImageChange = function (e) {
    console.log(e)
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async (product) => {
    try {
      const formData = new FormData();
      const fileName = product.image[0].name;
      formData.append("name", fileName);
      formData.append("image", product.image[0]);
      await axios.post(`http://localhost:3000/uploadFile`, formData);
      product.image = product.image[0].name;

      const {data} = await axios.post(`http://localhost:3000/product`,product)
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
            onChange={handleImageChange}
            class="form-control"
            
            id="image"
            multiple
            placeholder="1234 Main St" {...register('image')}
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

export default AddProduct;
