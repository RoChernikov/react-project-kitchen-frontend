import React, { Dispatch, SetStateAction } from 'react';
import agent from '../../agent';
import { IArticleList } from '../article-list/article-list';

export interface TPayload {
  pager: (page: number) => IArticleList;
  articles: IArticleList;
  articlesCount: number;
  tab: string | null;
  tag: string;
  currentPage: number;
}

interface ITags {
  tags: string[];
  onClickTag: (
    tag: string,
    pager: (page: number) => IArticleList,
    payload: TPayload
  ) => Dispatch<SetStateAction<string>>;
}

const Tags: React.FC<ITags> = ({ tags, onClickTag }) => {
  const handleClick = (ev: React.MouseEvent, tag: string) => {
    ev.preventDefault();
    onClickTag(
      tag,
      (page: number) => agent.Articles.byTag(tag, page),
      agent.Articles.byTag(tag)
    );
  };

  if (tags) {
    return (
      <div className="tag-list">
        {tags.map((tag: string) => {
          return (
            <a
              href="/"
              className="tag-default tag-pill"
              key={tag}
              onClick={(evt) => handleClick(evt, tag)}>
              {tag}
            </a>
          );
        })}
      </div>
    );
  }
  return <>Loading Tags...</>;
};

export default Tags;
