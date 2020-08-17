import React from "react";
import styles from './MyProject.module.scss';
import styleTitleDescription from "../CommonComponents/TitleAndDescription.module.css";



function MyProject(props) {
    return (

            <div className={styles.myProjectContainer}>
                <div className={styles.imageContainer} style={props.style}>
                 <a href="" className={styles.viewBtn}>Смотреть</a>
                </div>
                <div className={styles.projectInfo}>
                    <h3 className={`${styleTitleDescription.titleH3} ${styles.projectTitle}`}>{props.title}</h3>
                    <p className={`${styleTitleDescription.description} ${styles.projectDescription}`}
                       >{props.description}</p>
                </div>

            </div>

    );
}

export default MyProject;
