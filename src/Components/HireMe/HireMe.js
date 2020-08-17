import React from "react";
import styles from './HireMe.module.css';
import Title from "../CommonComponents/Title";
import styleContainer from "../CommonComponents/Container.module.css";
import Fade from 'react-reveal/Fade';

function HireMe() {
    return (
        <div className={`${styleContainer.mainBackground} ${styles.hireBlock}`}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${styles.container}`}>
                {/*<h2 className={styles.title}>Рассматриваю варианты удаленной работы</h2>*/}
                <div className={styles.mainTitle}>
                    <Title text={"Рассматриваю варианты удаленной работы"}/>
                </div>
                <a className={styles.hireBtn} href="">Нанять меня</a>
            </div>
            </Fade>
        </div>
    );
}

export default HireMe;
