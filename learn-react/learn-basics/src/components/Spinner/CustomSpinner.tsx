import React from "react";

import styles from "./CustomSpinner.module.scss";

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.ldsdualRing}></div>
  </div>
);

export default Spinner;
