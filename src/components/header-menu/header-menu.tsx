import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './header-menu.module.scss';
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/images/edit-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/settings-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/logout-icon.svg';

export const HeaderMenu: FC = () => {
  return (
    <nav className={styles.main}>
      <Link to="" className={styles.link}>
        <UserIcon className={`${styles.icon} ${styles.user_icon}`} />
        <span className={styles.link_text}>Екатерина Михайлова</span>
      </Link>
      <Link to="" className={styles.link}>
        <EditIcon className={styles.icon} />
        <span className={styles.link_text}>Новая запись</span>
      </Link>
      <Link to="" className={styles.link}>
        <SettingsIcon className={styles.icon} />
        <span className={styles.link_text}>Настройки</span>
      </Link>
      <Link to="" className={styles.link}>
        <LogoutIcon className={styles.icon} />
        <span className={styles.link_text}>Выйти</span>
      </Link>
    </nav>
  );
};
