import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Admin from '../layout/Admin/Admin';
import Dashboard from '../page/Admin/Dashboard/Dashboard';
import AddProduct from '../page/Admin/ManageProduct/AddProduct/AddProduct';
import ManageProduct from '../page/Admin/ManageProduct/ManageProduct';

const LayoutAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
       <Route index element={<Dashboard/>}/>
       <Route path='/addProduct' element={<AddProduct/>}/>
       <Route path='/manageProduct' element={<ManageProduct/>}/>

      </Route>
      {/* <Route path="/signin" element={<p>ok</p>} /> */}
      {/* <Route path="/register" element={<p>ok</p>} /> */}
    </Routes>
  );
}

export default LayoutAdmin