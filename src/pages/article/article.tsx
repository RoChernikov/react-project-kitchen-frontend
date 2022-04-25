import React, { Dispatch, SetStateAction, useEffect } from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import marked from 'marked';
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import { TAuthor, TErrors } from '../../utils/types';
import CommentContainer from '../../components/article/components/comment-container/comment-container';
import ArticleMeta from '../../components/article/components/article-meta/ArticleMeta';
import { IArticle } from '../../utils/interfaces';

interface IArticlePage {
  article: IArticle;
  comments: string[];
  currentUser: TAuthor | null;
  commentErrors: TErrors | undefined;
  inProgress: boolean | undefined;
  tagList: string[];
  title: string;
  description: string;
  body: string;
  tagInput: string;
  articleSlug: string;
  onUpdateField: (key: string, value: string) => void;
  onAddTag: () => Dispatch<SetStateAction<string>>;
  onRemoveTag: (tag: string) => Dispatch<SetStateAction<string>>;
  onLoad: (
    payload: Promise<[string, string]>
  ) => Dispatch<SetStateAction<string>>;
  onUnload: () => void;
  onSubmit: (promise: Promise<string>) => Dispatch<SetStateAction<string>>;
  match: any;
}

/**
 * Не типизировано, перепишется на хуки в рамках рефакторинга редакс
 */
const mapStateToProps = (state) => ({
  ...state.article,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED }),
});
/** */

export const ArticlePage: React.FC<IArticlePage> = ({
  article,
  comments,
  commentErrors,
  currentUser,
  match,
  onLoad,
  onUnload,
}) => {
  useEffect(() => {
    onLoad(
      Promise.all([
        agent.Articles.get(match.params.id),
        agent.Comments.forArticle(match.params.id),
      ])
    );
    return () => {
      onUnload();
    };
  }, [onLoad, onUnload, match.params.id]);

  if (article) {
    const markup = {
      __html: marked(article.body, { sanitize: true }),
    };

    const canModify =
      currentUser && currentUser.username === article.author.username;

    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <ArticleMeta article={article} canModify={canModify} />
          </div>
        </div>
        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={markup}></div>
              <ul className="tag-list">
                {article.tagList.map((tag) => {
                  return (
                    <li className="tag-default tag-pill tag-outline" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <hr />
          <div className="article-actions"></div>
          <div className="row">
            <CommentContainer
              comments={comments || []}
              errors={commentErrors}
              slug={match.params.id}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
