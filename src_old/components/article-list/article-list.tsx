import ArticlePreview from '../article-preview/article-preview';
import ListPagination from '../list-pagination/list-pagination';
import React, { FC } from 'react';

export type TArticle = {
  slug: string;
};

export interface IArticleList {
  articles: TArticle[];
  pager: () => Promise<unknown>;
  articlesCount: number;
  currentPage: number;
  loading?: boolean;
}

const ArticleList: FC<IArticleList> = ({
  articles,
  pager,
  articlesCount,
  currentPage,
  loading,
}) => {
  console.log('ArticleList', articles);
  console.log('pager', pager);

  if (!articles) {
    return <div className="article-preview">Loading...</div>;
  }

  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }
  return (
    <div>
      {articles.map((article) => {
        return <ArticlePreview article={article} key={article.slug} />;
      })}

      <ListPagination
        pager={pager}
        articlesCount={articlesCount}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ArticleList;
