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
  // const [show, setShow] = useState(false);
  // const setProducts = useProductStore((state) => state.setProducts);
  // const products = useProductStore((state) => state.products);
  // useEffect(() => {
  //   setProducts(products);
  // }, []);
  // const [resultSearch,setResultSearch] = useState(products)
  // const { id } = useParams()
  // const removeItem = async (id) => {
  //   const { data } = await axios.delete(`http://localhost:3000/product/${id}`);
  //   setProducts(products.filter((item) => item.id !== id))
  // };
  const handleOnChange = (e)=>{
    // const result = products.filter((item)=>item.productName.toLowerCase().includes(e.target.value))
    // setResultSearch(result)
  }
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
                          <div className=" ml-2">
                            <div className="grid w-full ">
                              <div className=""><strong>{item.productName}</strong></div>
                            </div>
                            <p>Gía : {item.price} VND</p>
                            <p>Số lượng : {item.quantity}</p>
                            <span className={styles.statusIcon}>Trạng thái : <span>{(item.quantity > 0) ? (<i className={`${styles.status} fa-solid fa-circle`} ></i>) : (<i className={`${styles.statusFire} fa-solid fa-circle`} ></i>)}</span> {(item.quantity > 0) ? " Còn hàng " : ' Hết hàng '}</span>
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
