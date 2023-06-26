import React from "react";
import styles from "./GiftProducts.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SavingsIcon from '@mui/icons-material/Savings';
const GiftProducts = () => {
  return (
    <div className={styles.containers}>
        <ul className={styles.gift_Cotainer}>
      <li className="text-xs sm:text-slate-900 md:text-base">
        <p>
          <LocalShippingIcon className={styles.Icon} />
        </p>
        <span className="text-sm font-bold sm:text-slate-900 md:text-base text-white">
          Miễn Phí Giao Hàng
        </span>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetuer</p>
      </li>
      <li className="text-xs sm:text-slate-900 md:text-base">
        <p>
          <CardGiftcardIcon className={styles.Icon} />
        </p>

        <span className="text-sm font-bold sm:text-slate-900 md:text-base text-white">
          Quà Tặng Đặc Biệt
        </span>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetuer</p>
      </li>
      <li className="text-xs sm:text-slate-900 md:text-base">
        <p>
          <SavingsIcon className={styles.Icon} />
        </p>

        <span className="text-sm font-bold sm:text-slate-900 md:text-base text-white">
          Tiết Kiệm Khi Mua Ở HT
        </span>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetuer</p>
      </li>
    </ul>
    </div>
  );
};

export default GiftProducts;
