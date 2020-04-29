import React from "react";
import styles from './MySkill.module.css';

function MySkill() {
    return (
        <div className={styles.MyskillContainer}>

                <div className={styles.mySkillImg}>
                    <img src="" alt="Картинка"/>
                </div>
                <div className={styles.mySkillDescription}>
                    Подробное описание навыка
                </div>

       </div>
            );
            }

            export default MySkill;
