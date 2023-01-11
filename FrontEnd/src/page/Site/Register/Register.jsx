import React, { useState } from "react";
import styles from "./Register.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Loading from "../../../component/Site/Loading/Loading";
import ModalSuccessFull from "../../../component/Site/ModalSuccessFull/ModalSuccessFull";
const Registers = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (user) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`http://localhost:3000/signup`, user);
      setLoading(false);
      setModal(true);
      // navigate("/signin");
    } catch (error) {
      setLoading(false);
    }
  };

  const removeModal = () => {
    setModal(false);
    // navigate("/signin");
  };
  return (
    <>
      {loading && <Loading />}
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
              <div class="inline-flex">
                <div>
                  <h2>REGISTER</h2>
                </div>
                <div className={styles.homePage}>
                  <Link to="/">
                    Về trang chủ <ArrowRightAltIcon />{" "}
                  </Link>
                </div>
              </div>
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

        {modal && <ModalSuccessFull removeModal={removeModal} />}
      </div>
    </>
  );
};

export default Registers;
