import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Admin from '../layout/Admin/Admin';
import Dashboard from '../page/Admin/Dashboard/Dashboard';

const LayoutAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
       <Route index element={<Dashboard/>}/>
      </Route>
      {/* <Route path="/signin" element={<p>ok</p>} /> */}
      {/* <Route path="/register" element={<p>ok</p>} /> */}
    </Routes>
  );
}

export default LayoutAdmin