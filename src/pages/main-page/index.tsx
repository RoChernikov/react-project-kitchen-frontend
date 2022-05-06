import React, { FC, useEffect } from 'react';
import ArticlePreview from '../../components/article-preview/article-preview';
import styles from './main-page.module.scss';
import { useLocation, Link } from 'react-router-dom';
import { useAppSelector } from 'services/hooks';
import { selectArticles } from 'services/selectors/articles';
// import { Button } from 'components/button/button';
// import PlusIcon from 'components/icons/plus-icon';
// import MinusIcon from 'components/icons/minus-icon';
// import TrashIcon from 'components/icons/trash-icon';
// import LikeIcon from 'components/icons/like-icon';
//--------------------------------------------------------------------------------

const MainPage: FC = () => {
  const location = useLocation();
  const articles = useAppSelector(selectArticles);

  return (
    <div className={styles.main}>
      <ArticlePreview
        article={articles[0]}
        unfavorite={function (slug: string): void {
          throw new Error('Function not implemented.');
        }}
        favorite={function (slug: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      {/* <h1>UI Kit</h1>
      <p>Тест модалки</p>
      <Link
        to={`/modal`}
        state={{ backgroundLocation: location }}
        className={styles.main__link}
        children={'Открыть модалку'}
      />
      <p>Кнопки</p>
      <div
        style={{
          display: 'flex',
          gap: 20,
        }}>
        <Button
          type="primary"
          color="primary"
          icon={<PlusIcon />}
          children="Подписаться"
        />
        <Button
          type="primary"
          color="primary"
          icon={<MinusIcon />}
          children="Отписаться"
        />
        <Button type="primary" color="primary" children="Сохранить запись" />
        <Button color="secondary" children="Удалить запись" />
        <Button color="secondary" children="Удалить запись" disabled />
        <Button
          type="secondary"
          children="Удалить запись"
          icon={<TrashIcon />}
        />

        <Button
          type="secondary"
          children="Удалить запись"
          icon={<TrashIcon />}
          disabled
        />
      </div> */}
    </div>
  );
};

export default MainPage;
