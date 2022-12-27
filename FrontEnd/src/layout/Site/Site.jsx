import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../component/Site/Footer/Footer";
import HeaderPage from "../../component/Site/Header/HeaderPage/HeaderPage";
import styles from './Site.module.css'
const Site = () => {
  return (
    <div>
      <div>
        <HeaderPage/>
      </div>
      <div className={styles.containerOutlet}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Site;
