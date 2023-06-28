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
          <div class="min-w-screen   flex items-center justify-center  font-sans overflow-hidden">
            <div class="w-full ">
              <div class=" shadow-md rounded">
                <table class="min-w-max w-full table-auto">
                  <thead>
                    <tr class="  opacity-100  uppercase text-sm leading-normal">
                      <th class="py-3 px-3 text-left">STT</th>
                      <th class="py-3 px-3 text-left">Category Name</th>
                      <th class="py-3 px-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody class=" text-sm font-light">
                    {category.map((item, index) => {
                    return (
                      <tr class="border-b  " key={index}>
                        <td class=" px-3 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <span class="font-medium">{index + 1}</span>
                          </div>
                        </td>
                        <td class=" px-3 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <span class="font-medium">{item.categoryName}</span>
                          </div>
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
                                  >
                                    <IconButton aria-label="Example">
                                      <DeleteIcon className={styles.Icon} />
                                    </IconButton>
                                  </li>
                                  <Link to={`/admin/editCategory/${item._id}`}>
                                    <li>
                                      <IconButton aria-label="Example">
                                        <ModeEditOutlineIcon
                                          className={styles.Icon} />
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
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ManageCategory;
