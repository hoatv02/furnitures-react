import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./routes/LayoutAdmin";
import LayoutSite from "./routes/LayoutSite";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Categorys, Products } from "./Common/Api";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Products());
    dispatch(Categorys());
   
  }, []); 
  const getInfo = localStorage.getItem("AccessToken");
    const getInfoUser = JSON.parse(getInfo);
  return (
    <>
      {getInfoUser.data.admin === true ? (
        <Routes>
          <Route path="*" element={<LayoutSite />} />
          <Route path="/admin/*" element={<LayoutAdmin />} />
        </Routes>
      ) : (
        <Routes>
        <Route path="*" element={<LayoutSite />} />
      </Routes>
      )}
    </>
  );
}

export default App;
