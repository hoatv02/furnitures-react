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
        const {data} = await axios.post(`http://localhost:8000/category`,category)
        navigate('/admin/manageCategory')
      } catch (error) {
      }
    }
   
  return (
    <div className=''>
    <h1 className='text-3xl py-3 font-bold text-uppercase border-b-1'>Thêm mới danh mục</h1>
    <form className="row g-3 max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-8">
        <label for="CategoryID" className="form-label">
          CategoryID
        </label>
        <input type="text" className="form-control rounded-lg border-[#ff4584]" id="CategoryID"   disabled/>
      </div>
      
      <div className="col-md-8">
        <label for="categoryName" className="form-label">
          Category Name
        </label>
        <input type="text" className="form-control rounded-lg border-[#ff4584]" id="categoryName"  {...register("categoryName")}/>
      </div>
      <div className="col-12">
        <button  className="btn bg-[#ff4584] hover:bg-[#ee3371]  text-white-500">
          Thêm mới danh mục
        </button>
      </div>
    </form>
  </div>
  )
}

export default AddCategory