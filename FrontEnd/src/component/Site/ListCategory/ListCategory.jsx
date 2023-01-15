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
export default function ListCategory() {
  const setProducts = useProductStore((state) => state.setProducts)
  // console.log(setProducts)
  const handleSearchs = (e)=> {
    // (e) => {
      e.preventDefault();
      const valueInput = e.target.value;
      setProducts(valueInput);
    // }
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
        <ListDivider />
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            className={styles.listCategory}
          >
            Products
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            className={styles.listCategory}
          >
            Blog
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <div className={styles.searchInput}>
            <form
              action=""
              onChange={handleSearchs}
            >
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
