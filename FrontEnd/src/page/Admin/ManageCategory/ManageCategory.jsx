import { Button, IconButton, Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useProductStore } from "../../../Store/Product";
import styles from "../ManageProduct/ManageProduct.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ManageCategory = () => {
  const [show, setShow] = useState(false);
  const category = useSelector((state)=>state.category.data)
  const { id } = useParams();
  // const removeItem = async (id) => {
  //   try {
  //     // let confirmItem = confirm("Bạn chắc chắn muốn xóa danh mục này ?");
  //     // if (confirmItem == true) {
  //     const { data } = await axios.delete(
  //       `http://localhost:8000/category/${id}`
  //     );
  //     console.log(data);
  //     // console.log(setCategorys(categorys.filter((item) => item.id !== id)));
  //     // }
  //   } catch (error) {
  //     return;
  //   }
  // };
  return (
    <div>
      <div>
        <div className={`${styles.container} overflow-x-auto`}>
        <div className="flex w-full justify-between items-center border-b mb-2 ">
          <div className=" items-center justify-center py-2">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-3xl  mr-3">Management Category</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div >
              <input type="text" className=" border-[#ff4584] rounded-md outline-none text-[16px]" placeholder="Tìm kiếm...."/>
            </div>
            <Link to="/admin/addCategory">
              <Button variant="contained" style={{backgroundColor:"#ff4584",fontSize:"16px"}} >
                Thêm mới
              </Button>
            </Link>
          </div>
        </div>
          <div className="min-w-screen   flex items-center justify-center  font-sans overflow-hidden">
            <div className="w-full ">
              <div className=" shadow-md rounded">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="  opacity-100  uppercase text-sm leading-normal">
                      <th className="py-3 px-3 text-left">STT</th>
                      <th className="py-3 px-3 text-left">Category Name</th>
                      <th className="py-3 px-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className=" text-sm font-light">
                    {category.map((item, index) => {
                    return (
                      <tr className="border-b  " key={index}>
                        <td className=" px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{index + 1}</span>
                          </div>
                        </td>
                        <td className=" px-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">{item.categoryName}</span>
                          </div>
                        </td>

                        <td className=" px-3 text-left">
                          <div className="flex item-center justify-center">
                              <div>
                                <ul className="inline-flex gap-2">
                                  <li
                                    className="p-1 bg-gray-400 text-white hover:bg-gray-500 "
                                  >
                                    <IconButton aria-label="Example" className="w-5 h-5 overflow-hidden">
                                      <DeleteIcon className={styles.Icon} />
                                    </IconButton>
                                  </li>
                                  <Link to={`/admin/editCategory/${item._id}`}>
                                    <li className="p-1 bg-gray-400 text-white hover:bg-gray-500">
                                      <IconButton aria-label="Example" className="w-5 h-5">
                                        <ModeEditOutlineIcon
                                          className={styles.Icon} />
                                      </IconButton>
                                    </li>
                                  </Link>
                                </ul>
                              </div>
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
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ManageCategory;
