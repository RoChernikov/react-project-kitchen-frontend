import React, { FC, useState, useCallback, SyntheticEvent } from 'react';
import styles from './new-article-page.module.scss';
import { Button } from 'components/button/button';

const NewArticlePage: FC = () => {
  const handleNewArticleSubmit = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log('newArticle');
  }, []);

  return (
    <section className={styles.newArticle}>
      <h2 className={styles.newArticle__title}>Новая запись</h2>
      <form className={styles.newArticle__form}>
        <fieldset className={styles.newArticle__fieldset}>
          <label className={styles.newArticle__label}>
            Название статьи
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <label className={styles.newArticle__label}>
            О чем статья
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <label className={styles.newArticle__label}>
            URL изображения (опционально)
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <label className={styles.newArticle__label}>
            Текст статьи
            <input
              className={`${styles.newArticle__input} ${styles.newArticle__input_wide}`}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <label className={styles.newArticle__label}>
            Теги (через запятую)
            <input className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>

          <div className={styles.newArticle__button}>
            <Button
              color="primary"
              type="primary"
              children="Опубликовать запись"
              onClick={handleNewArticleSubmit}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default NewArticlePage;
