import React from "react";
import styles from "./Error.module.css";

function Error() {
  return (
    <div>
      <div className={styles.spann}>
      <span className={styles.span1}>Home / </span>
        <span className={styles.span2}>404 Error</span>
      </div>
      
      <div className={styles.Error}>
        <h1>404 Not Found</h1>

        <div className={styles.error_btn}>
          <button>Back To Homepage</button>
        </div>
      </div>
    </div>
  );
}

export default Error;
