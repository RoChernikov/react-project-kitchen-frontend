import React, { FC } from 'react';
import styles from './register-page.module.scss';
import { Link } from 'react-router-dom';
import { registerUser } from 'services/slices/profile';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { userErrors, isAuth } from 'services/selectors/profile';
import { Navigate } from 'react-router-dom';
import { Button } from 'components/button/button';
import { useForm } from 'react-hook-form';

type TRegisterFormData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const registerErrors = useAppSelector(userErrors);
  const auth = useAppSelector(isAuth);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TRegisterFormData>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onRegisterSubmit = ({
    username,
    email,
    password,
  }: TRegisterFormData) => {
    dispatch(
      registerUser({
        user: { username: username, email: email, password: password },
      })
    );
    reset();
  };

  if (auth) {
    return <Navigate to={{ pathname: '/' }} />;
  }
  //TODO красная рамка на поле при ошибке
  return (
    <section className={styles.register}>
      <h2 className={styles.register__title}>Зарегистрироваться</h2>
      <Link to="/login" className={styles.register__link}>
        Войти
      </Link>
      <form
        className={styles.register__form}
        onSubmit={handleSubmit(onRegisterSubmit)}>
        <fieldset className={styles.register__fieldset}>
          <label className={styles.register__label}>
            Имя пользователя
            <input
              className={styles.register__input}
              {...register('username', {
                required: 'Пожалуйста, заполните это поле',
                minLength: {
                  value: 2,
                  message: 'Имя пользователя должно быть не менее 2 символов',
                },
              })}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            {errors?.username && (
              <p className={styles.register__errorText}>
                {errors?.username?.message}
              </p>
            )}
          </div>
          {/*тут должен быть ответ сервера про существующего пользователя*/}

          <label className={styles.register__label}>
            Email
            <input
              type="email"
              className={styles.register__input}
              {...register('email', {
                required: 'Пожалуйста, заполните это поле',
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Введите Email в формате username@example.com',
                },
              })}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            {errors?.email && (
              <p className={styles.register__errorText}>
                {errors?.email?.message}
              </p>
            )}
          </div>
          {/*тут должен быть ответ сервера про существующего пользователя*/}

          <label className={styles.register__label}>
            Пароль
            <input
              type="password"
              className={styles.register__input}
              {...register('password', {
                required: 'Пожалуйста, заполните это поле',
                minLength: {
                  value: 5,
                  message: 'Пароль должен быть не менее 5 символов',
                },
              })}></input>
          </label>
          <div className={styles.register__errorsWrapper}>
            {errors?.password && (
              <p className={styles.register__errorText}>
                {errors?.password?.message}
              </p>
            )}
          </div>

          <div className={styles.register__button}>
            <Button
              color="primary"
              type="primary"
              children="Зарегистрироваться"
              disabled={!isValid}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default RegisterPage;
