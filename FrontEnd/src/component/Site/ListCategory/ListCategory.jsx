import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import styles from "./ListCategory.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortCategorys } from "../../../Store/Redux/Slice/CategorySlice";
import { useState } from "react";
import {filterProduct, sortCategory } from "../../../Store/Redux/Slice/ProductSlice";
export default function ListCategory() {
  const categorys = useSelector((state)=>state.category.data)
  const dispatch = useDispatch()
  const handleSort = (data) => {
    dispatch(sortCategory(data));
  };
  const handleSearchs = (data)=>{
    dispatch(filterProduct(data.target.value))
  }
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" row>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
            className={styles.listCategory}
          >
            ALL
          </ListItemButton>
        </ListItem>
        {categorys.map((item, index) => {
          return (
            <ListItem
              role="none"
              key={index}
              sx={{ mx: 1 }}
              onClick={() =>handleSort(item.categoryName)}
            >
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                aria-label="Home"
                className={styles.listCategory}
              >
                {item.categoryName}
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <div className={styles.searchInput}>
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className={styles.search}
                onChange={(e) => handleSearchs(e)}
              />
            </form>
          </div>
        </ListItem>
      </List>
    </Box>
  );
}
