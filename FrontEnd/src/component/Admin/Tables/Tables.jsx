import React from "react";
import { jsPDF } from "jspdf";
import { html2canvas } from "html2canvas";
import styles from "./table.module.css";
import { useSelector } from "react-redux";
const Tables = () => {
  const product = useSelector((state) => state.product.data);
  const downLoadPDF = () => {
    const capture = document.querySelector(".boxContainer");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      doc.addImage(imgData, "PNG", 0, 0, 210, 297);
      doc.save("receipt.pdf");
    });
  };
  return (
    <div className="">
      {" "}
      <main className={styles.container}>
        <div className={styles.date}>
          <div className={styles.recent_orders}>
            <div className={styles.abc}>
              <div className={styles.sort}>
                <label for="state">Tampilkan</label>
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
                <i className="text-[#037e01] fa-solid fa-download ml-10 text-3xl"></i>
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
                  />
                  <span
                    className={styles.clear}
                    onclick="document.getElementById('myInput').value = ''"
                  ></span>
                </div>
              </div>
            </div>
            <table
              className={styles.table}
              id={styles.myTable}
              data-filter-control="true"
              data-show-search-clear-button="true"
            >
              <thead >
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
                {product.map((item, index) => {
                  return (
                    <tr key={index} className="mb-5">
                      <td>{index + 1}</td>
                      <td>{item.productName}</td>
                      <td className="flex justify-center text-center items-center"><img src={`http://localhost:8000/image/${item.image}`} className="w-10 h-10 border rounded-full"/></td>
                      <td>{item.price}</td>
                      <td className="text-white">
                        {item.quantity > 0 ? (
                          <span className="bg-green-500 px-2 py-1 text-xs rounded-full">
                            Còn hàng
                          </span>
                        ) : (
                          <span className="bg-red-500 py-1 px-2 rounded-full">
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
  );
};

export default Tables;
