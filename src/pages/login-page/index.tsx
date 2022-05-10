import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './login-page.module.scss';
import { Link } from 'react-router-dom';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log('login');
  }, []);

  return (
    <section className={styles.login}>
      <h2 className={styles.login__title}>Войти</h2>
      <Link to="/register" className={styles.login__link}>
        Зарегистрироваться
      </Link>
      <form className={styles.login__form} onSubmit={handleLoginSubmit}>
        <fieldset className={styles.login__fieldset}>
          <label className={styles.login__label}>
            Email
            <input className={styles.login__input}></input>
          </label>
          <div className={styles.login__errorsWrapper}>
            <p className={styles.login__errorText}>Ошибка</p>
          </div>
          <label className={styles.login__label}>
            Пароль
            <input className={styles.login__input}></input>
          </label>
          <div className={styles.login__errorsWrapper}>
            <p className={styles.login__errorText}>Ошибка</p>
          </div>
          <button className={styles.login__button}>Войти</button>
        </fieldset>
      </form>
    </section>
  );
};

export default LoginPage;
