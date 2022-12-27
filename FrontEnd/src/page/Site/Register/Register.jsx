import React from 'react'
import styles from './Register.module.css'
import GoogleIcon from '@mui/icons-material/Google';
const Register = () => {
  return (
    <section className={styles.signinForm}>
        <div className={styles.imgBox}>
            <img src="https://images.pexels.com/photos/14579203/pexels-photo-14579203.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className={styles.contentBox}>
            <div className={styles.formBox}>
                <h2>REGISTER</h2>
                <form action="">
                    <div className={styles.inputBox}>
                        <span>Username</span>
                        <input type="text" name=""/>
                    </div>
                    <div className={styles.inputBox}>
                        <span>Email</span>
                        <input type="text" name=""/>
                    </div>
                    <div className={styles.inputBox}>
                        <span>Phone</span>
                        <input type="text" name=""/>
                    </div>
                    <div className={styles.inputBox}>
                        <span>Password</span>
                        <input type="password" name=""/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="submit" name="" value="Sign in"/>
                    </div>
                    <div className={styles.inputBox}>
                        <p>Don't have an account? <a href=''>Sign up</a></p>
                    </div>
                </form>
                <h3>Login with social media </h3>
                <ul className={styles.iconSignin}>
                    <li><GoogleIcon/></li>
                    <li><GoogleIcon/></li>
                    <li><GoogleIcon/></li>

                </ul>
            </div>
        </div>
    </section>
    )
}

export default Register