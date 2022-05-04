import React, { FC } from 'react';
import styles from './like.module.scss';

interface IButtons {
    onClick?: () => void;

}

export const Like: FC<IButtons> = ({ onClick }) => {
    return (
        <button className={styles.buttonico} onClick={onClick}>
        </button>
    );
};