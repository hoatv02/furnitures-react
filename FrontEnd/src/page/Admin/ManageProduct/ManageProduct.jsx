import { Button, IconButton, Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useProductStore } from "../../../Store/Product";
import styles from "./ManageProduct.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Link, useParams } from "react-router-dom";
const ManageProduct = () => {
  const [show, setShow] = useState(false);
  const setProducts = useProductStore((state) => state.setProducts);
  const products = useProductStore((state) => state.products);
  useEffect(() => {
    setProducts(products);
  }, []);
  const { id } = useParams()
  const removeItem = async (id) => {
    const { data } = await axios.delete(`http://localhost:3000/product/${id}`);
    setProducts(products.filter((item) => item.id !== id))
  };
  return (
    <div>
      <div className={`${styles.container} overflow-x-auto`}>
        <div className='flex w-full justify-between items-center'>
          <div><h1 class="text-3xl py-3 ">Quản lý sản phẩm</h1></div>
          <div>
            <Link to='/admin/addProduct'>
              <Button variant="contained" color="success">
                Thêm mới
              </Button>
            </Link>
          </div>
        </div>
        <div class="min-w-screen flex items-center justify-center  font-sans overflow-hidden">
          <div class="w-full ">
            <div class=" shadow-md rounded">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr class="  opacity-100  uppercase text-sm leading-normal">
                    <th class="py-3 px-2 text-left">STT</th>
                    <th class="py-3 px-3 text-left">Product Name</th>
                    <th class="py-3 px-3 text-left">Price</th>
                    <th class="py-3 px-3 text-left">Quantity</th>
                    <th class="py-3 px-3 text-center">Image</th>
                    <th class="py-3 px-3 text-left">Category</th>
                    <th class="py-3 px-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody class=" text-sm font-light">
                  {products.map((item, index) => {
                    return (
                      <tr class="border-b" key={index}>
                        <td class=" px-3 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <span class="font-medium">{index + 1}</span>
                          </div>
                        </td>
                        <td class=" px-3 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <span class="font-medium">{item.productName}</span>
                          </div>
                        </td>

                        <td class="font-bold  text-left">
                          <span class=" text-red-500 py-1 px-3 rounded-full text-xs">
                            {item.price}
                          </span>
                        </td>
                        <td className={`${styles.quantity} px-3 text-left `}>
                          <span class=" py-1 rounded-full text-xs">
                            {item.quantity > 0 ? (
                              <span class="bg-green-500 px-1 py-1 text-xs rounded-full">
                                Còn hàng
                              </span>
                            ) : (
                              <span class="bg-red-500 py-1 px-1 rounded-full">
                                Hết hàng
                              </span>
                            )}
                          </span>
                        </td>
                        <td class=" text-left">
                          <div class="flex items-center justify-center">
                            <img
                              src={`http://localhost:3000/image/${item.image}`}
                              class="w-10 h-10 rounded-full border-gray-200 border transform hover:scale-125"
                            />
                          </div>
                        </td>
                        <td class=" px-3 text-left">
                          <span class=" py-1  rounded-full text-xs">
                            {item.category}
                          </span>
                        </td>
                        <td class=" px-3 text-left">
                          <div class="flex item-center justify-center">
                            <IconButton
                              aria-label="Example"
                              onClick={() => setShow(!show)}
                            >
                              <MoreVertIcon />
                            </IconButton>{" "}
                            {show ? (
                              <div>
                                <ul class="inline-flex ">
                                  <li
                                    class="  rounded-full"
                                    onClick={() => removeItem(item._id)}
                                  >
                                    <IconButton aria-label="Example">
                                      <DeleteIcon className={styles.Icon} />
                                    </IconButton>
                                  </li>
                                  <Link to={`/admin/editProduct/${item._id}`}>
                                    <li>
                                      <IconButton aria-label="Example">
                                        <ModeEditOutlineIcon
                                          className={styles.Icon}
                                        />
                                      </IconButton>
                                    </li>
                                  </Link>
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
      <Pagination />
    </div>
  );
};

export default ManageProduct;
