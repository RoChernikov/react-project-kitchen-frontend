import { FC } from 'react';
import ArticlePreview from '../../components/article-preview/article-preview';
import styles from './main-page.module.scss';
import { useAppSelector } from 'services/hooks';
import { selectArticles } from 'services/selectors/articles';

const MainPage: FC = () => {
  const articles = useAppSelector(selectArticles);

  if (!articles) {
    return <div className="article-preview">Loading...</div>;
  };

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  };
      
  return (
    <div className={styles.main}>
    {articles.map((article) => 
        <ArticlePreview article={article} key={article.slug} />) }
    </div>
  );
};

export default MainPage;
