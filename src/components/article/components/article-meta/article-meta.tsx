import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './article-meta.module.scss';
import { Like } from '../../../like-button/like-button';
import { toLocalDate } from 'utils/date-time';

interface IArticleMeta {
  article: any;
  canModify: boolean | null;
}

const ArticleMeta: FC<IArticleMeta> = ({ article, canModify }) => {
  const currentDate = toLocalDate(article?.createdAt);
  return (
    <div>
      {/*
      <ArticleActions
        canModify={canModify}
        article={article}
        onClickDelete={(function (
          payload: Promise<string>
        ): Dispatch<SetStateAction<string>> {
          throw new Error('Function not implemented.');
        })}
      />*/}
      <div className={styles.panel}>
        <div className={styles.info}>
          <Link
            to={`/@${article?.author?.username}`}
            className={styles.info__link}>
            <p className={styles.info__text}>{article?.author?.username}</p>
          </Link>
          <p className={styles.info__text}>{currentDate}</p>
          <div className={styles.info__likes}>
            <span>{article?.favoritesCount}</span>
            <Like />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMeta;
