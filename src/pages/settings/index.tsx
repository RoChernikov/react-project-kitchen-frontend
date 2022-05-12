import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './settings-page.module.scss';
import { Button } from 'components/button/button';

const SettingsPage: FC = () => {
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSettingsSubmit = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log('settings');
  }, []);

  return (
    <section className={styles.settings}>
      <h2 className={styles.settings__title}>Ваши настройки</h2>
      <form className={styles.settings__form}>
        <fieldset className={styles.settings__fieldset}>
          <label className={styles.settings__label}>
            URL изображения профиля
            <input
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
