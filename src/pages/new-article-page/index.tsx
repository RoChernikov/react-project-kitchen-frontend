import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './new-article-page.module.scss';

const NewArticlePage: FC = () => {
  const handleSettingsSubmit = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log('newArticle');
  }, []);

  return (
    <section className={styles.newArticle}>
      <h2 className={styles.newArticle__title}>Новая запись</h2>
      <form className={styles.newArticle__form} onSubmit={handleSettingsSubmit}>
        <fieldset className={styles.newArticle__fieldset}>
          <label className={styles.newArticle__label}>
            Название статьи
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>Ошибка</p>
          </div>
          <label className={styles.newArticle__label}>
            О чем статья
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>Ошибка</p>
          </div>
          <label className={styles.newArticle__label}>
            URL изображения (опционально)
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>Ошибка</p>
          </div>
          <label className={styles.newArticle__label}>
            Текст статьи
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>Ошибка</p>
          </div>
          <label className={styles.newArticle__label}>
            Теги (через запятую)
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>Ошибка</p>
          </div>
          <button className={styles.newArticle__button}>
            Опубликовать запись
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default NewArticlePage;
