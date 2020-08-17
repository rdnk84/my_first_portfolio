import React from "react";
import styles from './NavMenu.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

function NavMenu() {
    return (
            <div className={styles.navMenu}>
                <a href="" className={styles.link}>Главная</a>
                <a href="" className={styles.link}>Навыки</a>
                <a href="" className={styles.link}>Проекты</a>
                <Link
                    className={styles.link}
                    activeClass={styles.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration= {500}
                >Контакты</Link>
                {/*<a href="" className={styles.link}>Контакты</a>*/}

            </div>


    );
}

export default NavMenu
