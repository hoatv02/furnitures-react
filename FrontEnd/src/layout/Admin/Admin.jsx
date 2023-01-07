import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Admin.module.css";
import SideBar from "../../component/Admin/SideBar Section/SideBar";
import TopSection from "../../component/Admin/Body Section/Top Section/TopSection";
import FooterSection from "../../component/Admin/Body Section/Footer Section/FooterSection";
import { Pagination } from "@mui/material";

const Admin = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {" "}
        <SideBar />
      </div>
      <div className={`${styles.body} `}>
        <TopSection />

        <div className={`${styles.oulet}`}>
          <Outlet />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default Admin;
