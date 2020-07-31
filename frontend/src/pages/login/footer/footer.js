import React from "react";

import styles from "./footer.module.css";

export const Footer = () => (
  <div
    className={`row p-5 justify-content-center align-items-center ${styles.bottomdiv}`}
  >
    <span>
      Se Sair de Casa, Use Máscara <span className={styles.heart}>&#9829;</span>.
    </span>
  </div>
);
