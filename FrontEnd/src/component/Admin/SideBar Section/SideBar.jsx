import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import WindowIcon from "@mui/icons-material/Window";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DarkMode from "../DarkMode/DarkMode";
import Statistical from './../../../page/Admin/Statistical/Statistical';

const SideBar = () => {
  return (
    <div className={`${styles.container} min-h-screen shadow-lg `}>
      <div className="sidebar  h-full  overflow-hidden border-r  hover:bg-dark hover:shadow-lg">
        <div className="flex h-full flex-col justify-between pt-2 pb-6">
          <div>
            <div className="w-max border-b-2 ">
              <Link to="/">
                <img
                  src="https://ht21992.pythonanywhere.com/static/pages/images/logo.png"
                  className={styles.sideBarImg}
                  alt=""
                />
              </Link>
            </div>
            <ul className={`${styles.list}  space-y-2 tracking-wide mt-1`}>
              <li className="min-w-max">
                <Link
                  to="/admin/"
                  aria-label="dashboard"
                  className="relative flex items-center space-x-4  bg-gradient-to-r from-white-600 to-white-400 px-4 py-1 ml-1 "
                >
                  <WindowIcon />
                  <span className={styles.title}>Trang chủ</span>
                </Link>
              </li>
              <li className="min-w-max">
                <Link
                  to="/admin/manageProduct"
                  className="bg group flex items-center space-x-4  px-4 py-1 ml-1 bg-gradient-to-r  "
                >
                  <ProductionQuantityLimitsIcon />
                  <span className={styles.title}>Sản phẩm</span>
                </Link>
              </li>
              <li className="min-w-max">
                <Link
                  to="/admin/manageCategory"
                  className="group flex items-center space-x-4  px-4 py-1 ml-1 bg-gradient-to-r "
                >
                  <CategoryIcon />
                  <span className={styles.title}>Danh mục</span>
                </Link>
              </li>
              <li className="min-w-max">
                <Link
                  to="/admin/manageUser"
                  className="group flex items-center space-x-4  px-4 py-1 ml-1"
                > 
                  <DriveFolderUploadIcon />
                  <span className={styles.title}>Người dùng</span>
                </Link>
              </li>
              <li className="min-w-max">
                <Link
                  to="/admin/statistical"
                  className="group flex items-center space-x-4  px-4 py-1 ml-1"
                >
                  <TrendingUpIcon />
                  <span className={styles.title}>Biểu đồ thống kê</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-max -mb-3 ">
            <DarkMode />
            <Link
              to=""
              className="group flex items-center space-x-4  px-4 py-1 ml-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:fill-white-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              <span className="titleSettings ml-5"> Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
