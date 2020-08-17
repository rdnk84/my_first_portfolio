import React from "react";
import styles from './Main.module.css';
import styleContainer from '../CommonComponents/Container.module.css'

function Main() {
  return (
    <div className={`${styleContainer.mainBackground} ${styles.main}`}>
      <div className={`${styleContainer.container}`}>
        <div className={styles.intro}>
          <span>Привет!</span>
          <span>Я Елена<span>Руденко</span></span>
          <h1>front-end разработчик</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.mainPhoto}><img src="" alt=""/></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
