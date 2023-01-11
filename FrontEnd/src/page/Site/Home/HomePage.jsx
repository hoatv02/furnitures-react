import React from 'react'
import styles from './HomePage.module.css'
import Banner from '../../../component/Site/Home/Banner/Banner'
import NavbarLeftHome from '../../../component/Site/Home/NavbarLeft/NavbarLeftHome'
import GiftProducts from '../../../component/Site/Home/GiftProducts/GiftProducts'
import About from '../../../component/Site/Home/About/About'
import InForAbout from '../../../component/Site/Home/InForAbout/InForAbout'

const HomePage = () => {
  return (
    <div>
    <div className={styles.bannerPage}>
      <Banner/>
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
  )
}

export default HomePage