import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./Signin.module.css";
import { useNavigate } from "react-router-dom"
import axios from "axios";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate()
  const Login = async (e) => {
    e.preventDefault()
    try {
      console.log(email,password)
      const { data } = await axios.post(`http://localhost:3000/signin`, {
        email,
        password
      });
      if (data) {
        localStorage.setItem("AccessToken", JSON.stringify(data));
        setAccessToken(data);
        alert("AccessToken")
        navigate('/')
      }
    } catch (error) {}
  };

  return (
    <section className={styles.signinForm}>
      <div className={styles.imgBox}>
        <img
          src="https://images.pexels.com/photos/14579203/pexels-photo-14579203.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.formBox}>
          <h2>Login</h2>
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
              <button name="" type="submit" onClick={Login}>
                Sign in
              </button>
            </div>
            <div className={styles.inputBox}>
              <p>
                Don't have an account? <a href="">Sign up</a>
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
  );
};

export default Signin;
