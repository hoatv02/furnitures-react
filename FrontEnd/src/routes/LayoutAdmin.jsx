import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Admin from '../layout/Admin/Admin';
import Dashboard from '../page/Admin/Dashboard/Dashboard';
import AddCategory from '../page/Admin/ManageCategory/AddCategory/AddCategory';
import ManageCategory from '../page/Admin/ManageCategory/ManageCategory';
import AddProduct from '../page/Admin/ManageProduct/AddProduct/AddProduct';
import EditProduct from '../page/Admin/ManageProduct/EditProduct/EditProduct';
import ManageProduct from '../page/Admin/ManageProduct/ManageProduct';

const LayoutAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
       <Route index element={<Dashboard/>}/>
       <Route path='/addProduct' element={<AddProduct/>}/>
       <Route path='/addCategory' element={<AddCategory/>}/>

       <Route path='/editProduct/:id' element={<EditProduct/>}/>
       <Route path='/manageProduct' element={<ManageProduct/>}/>
       <Route path='/manageCategory' element={<ManageCategory/>}/>


      </Route>
      {/* <Route path="/signin" element={<p>ok</p>} /> */}
      {/* <Route path="/register" element={<p>ok</p>} /> */}
    </Routes>
  );
}

export default LayoutAdmin