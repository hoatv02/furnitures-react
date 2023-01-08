import React from "react";
import Banner from "./Banner/Banner";
import NavbarLeftHome from "./NavbarLeft/NavbarLeftHome";
import styles from './HomePage.module.css'
import About from "./About/About";
import GiftProducts from "./GiftProducts/GiftProducts";
import InForAbout from "./InForAbout/InForAbout";
const HomePage = () => {
  return (
    <div>
      <div className={styles.bannerPage}>
        <Banner />
      </div>
      <div className={styles.contentHome}>
        <NavbarLeftHome />
        <GiftProducts/>
        <About/>
        <InForAbout/>
      </div>
      <div>
      </div>
    </div>
  );
};

export default HomePage;
