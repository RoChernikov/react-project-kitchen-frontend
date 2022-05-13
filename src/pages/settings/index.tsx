import React, {
  FC,
  useEffect,
  useState,
  useCallback,
  SyntheticEvent,
  ChangeEvent,
} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { selectCurrentUser } from 'services/selectors/profile';
import { patchUser } from 'services/slices/profile';
import styles from './settings-page.module.scss';
import { Button } from 'components/button/button';

const SettingsPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSettingsSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      dispatch(
        patchUser({
          user: {
            username: username,
            email: email,
            password: password,
            image: avatar,
          },
        })
      );
      navigate(`/profile/@${username}`);
    },
    [navigate, dispatch, avatar, password, email, username]
  );

  useEffect(() => {
    if (user) {
      user.image && setAvatar(user.image);
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <section className={styles.settings}>
      <h2 className={styles.settings__title}>Ваши настройки</h2>
      <form className={styles.settings__form}>
        <fieldset className={styles.settings__fieldset}>
          <label className={styles.settings__label}>
            URL изображения профиля
            <input
              value={avatar}
              name="avatar"
              className={styles.settings__input}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <label className={styles.settings__label}>
            Имя пользователя
            <input
              value={username}
              name="username"
              className={styles.settings__input}
              onChange={(e) => {
                setUsername(e.target.value);
              }}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <label className={styles.settings__label}>
            E-mail
            <input
              value={email}
              type="email"
              name="email"
              className={styles.settings__input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <label className={styles.settings__label}>
            Новый пароль
            <input
              type="password"
              name="password"
              value={password}
              className={styles.settings__input}
              onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <div className={styles.settings__button}>
            <Button
              color="primary"
              type="primary"
              children="Обновить настройки"
              onClick={handleSettingsSubmit}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default SettingsPage;
