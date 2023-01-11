import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.loadWrapp}>
          <div className={styles.load1}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
