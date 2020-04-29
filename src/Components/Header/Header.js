import React from "react";
import styles from './Header.module.css';
import NavMenu from "./NavMenu";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NavMenu/>
                <div className={styles.burgerWrapper}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    {/*<div className={styles.burgerLine}></div>*/}

                </div>
            </div>

        </div>
    );
}

export default Header;
