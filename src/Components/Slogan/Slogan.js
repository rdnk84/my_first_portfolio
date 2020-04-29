import React from "react";
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
          <span>Рассматриваю варианты удаленной работы</span>
        {/*<h3>Рассматриваю варианты удаленной работы</h3>*/}
        <div className={styles.hireButton}><button>Нанять меня</button></div>

      </div>
    </div>
  );
}

export default Slogan;
