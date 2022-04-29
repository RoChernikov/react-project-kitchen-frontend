import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg';
import { ReactComponent as LoginIcon } from '../../assets/images/login-icon.svg';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/">
          <HomeIcon className={`${styles.home_icon} ${styles.icon}`} />
          <span className={styles.link_text}>Главная</span>
        </Link>
        <Link to="/login">
          <LoginIcon className={styles.icon} />
          <span className={styles.link_text}>Войти</span>
        </Link>
      </nav>
      <div className={styles.text_box}>
        <h1 className={styles.title}>Когда вырасту</h1>
        <p className={styles.description}>
          Каково быть джуном в турбулентном мире
        </p>
      </div>
    </div>
  );
};

export default Header;
