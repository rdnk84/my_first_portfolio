import React from "react";
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Руденко Елена</h2>
      <div className={styles.container}>
        <div className={styles.socialIcon}>Vk</div>
        <div className={styles.socialIcon}>Inst</div>
        <div className={styles.socialIcon}>Fb</div>
      </div>
      <div>&Copy; Все права защищены</div>
    </div>
  );
}

export default Footer;
