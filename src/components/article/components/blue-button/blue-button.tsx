import styles from './blue-button.module.scss';
import { FC } from 'react';
interface IButton {
    text: string;

}

export const BlueButton: FC<IButton> = ({ text }) => {
    return (
        <button className={styles.submit} type="submit">
            {text}
        </button>
    )
}