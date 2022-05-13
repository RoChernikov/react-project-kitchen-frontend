import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './register-page.module.scss';
import { Link } from 'react-router-dom';
import { register } from 'services/slices/profile';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { userErrors, isAuth } from 'services/selectors/profile';
import { Navigate } from 'react-router-dom';
import { Button } from 'components/button/button';

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerErrors = useAppSelector(userErrors);
  const auth = useAppSelector(isAuth);

  const handleRegisterSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      dispatch(
        register({
          user: { username: username, email: email, password: password },
        })
      );
    },
    [dispatch, username, email, password]
  );

  if (auth) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  return (
    <section className={styles.register}>
      <h2 className={styles.register__title}>Зарегистрироваться</h2>
      <Link to="/login" className={styles.register__link}>
        Войти
      </Link>
      <form className={styles.register__form}>
        <fieldset className={styles.register__fieldset}>
          <label className={styles.register__label}>
            Имя пользователя
            <input
              className={styles.register__input}
              onChange={(e) => {
                setUsername(e.target.value);
              }}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            {registerErrors.username && (
              <p className={styles.register__errorText}>
                {registerErrors.username === 'is already taken.'
                  ? 'Такое имя пользователя уже занято'
                  : 'Поле не может быть пустым'}
              </p>
            )}
          </div>

          <label className={styles.register__label}>
            Email
            <input
              type="email"
              className={styles.register__input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            {registerErrors.email && (
              <p className={styles.register__errorText}>
                {registerErrors.email === 'is already taken.'
                  ? 'Такой e-mail уже зарегистрирован'
                  : 'Поле не может быть пустым'}
              </p>
            )}
          </div>

          <label className={styles.register__label}>
            Пароль
            <input
              type="password"
              className={styles.register__input}
              onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            {false && <p className={styles.register__errorText}>ОШИБКА</p>}{' '}
            {/* тут нужна валидация, на бэке эта ошибка не обрабатывается, пока оставлю false */}
          </div>

          <div className={styles.register__button}>
            <Button
              color="primary"
              type="primary"
              children="Зарегистрироваться"
              onClick={handleRegisterSubmit}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default RegisterPage;
