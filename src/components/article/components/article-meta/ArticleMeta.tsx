import React, { Dispatch, FC, SetStateAction } from 'react';
import ArticleActions from '../article-actions/article-actions';
import { Link } from 'react-router-dom';
import styles from './article-meta.module.scss';
import { Like } from '../like/like';
interface IArticleMeta {
  article: any;
  canModify: boolean | null;
}

const ArticleMeta: FC<IArticleMeta> = ({ article, canModify }) => {
  return (
    <div className="article-meta">
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

      <Link to={`/@${article.author.username}`}>
        <img src={article.author.image} alt={article.author.username} className={styles.panel__img} />
      </Link>
      <div className={styles.panel}>
        <div className={styles.info}>
          <Link to={`/@${article.author.username}`} className={styles.info__link}>
            <p className={styles.info__text}>{article.author.username}</p>
          </Link>
          <p className={styles.info__text}>
            {new Date(article.createdAt).toDateString()}
          </p>
        </div>
        <Like></Like>
      </div>

    </div>
  );
};

export default ArticleMeta;
