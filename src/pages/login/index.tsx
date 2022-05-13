import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import styles from './login-page.module.scss';
import { Link } from 'react-router-dom';
import { signIn } from 'services/slices/profile';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { userErrors, isAuth } from 'services/selectors/profile';
import { Navigate } from 'react-router-dom';
import { Button } from 'components/button/button';

type TLoginFormData = {
  email: string;
  password: string;
};

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginErrors = useAppSelector(userErrors);
  const auth = useAppSelector(isAuth);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TLoginFormData>({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      email: '',
    },
  });

  /*const handleLoginSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      dispatch(signIn({ user: { email: email, password: password } }));
    },
    [dispatch, email, password]
  );*/

  const onLoginSubmit = ({ email, password }: TLoginFormData) => {
    alert(JSON.stringify({ email, password }));
    // evt.preventDefault();
    dispatch(signIn({ user: { email: email, password: password } }));
    reset();
  };

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
              type="email"
              className={styles.login__input}
              {...register('email', {
                required: 'Пожалуйста, заполните это поле',
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Введите Email в формате username@example.com',
                },
              })}></input>
          </label>
          <div className={styles.login__errorsWrapper}>
            {errors?.email && (
              <p className={styles.login__errorText}>
                {errors?.email?.message}
              </p>
            )}
          </div>

          <label className={styles.login__label}>
            Пароль
            <input
              type="password"
              className={styles.login__input}
              {...register('password', {
                required: 'Пожалуйста, заполните это поле',
                minLength: {
                  value: 5,
                  message: 'Пароль должен быть не менее 5 символов',
                },
              })}></input>
          </label>
          <div className={styles.login__errorsWrapper}>
            {errors?.password && (
              <p className={styles.login__errorText}>
                {errors?.password?.message}
              </p>
            )}
          </div>
          <div className={styles.login__button}>
            <Button
              color="primary"
              type="primary"
              children="Войти"
              onClick={handleSubmit(onLoginSubmit)}
              disabled={!isValid}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default LoginPage;

// @ts-ignore
