import React from "react";
import styles from './MySkill.module.css';
import styleTitleDescription from "../CommonComponents/TitleAndDescription.module.css";

function MySkill(props) {
    return (
        <div className={styles.MyskillContainer}>

            <div className={styles.mySkillImg}>
                <img src={props.icon}/>
            </div>
                <h3 className={`${styleTitleDescription.titleH3}`}>{props.title}</h3>
                <p className={`${styleTitleDescription.description}`}>{props.description}</p>

        </div>
    );
}

export default MySkill;
