import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import Loading from "../../../component/Site/Loading/Loading";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const Login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:8000/signin`, {
        email,
        password,
      });
      if (data) {
        localStorage.setItem("AccessToken", JSON.stringify(data));
        setAccessToken(data);
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/')
      }, 500);
    } catch (error) {}
  };
  return (
    <>
      {loading && <Loading />}
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
            <form action="">
              <div className={styles.inputBox}>
                <span>Email</span>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <span>Password</span>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.remember}>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" /> Remember me
                </label>
              </div>
              <div className={styles.inputBox}>
                <a name="" className="border border-red-500" type="submit" onClick={Login}>
                  Sign in
                </a>
              </div>
              <div className={styles.inputBox}>
                <p>
                  Don't have an account? <Link to="/register">Sign up</Link>
                </p>
              </div>
            </form>
            <h3>Login with social media </h3>
            <ul className={styles.iconSignin}>
              <li>
                <GoogleIcon />
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
    </>
  );
};

export default Signin;
