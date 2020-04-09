import React from "react";
import styles from './Projects.module.css';
import MySkill from "./MySkill";
import MyProject from "./MyProject";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.myProjectsHeader}>
          <h2>Мои работы</h2>
        </div>
        <div className={styles.myProjectsContainer}>
          <MyProject/>
          <MyProject/>

        </div>

      </div>
    </div>
  );
}

export default Projects;
