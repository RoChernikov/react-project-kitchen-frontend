import React, { FC } from 'react';
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
  const loginErrors = useAppSelector(userErrors);
  const auth = useAppSelector(isAuth);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TLoginFormData>({
    mode: 'onChange',
    defaultValues: {
      password: '',
      email: '',
    },
  });

  const onLoginSubmit = ({ email, password }: TLoginFormData) => {
    dispatch(signIn({ user: { email: email, password: password } }));
    reset();
  };

  if (auth) {
    return <Navigate to={{ pathname: '/' }} />;
  }
  //TODO красная рамка на поле при ошибке
  return (
    <section className={styles.login}>
      <h2
        className={styles.login__title}
        onClick={() => {
          dispatch(
            signIn({ user: { email: 'mrhubris@yandex.ru', password: '' } })
          );
        }}>
        Войти
      </h2>
      <Link to="/register" className={styles.login__link}>
        Зарегистрироваться
      </Link>
      <form
        className={styles.login__form}
        onSubmit={handleSubmit(onLoginSubmit)}>
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
          {/*тут должен быть ответ сервера про неверный логин пароль*/}

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
          {/*тут должен быть ответ сервера про неверный логин пароль*/}

          <div className={styles.login__button}>
            <Button
              color="primary"
              type="primary"
              children="Войти"
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
