import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './login-page.module.scss';
import { Link } from 'react-router-dom';
import { signIn } from 'services/slices/profile';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { userErrors, isAuth } from 'services/selectors/profile';
import { Navigate } from 'react-router-dom';
import { Button } from 'components/button/button';

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginErrors = useAppSelector(userErrors);
  const auth = useAppSelector(isAuth);

  const handleLoginSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      dispatch(signIn({ user: { email: email, password: password } }));
    },
    [dispatch, email, password]
  );

  if (auth) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  return (
    <section className={styles.login}>
      <h2 className={styles.login__title}>Войти</h2>
      <Link to="/register" className={styles.login__link}>
        Зарегистрироваться
      </Link>
      <form className={styles.login__form}>
        <fieldset className={styles.login__fieldset}>
          <label className={styles.login__label}>
            Email
            <input
              className={styles.login__input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}></input>
          </label>
          <div className={styles.login__errorsWrapper}>
            {Object.keys(loginErrors).length !== 0 && (
              <p className={styles.login__errorText}>
                {loginErrors.email === "can't be blank"
                  ? 'Поле не может быть пустым'
                  : 'Некорректный логин или пароль'}
              </p>
            )}
            {/* тут нужна валидация, пока оставлю так */}
          </div>

          <label className={styles.login__label}>
            Пароль
            <input
              type="password"
              className={styles.login__input}
              onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
          </label>
          <div className={styles.login__errorsWrapper}>
            {Object.keys(loginErrors).length !== 0 && loginErrors.password && (
              <p className={styles.login__errorText}>
                {loginErrors.password === "can't be blank"
                  ? 'Поле не может быть пустым'
                  : 'Некорректный логин или пароль'}
              </p>
            )}
            {/* тут нужна валидация, пока оставлю так */}
          </div>

          <div className={styles.login__button}>
            <Button
              color="primary"
              type="primary"
              children="Войти"
              onClick={handleLoginSubmit}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default LoginPage;
