import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className="flex h-[100vh]">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.loadWrapp}>
            <div className={`${styles.load1} mt-[40vh]`}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
