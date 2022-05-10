import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './register-page.module.scss';
import { Link } from 'react-router-dom';

const RegisterPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log('register');
  }, []);

  return (
    <section className={styles.register}>
      <h2 className={styles.register__title}>Зарегистрироваться</h2>
      <Link to="/login" className={styles.register__link}>
        Войти
      </Link>
      <form className={styles.register__form} onSubmit={handleLoginSubmit}>
        <fieldset className={styles.register__fieldset}>
          <label className={styles.register__label}>
            Имя пользователя
            <input className={styles.register__input}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            <p className={styles.register__errorText}>Ошибка</p>
          </div>
          <label className={styles.register__label}>
            Email
            <input className={styles.register__input}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            <p className={styles.register__errorText}>Ошибка</p>
          </div>
          <label className={styles.register__label}>
            Пароль
            <input className={styles.register__input}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            <p className={styles.register__errorText}>Ошибка</p>
          </div>
          <button className={styles.register__button}>
            Зарегистрироваться
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default RegisterPage;
