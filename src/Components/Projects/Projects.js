import React from "react";
import styles from './Projects.module.scss';
import MyProject from "./MyProject";
import Title from "../CommonComponents/Title";
import TodoImage from "../../assets/image/todo.jpg"
import SocialImage from "../../assets/image/socialNetwork.jpg"
import styleContainer from "../CommonComponents/Container.module.css";
import Fade from 'react-reveal/Fade';

function Projects() {
    const social = {
        backgroundImage: `url(${SocialImage})`
    };
    const todoList = {
        backgroundImage: `url(${TodoImage})`
    };
    return (
        <div className={`${styleContainer.mainBackground} ${styles.projects}`}>
            <Fade bottom>
            <div className={`${styleContainer.container}`}>
                <Title text={"Мои работы"}/>
                <div className={styles.myProjectsContainer}>
                    <MyProject
                        style={social}
                        title={"Social network"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" +
                               " incididunt ut labore et dolore magna aliqua."}/>
                    <MyProject
                        style={todoList}
                        title={"Todo list"}
                               description={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}/>

                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Projects;
