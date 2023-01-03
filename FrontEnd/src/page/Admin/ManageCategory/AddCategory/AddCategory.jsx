import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState:{
        errors
      }
    }= useForm()
    const onSubmit = async (category) => {
      try {
        const {data} = await axios.post(`http://localhost:3000/category`,category)
        console.log('data',data)
        navigate('/admin/manageCategory')
      } catch (error) {
      }
    }
   
  return (
    <div className=''>
    <h1 class='text-3xl py-3 font-bold text-uppercase'>Thêm mới danh mục</h1>
    <form class="row g-3 max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
      <div class="col-md-8">
        <label for="CategoryID" class="form-label">
          CategoryID
        </label>
        <input type="text" class="form-control" id="CategoryID"   disabled/>
      </div>
      
      <div class="col-md-8">
        <label for="categoryName" class="form-label">
          Category Name
        </label>
        <input type="text" class="form-control" id="categoryName"  {...register("categoryName")}/>
      </div>
      <div class="col-12">
        <button  class="btn btn-danger text-red-500">
          Sign in
        </button>
      </div>
    </form>
  </div>
  )
}

export default AddCategory