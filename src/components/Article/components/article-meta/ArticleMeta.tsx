import React, { FC } from 'react';
import ArticleActions from '../article-actions/article-actions';
import { Link } from 'react-router-dom';
import { IArticle } from '../../../../utils/interfaces';

interface IArticleMeta {
  article: IArticle;
  canModify: boolean;
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

      <ArticleActions canModify={canModify} article={article} />
    </div>
  );
};

export default ArticleMeta;
