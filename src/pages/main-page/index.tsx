import { FC, useEffect } from 'react';
import ArticlePreview from '../../components/article-preview/article-preview';
import styles from './main-page.module.scss';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { selectArticles } from 'services/selectors/articles';
import PopularArticles from 'components/popular-articles/popular-articles';
import PopularTags from 'components/popular-tags/popular-tags';
import { getArticlesData } from 'services/slices/articles';

const MainPage: FC = () => {
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticlesData());
  }, [dispatch]);

  if (articles.length === 0) {
    return <div className="article-preview">Тут пока нет статей...</div>;
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
