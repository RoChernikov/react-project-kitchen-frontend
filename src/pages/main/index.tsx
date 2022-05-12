import { FC } from 'react';
import ArticlePreview from '../../components/article-preview/article-preview';
import styles from './main-page.module.scss';
import { useAppSelector } from 'services/hooks';
import { selectArticles } from 'services/selectors/articles';
import PopularArticles from 'components/popular-articles/popular-articles';
import PopularTags from 'components/popular-tags/popular-tags';

const MainPage: FC = () => {
  const articles = useAppSelector(selectArticles);

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.main}>
        {articles.map((article) => (
          <ArticlePreview article={article} key={article.slug} />
        ))}
      </ul>
      <div className={styles.rightbord}>
        <PopularTags />
        <div>
          <PopularArticles />
        </div>
      </div>

    </div>
  );
};

export default MainPage;
