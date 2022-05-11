import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg';
import { ReactComponent as LoginIcon } from '../../assets/images/login-icon.svg';
import styles from './header.module.scss';
import { Button } from 'components/button/button';
import { useAppDispatch } from 'services/hooks';
import { signOut } from 'services/slices/profile';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.nav__link} to="/">
          <HomeIcon className={styles.nav__icon} />
          <span className={styles.nav__text}>Главная</span>
        </Link>
        <Link className={styles.nav__link} to="/login">
          <LoginIcon className={styles.nav__icon} />
          <span className={styles.nav__text}>Войти</span>
        </Link>
      </nav>
      <Button
        color="secondary"
        children="LOGOUT BUTTON"
        onClick={() => {
          dispatch(signOut());
        }}
      />
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
