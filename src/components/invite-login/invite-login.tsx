import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './invite-login.module.scss';
import { Button } from 'components/button/button';

const InviteLogin: FC<any> = () => {
    return (

        <div className={styles.box}>
            <div className={styles.round}>
                <Link to="/login">
                    <p className={styles.text}>Хотите написать комментарий?
                        <span className={styles.round}>Авторизуйтесь!</span></p>
                </Link>
            </div>
        </div>






    )
}

export default InviteLogin;