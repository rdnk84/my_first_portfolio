import React from "react";
import styles from './Contacts.module.css';
import Title from "../CommonComponents/Title";
import styleContainer from "../CommonComponents/Container.module.css";
import Fade from 'react-reveal/Fade';
import ContactReduxForm from "./ContactMeForm";
import {contactsAPI} from "./ContactsAPI";

function Contacts() {
    const onSubmit = (value) => {
        contactsAPI.sendMessage(value)
        //как-то отправляем на сервер
    }
    return (
        <div id="contacts" className={`${styleContainer.mainBackground} ${styles.contacts}`}>
            <Fade bottom>
                <div className={`${styleContainer.container}`}>
                    <Title text={'Контакты'}/>
                    <ContactReduxForm onSubmit={onSubmit}/>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
