import React from "react";

import styles from "./CustomSpinner.module.css";

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.ldsdualRing}></div>
  </div>
);

export default Spinner;
