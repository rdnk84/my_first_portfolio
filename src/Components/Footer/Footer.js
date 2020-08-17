import React from "react";
import styles from './Footer.module.css';
import styleContainer from "../CommonComponents/Container.module.css";
import Title from "../CommonComponents/Title";
import inIcon from "../../assets/image/social/in.svg"
import fbIcon from "../../assets/image/social/fb1.svg"
import igIcon from "../../assets/image/social/ig1.png"
import whatsUpIcon from "../../assets/image/social/Asset 8.svg"
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div className={`${styleContainer.mainBackground} ${styles.footer}`}>
            <Fade clear>
                <div className={`${styleContainer.container} ${styles.container}`}>
                    <Title text={"Руденко Елена"}/>
                    <div className={styles.socialBlock}>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={inIcon} alt="vk"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={fbIcon} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={igIcon} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="">
                                <img src={whatsUpIcon} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
            <span className={styles.copyright}>&copy;Все права защищены</span>
        </div>
    );
}

export default Footer;
