import React, { useState } from "react";
import styles from "./Register.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Loading from "../../../component/Site/Loading/Loading";
const Registers = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  // const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (user) => {
    try {
      // const { data } = await axios.post(`http://localhost:3000/signup`, user);
      //  setLoading(true)
      // setLoading(true);
      setModal(true);
      setTimeout(() => {
        setModal(false);
      }, 10000000000000000);
      // navigate("/signin");
    } catch (error) {
    }
    // setLoading(false);
  };

  const removeModal = () => {
    setModal(false);
    // navigate("/signin");
  };
  return (
    <div>
      <section className={styles.signinForm}>
        <div className={styles.imgBox}>
          <img
            src="https://e.khoahoc.tv/photos/image/012013/04/thiennhiennuocphap4.jpg"
            alt=""
          />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.formBox}>
            <h2>REGISTER</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputBox}>
                <span>Username</span>
                <input type="text" id="userName" {...register("userName")} />
              </div>
              <div className={styles.inputBox}>
                <span>Email</span>
                <input type="text" id="email" {...register("email")} />
              </div>
              <div className={styles.inputBox}>
                <span>Phone</span>
                <input
                  type="text"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                />
              </div>
              <div className={styles.inputBox}>
                <span>Address</span>
                <input type="text" id="address" {...register("address")} />
              </div>
              <div className={styles.inputBox}>
                <span>Password</span>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className={styles.inputBox}>
                <input type="submit" id="" value="Register" />
              </div>
              <div className={styles.inputBox}>
                <p>
                  Don't have an account? <Link to="/signin">Sign in</Link>
                </p>
              </div>
            </form>
            <h3>Login with social media </h3>
            <ul className={styles.iconSignin}>
              <li>
                <FacebookOutlinedIcon />
              </li>
              <li>
                <GoogleIcon />
              </li>
              <li>
                <GoogleIcon />
              </li>
            </ul>
          </div>
        </div>
      </section>
       {/* {loading ? <Loading/> :  <div> */}
      {modal ? (
        <div
          class="relative z-10 "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity transition delay-5000 duration-300 ease-in-out"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <p class="justify-right text-right p-2">
                  <CloseIcon onClick={() => removeModal()} />
                </p>

                <div class="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <p class="pb-6">
                        <CheckCircleIcon className={styles.iconSuccess} />
                      </p>
                      <h3
                        class="text-lg font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Bạn đã đăng kí tài khoản thành công
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Hãy đăng nhập ngay để trải nghiệm website một cách tốt
                          nhất !!!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:flex sm:flex-row justify-center sm:px-6 text-align:center">
                  <button
                    onClick={() => removeModal()}
                    class=" inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <ArrowRightAltIcon /> Trang Đăng Nhập
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* </div>} */}
     
    </div>
  );
};

export default Registers;
