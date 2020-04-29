import React from "react";
import styles from './Skills.module.css';
import MySkill from "./MySkill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.skillsHeader}>Мои навыки</div>
                <div className={styles.mySkillsContainer}>
                    <MySkill/>
                    <MySkill/>
                    <MySkill/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
