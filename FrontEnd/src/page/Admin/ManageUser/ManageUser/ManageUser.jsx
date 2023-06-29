import React, { useEffect } from "react";
import styles from "../../../../../src/component/Admin/Tables/table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Users } from "../../../../Common/Api";
const ManageUser = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Users());
  }, []);
  console.log(user);

  return (
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
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => {
                return (
                  <tr key={index} className="mb-5">
                    <td>{index + 1}</td>
                    <td>{item.userName}</td>
                    {/* <td className="flex justify-center text-center items-center">
                      <img
                        src={`http://localhost:8000/image/${item.image}`}
                        className="w-10 h-10 border rounded-full"
                      />
                    </td> */}
                    <td>{item.email}</td>
                    <td >{item.phoneNumber}</td>
                    <td>{item.address}</td>
                    <td className="cursor-pointer">
                      <span>
                      <i className="fa-solid fa-delete-left text-[#9b2203] text-sm"></i>
                      </span>
                      <span>
                      <i className="fa-solid fa-paintbrush text-[#043790] text-sm ml-2"></i>
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
  );
};

export default ManageUser;
