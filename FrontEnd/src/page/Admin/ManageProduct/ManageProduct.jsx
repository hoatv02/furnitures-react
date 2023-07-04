import { Button,  Pagination } from "@mui/material";
import React, {  useState } from "react";
import styles from "./ManageProduct.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const ManageProduct = () => {
  const product = useSelector((state) => state.product.data);
  const [resultSearch,setResultSearch] = useState(product)
  const handleSearch = (e)=>{
    const a = e.target.value
    const result = product.filter((item)=>item.productName.toLowerCase().includes(a.toLowerCase()))
    setResultSearch(result)
  }

  const handleDelete =async (id)=>{
    try {
      if (window.confirm('Bạn có chắc muốn xóa?')) {
        const {data} = await axios.delete(`http://localhost:8000/product/${id}`)
      }else{
        return
      }
    } catch (error) {
      return
    }
  }

  return (
    <div className="">
      <div className={`${styles.container} overflow-x-auto pl-2 mb-10`}>
        <div className="flex w-full justify-between items-center border-b mb-2 ">
          <div className=" items-center justify-center py-2">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-3xl  mr-3">Management Product</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div >
              <input type="text" className=" border-[#ff4584] rounded-md outline-none text-[16px]" placeholder="Tìm kiếm...." onChange={(e)=>handleSearch(e)}/>
            </div>
            <Link to="/admin/addProduct">
              <Button variant="contained" style={{backgroundColor:"#ff4584",fontSize:"16px"}} >
                Thêm mới
              </Button>
            </Link>
          </div>
        </div>
        <div className="min-w-screen flex items-center justify-center  font-sans overflow-hidden download">
          <div className="w-full ">
            <div className="shadow-sm  text-xs">
              {resultSearch.map((item, index) => {
                return (
                  <div className="border-b mb-1  pt-2 py-3 abc" key={index}>
                    {/* Name */}
                    <div className="grid grid-cols-[1fr,2fr]">
                      <div className="flex">
                        <div className={styles.imageProduct}>
                          <img
                            src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/356887807_301301542239503_5941088471849827208_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=T3I9fguYT4cAX-W-wKd&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA7g16O4dtH1frGEKWocopMMv7HlD7vgPLobgmpzKfm0Q&oe=64A438A6"
                            alt=""
                          />
                        </div>
                        <div className="grid ">
                          <div className="grid cols">
                            <div className=" px-3 text-left whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="font-medium">
                                  {item.productName}
                                </span>
                              </div>
                            </div>
                            <div className="font-bold  text-left">
                              <span className=" text-red-500 py-1 px-3 rounded-full text-xs">
                                {item.price}
                              </span>
                            </div>
                            <div
                              className={`${styles.quantity} px-3 text-left `}
                            >
                              <span className=" py-1 rounded-full text-xs">
                                Trạng thái :{" "}
                                {item.quantity > 100 ? (
                                  <span className="bg-green-500 px-1 py-1 text-xs rounded-full w-[64.55px]">
                                    Còn hàng
                                  </span>
                                ) :(item.quantity < 100 && item.quantity > 0)?(
                                  <span className="bg-[#f0e800] py-1 px-1 rounded-full w-[64.55px]">
                                    Sắp hết
                                  </span>
                                ): (
                                  <span className="bg-red-500 py-1 px-1 rounded-full w-[64.55px]">
                                    Hết hàng
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                          {/* <div className="flex justify-center items-center text-center">
                          <td className=" text-left">
                            <div className="flex items-center justify-center">
                              <img
                                src={`http://localhost:8000/image/${item.image}`}
                                className="w-10 h-10 rounded-full border-gray-200 border transform hover:scale-125"
                              />
                            </div>
                          </td>
                        </div> */}
                        </div>
                      </div>
                      <div className={styles.options}>
                        <span>
                          <i className="fa-solid fa-cloud-arrow-down" ></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <span onClick={()=>handleDelete(item._id)}>
                          <i className="fa-solid fa-trash"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-pen-to-square"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-6 mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default ManageProduct;
