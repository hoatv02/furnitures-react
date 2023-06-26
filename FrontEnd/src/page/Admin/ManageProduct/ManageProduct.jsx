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
  const {id} = useParams()
  const removeItem = async (id) => {
    const { data } = await axios.delete(`http://localhost:8000/product/${id}`);
    setProducts(products.filter((item)=> item.id !== id))
  };
  return (
    <div className="">
      <div className={`${styles.container} overflow-x-auto pl-2`}>
        <div className='flex w-full justify-between items-center border-b mb-2 '>
          <div className=" items-center justify-center py-2">
            <div><h1 className="text-3xl  ">Product</h1>
              <input type="text" onChange={(e)=>handleOnChange(e)}/>
            </div>
          </div>
          <div>
            <Link to='/admin/addProduct'>
              <Button variant="contained" color="success">
                Thêm mới
              </Button>
            </Link>
          </div>
        </div>
        <div className="min-w-screen flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="shadow-sm  text-xs">
              {/* {
                resultSearch.map((item, index) => {
                  return (
                    <div className="border-b mb-1  pt-2 py-3 " key={index}>Name
                      <div className="grid grid-cols-[1fr,2fr]">
                        <div className="flex">
                          <div className={styles.imageProduct}>
                            <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/346809415_551325473744360_5475926670841503409_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=v0csTF0M6OkAX8rTA3O&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDcXaKK-kgzpWYh3H4Ei9dYxRtdMN8DBLRukAoSFFiB7w&oe=646B45BF" alt="" />
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
                              src={`http://localhost:8000/image/${item.image}`}
                              class="w-10 h-10 rounded-full border-gray-200 border transform hover:scale-125"
                            />
                          </div>
                        </div>
                        <div className={styles.options}>
                          <span><i className="fa-solid fa-cloud-arrow-down"></i></span>
                          <span><i className="fa-solid fa-eye" ></i></span>
                          <span><i className="fa-solid fa-trash"></i></span>
                          <span><i className="fa-regular fa-pen-to-square"></i></span>
                        </div>
                      </div>
                    </div>
                  )
                })
              } */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ManageProduct;
