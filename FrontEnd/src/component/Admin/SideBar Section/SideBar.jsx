import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import WindowIcon from "@mui/icons-material/Window";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { createContext } from "react";
import DarkMode from "../DarkMode/DarkMode";


export const ThemeContext = createContext(null);

const SideBar = () => {
 

 
  return (
    <div className={`${styles.container} min-h-screen shadow-lg `}>
      <div class="sidebar  min-h-screen  overflow-hidden border-r  hover:bg-dark hover:shadow-lg">
        <div class="flex h-screen flex-col justify-between pt-2 pb-6">
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}

          <div>
            <div class="w-max border-b-2 ">
              <img
                src="https://ht21992.pythonanywhere.com/static/pages/images/logo.png"
                className={styles.sideBarImg}
                alt=""
              />
            </div>
            <ul className={`${styles.list} mt-6 space-y-2 tracking-wide`}>
              <li class="min-w-max">
                <a
                  href="#"
                  aria-label="dashboard"
                  class="relative flex items-center space-x-4 rounded-md bg-gradient-to-r from-white-600 to-white-400 px-4 py-3 "
                >
                  <WindowIcon />
                  <span class="title">Dashboard</span>
                </a>
              </li>
              <li class="min-w-max">
                <a
                  href="#"
                  class="bg group flex items-center space-x-4 rounded-md px-4 py-3 bg-gradient-to-r  "
                >
                  <ProductionQuantityLimitsIcon />
                  <span class="title">Product</span>
                </a>
              </li>
              <li class="min-w-max">
                <a
                  href="#"
                  class="group flex items-center space-x-4 rounded-md px-4 py-3 bg-gradient-to-r "
                >
                  <CategoryIcon />
                  <span class="title">Category</span>
                </a>

              </li>
              <li class="min-w-max">
                <a
                  href="#"
                  class="group flex items-center space-x-4 rounded-md px-4 py-3"
                >
                  <DriveFolderUploadIcon />
                  <span class="title">Data user</span>
                </a>
              </li>
              <li class="min-w-max">
                <a
                  href="#"
                  class="group flex items-center space-x-4 rounded-md px-4 py-3"
                >
                  <TrendingUpIcon />
                  <span class="title">Statistics</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div class="w-max -mb-3 ">
            <DarkMode/>
            <a
              href="#"
              class="group flex items-center space-x-4 rounded-md px-4 py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 group-hover:fill-white-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="titleSettings ml-5"> Settings</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
