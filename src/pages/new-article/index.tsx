import React, {
  FC,
  useState,
  useCallback,
  SyntheticEvent,
  ChangeEvent,
} from 'react';
import styles from './new-article-page.module.scss';
import { Button } from 'components/button/button';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { addArticle } from 'services/slices/articles';
import { useNavigate } from 'react-router-dom';
import { selectCurrentArticle } from 'services/selectors/articles';

const NewArticlePage: FC = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const article = useAppSelector(selectCurrentArticle);
  const [title, setTitle] = useState<string>('');
  const [description, setAbout] = useState<string>('');
  const [link, setImage] = useState<string>('');
  const [body, setText] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setTitle(evt.target.value);
  };
  const onAboutChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAbout(evt.target.value);
  };
  const onImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setImage(evt.target.value);
  };
  const onTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };
  const onTagsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTags(evt.target.value);
  };
  const handleNewArticleSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      const newArticleData = {
        article: {
          title,
          description,
          body,
          link,
          tagList: Array.from(new Set(tags.split(','))),
        },
      };
      dispatch(addArticle(newArticleData));
      history(`/articles/${article?.slug}`);
    },
    [article?.slug, body, description, dispatch, history, link, tags, title]
  );

  return (
    <section className={styles.newArticle}>
      <h2 className={styles.newArticle__title}>Новая запись</h2>
      <form className={styles.newArticle__form}>
        <fieldset className={styles.newArticle__fieldset}>
          <label className={styles.newArticle__label}>
            Название статьи
            <input
              name="title"
              onChange={onTitleChange}
              value={title}
              required
              className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>
          <label className={styles.newArticle__label}>
            О чем статья
            <input
              name="description"
              onChange={onAboutChange}
              value={description}
              required
              className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>
          <label className={styles.newArticle__label}>
            URL изображения (опционально)
            <input
              name="link"
              onChange={onImageChange}
              value={link}
              required
              className={styles.newArticle__input}></input>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>
          <label className={styles.newArticle__label}>
            Текст статьи
            <textarea
              name="body"
              onChange={onTextChange}
              value={body}
              required
              className={`${styles.newArticle__input} ${styles.newArticle__input_wide}`}></textarea>
          </label>
          <div className={styles.newArticle__errorsWrapper}>
            <p className={styles.newArticle__errorText}>
              {/* тут нужна валидация, пока оставлю так */}
            </p>
          </div>
          <label className={styles.newArticle__label}>
            Теги (через запятую)
            <input
              name="tags"
              onChange={onTagsChange}
              value={tags}
              required
              className={styles.newArticle__input}></input>
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
