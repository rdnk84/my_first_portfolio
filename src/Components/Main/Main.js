import React from "react";
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span>Привет!</span>
          <span>Меня зовут Елена,</span>
          <span>я начинающий front-end разработчик</span>
        </div>
        <div className={styles.photo}>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Main;
