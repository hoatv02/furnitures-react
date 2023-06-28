import React from "react";
import styles from "./PageError.module.css";
const PageError = () => {
  return (
    <div className={styles.aaa}>
      <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
        <header className={styles.top_header} />
        <div>
          <div className={styles.starsec} />
          <div className={styles.starthird} />
          <div className={styles.starfourth} />
          <div className={styles.starfifth} />
        </div>
        <div className={styles.lamp__wrap}>
          <div className={styles.lamp}>
            <div className={styles.cable} />
            <div className={styles.cover} />
            <div className={styles.in_cover}>
              <div className={styles.bulb} />
            </div>
            <div className={styles.light} />
          </div>
        </div>
      </a>
      <section className={styles.error}>
        <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank"></a>
        <div className={styles.serror__content}>
          <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
            <div className={`${styles.error__message} ${styles.message}`}>
              <h1 className={styles.message__title}>Page Not Found</h1>
              <p className={styles.message__text}>
                We're sorry, the page you were looking for isn't found here. The
                link you followed may either be broken or no longer exists.
                Please try again, or take a look at our.
              </p>
            </div>
          </a>
          <div className={`${styles.error__nav} ${styles.e_nav}`}>
            <a
              href="https://codepen.io/uiswarup/full/yLzypyY"
              target="_blank"
            ></a>
            <a href target="_blanck" className={`${styles.e_nav__link} `} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageError;
