import { FC } from 'react';
import styles from './like-button.module.scss';

interface ILike {
    onClick?: () => void;
}

export const Like: FC<ILike> = () => {
    return (
        <button className={styles.like}>
        </button>
    );
};


