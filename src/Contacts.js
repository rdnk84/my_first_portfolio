import React from "react";
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>

                <form action=''>
                  <h2>Контакты</h2>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className={styles.submitButton}>Отправить</button>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
