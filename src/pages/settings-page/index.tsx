import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './settings-page.module.scss';

const SettingsPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSettingsSubmit = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log('settings');
  }, []);

  return (
    <section className={styles.settings}>
      <h2 className={styles.settings__title}>Ваши настройки</h2>
      <form className={styles.settings__form} onSubmit={handleSettingsSubmit}>
        <fieldset className={styles.settings__fieldset}>
          <label className={styles.settings__label}>
            URL изображения профиля
            <input className={styles.settings__input}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>Ошибка</p>
          </div>
          <label className={styles.settings__label}>
            Имя пользователя
            <input className={styles.settings__input}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>Ошибка</p>
          </div>
          <label className={styles.settings__label}>
            E-mail
            <input className={styles.settings__input}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>Ошибка</p>
          </div>
          <label className={styles.settings__label}>
            Новый пароль
            <input className={styles.settings__input}></input>
          </label>
          <div className={styles.settings__errorsWrapper}>
            <p className={styles.settings__errorText}>Ошибка</p>
          </div>
          <button className={styles.settings__button}>
            Обновить настройки
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default SettingsPage;
