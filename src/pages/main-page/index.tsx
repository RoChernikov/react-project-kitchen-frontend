import React, { FC } from 'react';
import ArticlePreview from '../../components/article-preview/article-preview';
import styles from './main-page.module.scss';
//--------------------------------------------------------------------------------

const MainPage: FC = () => {
  return (
    <div className={styles.main}>
      <ArticlePreview />
    </div>
  );
};

export default MainPage;
