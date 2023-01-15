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
import { useProductStore } from "../../../Store/Product";
import {
  useCategoryChangeStore,
  useCategoryStore,
} from "../../../Store/Category";
import { useEffect } from "react";
export default function ListCategory() {
  const setCategoryName = useCategoryChangeStore(
    (state) => state.setCategoryName
  );
  const setProducts = useProductStore((state) => state.setProducts);
  const setCategorys = useCategoryStore((state) => state.setCategorys);
  const categorys = useCategoryStore((state) => state.categorys);
  const handleSearchs = (e) => {
    e.preventDefault();
    const valueInput = e.target.value;
    setProducts(valueInput);
    // }
  };

  useEffect(() => {
    setCategorys();
  }, []);
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" row>
        <ListItem role="none" >
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
            <ListItem role="none" key={index} sx={{mx:1}} onClick={()=>setCategoryName(item.categoryName)}>
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
            <form action="" onChange={handleSearchs}>
              <input
                type="text"
                placeholder="Search"
                className={styles.search}
              />
            </form>
          </div>
        </ListItem>
      </List>
    </Box>
  );
}
