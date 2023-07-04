import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { html2canvas } from "html2canvas";
import styles from "./table.module.css";
import { useSelector } from "react-redux";
import Chart from "../Chart/Chart";
const Tables = () => {
  const product = useSelector((state) => state.product.data);
  const downLoadPDF = () => {
    const capture = document.querySelector(".tableAbc");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      doc.addImage(imgData, "PNG", 0, 0, 210, 297);
      doc.save("receipt.pdf");
    });
  };
  const [search,setSearch] = useState([])
  useEffect(()=>{
    setSearch(product)
  },[search])
  const handleSearch = (e)=>{
    const res = product.filter((item)=>item.productName.toLowerCase().includes((e.target.value).toLowerCase()))
    setSearch(res)
  }
  return (
    <div className="grid grid-cols-[7fr,2fr]">
      <div>
        <main className={styles.container}>
          <div className={styles.date}>
            <div className={styles.recent_orders}>
              <div className={styles.abc}>
                <div className={styles.sort}>
                  <label for="state">Hiển thị</label>
                  <select
                    name="state"
                    id={styles.maxRows}
                    className="border-none outline-none rounded-md py-1"
                  >
                    <option value="">10</option>
                    <option value="">25</option>
                    <option value="">50</option>
                    <option value="">100</option>
                  </select>
                 <button onclick={downLoadPDF} ><i className="text-[#037e01] fa-solid fa-download ml-10 text-3xl" ></i></button>
                </div>

                <div className={`${styles.search_table} border rounded-md`}>
                  <div
                    className={`${styles.icon} flex text-center justify-center items-center ml-3 `}
                  ></div>
                  <div className={`${styles.input} p-2`}>
                    <input
                      type="text"
                      id={styles.myInput}
                      onkeyup="tableSearch()"
                      placeholder="Search"
                      className="pl-2 outline-none"
                      onChange={(e)=>handleSearch(e)}
                    />
                    <span
                      className={styles.clear}
                      onclick="document.getElementById('myInput').value = ''"
                    ></span>
                  </div>
                </div>
              </div>
              <table
                className={`${styles.table} tableAbc`}
                id={styles.myTable}
                data-filter-control="true"
                data-show-search-clear-button="true"
              >
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Danh mục sản phẩm</th>
                    <th>Tải xuống</th>
                  </tr>
                </thead>
                <tbody>
                  {search.map((item, index) => {
                    return (
                      <tr key={index} className="mb-5">
                        <td>{index + 1}</td>
                        <td className="font-bold text-gray-700">{item.productName}</td>
                        <td className="flex justify-center text-center items-center">
                          <img
                            src={`http://localhost:8000/image/${item.image}`}
                            className="w-10 h-10 border rounded-full"
                          />
                        </td>
                        <td className="text-red-400 font-semibold">{item.price} VND</td>
                        <td className="text-white">
                        {item.quantity > 100 ? (
                                  <span className="bg-green-500 px-1 py-1 text-xs rounded-sm shadow-md">
                                    Còn hàng
                                  </span>
                                ) :(item.quantity < 100 && item.quantity > 0)?(
                                  <span className="bg-[#f0e800] py-1 px-1 rounded-sm shadow-md">
                                    Sắp hết
                                  </span>
                                ): (
                                  <span className="bg-red-500 py-1 px-1 rounded-sm shadow-md">
                                    Hết hàng
                                  </span>
                                )}
                        </td>
                        <td>{item.categoryName}</td>
                        <td>
                          <a href="#">download</a>
                          <span>
                            <i className="text-[#037e01] fa-solid fa-download ml-2 text-sm"></i>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className={styles.pagination}>
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a className={styles.active} href="#">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="mt-[1rem]">
        <Chart />
      </div>
    </div>
  );
};

export default Tables;
