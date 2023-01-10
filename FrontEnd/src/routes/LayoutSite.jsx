import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../page/Site/Contact/Contact";
import Signin from "../page/Site/Signin/Signin";
import HomePage from "../page/Site/Home/HomePage";
import Product from "../page/Site/Product/Product";
import Site from "../layout/Site/Site";
import ProductDetail from '../page/Site/ProductDetail/ProductDetail'
import About from "../page/Site/About/About";
import Registers from "../page/Site/Register/Register";
import Profile from "../page/Site/Profile/Profile";
const LayoutSite = () => {
  return (
    <Routes>
      <Route path="/" element={<Site />}>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Registers />} />
    </Routes>
  );
};

export default LayoutSite;
