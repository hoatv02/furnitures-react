import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useProductStore } from "../../../Store/Product";
import styles from "./ManageProduct.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const ManageProduct = () => {
  const [show, setShow] = useState(false);
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  useEffect(() => {
    setProducts(`http://localhost:3000/product`);
  }, []);

  return (
    <div className={`${styles.container} overflow-x-auto`}>
      <h1 class="text-3xl py-3 font-bold text-uppercase">Manage Product</h1>
      <div class="min-w-screen   flex items-center justify-center  font-sans overflow-hidden">
        <div class="w-full ">
          <div class=" shadow-md rounded">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="  opacity-100  uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">STT</th>
                  <th class="py-3 px-6 text-left">Product Name</th>

                  <th class="py-3 px-6 text-left">Price</th>
                  <th class="py-3 px-6 text-center">Quantity</th>
                  <th class="py-3 px-6 text-center">Image</th>
                  <th class="py-3 px-6 text-center">Category</th>
                  <th class="py-3 px-6 text-center">Description</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class=" text-sm font-light">
                {products.map((item, index) => {
                  return (
                    <tr class="border-b border-gray-500 ">
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">{index + 1}</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">{item.productName}</span>
                        </div>
                      </td>

                      <td class="py-3 px-6 text-center">
                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          {item.price} $
                        </span>
                      </td>
                      <td class="py-3 px-6 text-center">
                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          {item.quantity}
                        </span>
                      </td>
                      <td class=" text-center">
                        <div class="flex items-center justify-center">
                          <img
                            class="w-10 h-10 rounded-full border-gray-200 border transform hover:scale-125"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                          />
                        </div>
                      </td>
                      <td class="py-3 px-6 text-center">
                        <span class=" text-purple-600 py-1 px-3 rounded-full text-xs">
                          {item.category}
                        </span>
                      </td>
                      <td class="py-3 px-6 text-center">
                        <span class=" text-purple-600 py-1 px-3 rounded-full text-xs">
                          {item.description}
                        </span>
                      </td>
                      <td class="py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                          <IconButton
                            aria-label="Example"
                            onClick={() => setShow(!show)}
                          >
                            <MoreVertIcon />
                           
                          </IconButton> {show ? (
                              <div>
                                <ul>
                                <li>Edit</li>
                                <li>Remove</li>
                              </ul>
                              </div>
                            ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
