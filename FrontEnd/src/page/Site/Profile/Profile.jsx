import axios from "axios";
import React ,{useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom";
import styles from './Profile.module.css'
const Profile = () => {
  // const [user,setUser] = useState<User>()
  const getInfo= localStorage.getItem("AccessToken");
  const getInfoUser = JSON.parse(getInfo);
  console.log(getInfoUser.data)
  return (
    <div>
      <div className={styles.profile_container}>
      <div className={styles.profile_heading}>
        <h3>HELLO !</h3>
        <p>MY PERSONAL INFORMATION</p>
      </div>
      <div className={`${styles.profile_content} row`}>
        <div className={`${styles.profile_avt} col-lg-4 `}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.OSOu-sQTN47Fl5StYZCoAgHaF7&pid=Api&P=0"
            alt=""
          />
        </div>
        <div className={`${styles.profile_about} col-lg-4 `}>
          <h5>ABOUT ME</h5>
          <p>
            I am an allround web developer. I am a senior programmer with good
            knowledge of front-end techniques. Vitae sapien pellentesque
            habitant morbi tristique senectus et. Aenean sed adipiscing diam
            donec adipiscing tristique risus.{" "}
          </p>
          <Link to="">LEARN MORE</Link>
        </div>

        <div className="col-lg-4">
          <h5>DETAIL</h5>
          <br></br>
          <h6>Name : {getInfoUser.data.userName}</h6><br></br>
          <h6>Phone : {getInfoUser.data.phone} </h6><br></br>
          <h6>Email : {getInfoUser.data.email}</h6><br></br>
          <h6>Address : {getInfoUser.data.address}</h6>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
