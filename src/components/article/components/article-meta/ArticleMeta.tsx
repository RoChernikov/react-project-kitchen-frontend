import React, { Dispatch, FC, SetStateAction } from 'react';
import ArticleActions from '../article-actions/article-actions';
import { Link } from 'react-router-dom';

interface IArticleMeta {
  article: any;
  canModify: boolean | null;
}

const ArticleMeta: FC<IArticleMeta> = ({ article, canModify }) => {
  return (
    <div className="article-meta">
      <Link to={`/@${article.author.username}`}>
        <img src={article.author.image} alt={article.author.username} />
      </Link>

      <div className="info">
        <Link to={`/@${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>

      <ArticleActions
        canModify={canModify}
        article={article}
        onClickDelete={(function (
          payload: Promise<string>
        ): Dispatch<SetStateAction<string>> {
          throw new Error('Function not implemented.');
        })}
      />
    </div>
  );
};

export default ArticleMeta;
