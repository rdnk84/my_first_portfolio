import React from "react";
import styles from './Skills.module.css';
import MySkill from "./MySkill";
import Title from "../CommonComponents/Title";
import reactIcon from "../../assets/image/react_color.png"
import jsIcon from "../../assets/image/js_color.png"
import htmlIcon from "../../assets/image/html_color.png";
import Fade from 'react-reveal/Fade';


function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    return (
        <div className={styles.skills}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title text={'Мои навыки'}/>
                    <div className={styles.mySkillsContainer}>
                        <MySkill title={"JavaScript"}
                                 icon={js}
                                 description={"Подробное описание навыкаLorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                                 "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                                 "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>

                        <MySkill title={"React"}
                                 icon={react}
                                 description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
                                 "dolore eu fugiat nulla pariatur. "}/>
                        <MySkill title={"Html,CSS"}
                                 icon={html}
                                 description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                                 "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" +
                                 "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                                 "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
                                 "sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
