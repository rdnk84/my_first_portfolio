import React from "react";
import styles from './MyProject.module.css';

function MyProject() {
    return (
        <div className={styles.Container}>

                <div className={styles.myProjectImg}>
                    <img src="" alt="Картинка"/>
                    <button>Смотреть</button>
                </div>
                <div className={styles.myProjectDescription}>
                    <h3>Название проекта</h3>
                    <p>Краткое описание проекта</p>
                </div>

       </div>
            );
            }

            export default MyProject;
