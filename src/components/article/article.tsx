import React, { Dispatch, SetStateAction, useEffect } from 'react';
//import agent from '../../../src_old/agent';
import { connect } from 'react-redux';
//import marked from 'marked';
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
} from '../../../src_old/constants/actionTypes';
import {
  TArticle,
  TAuthor,
  TComment,
  TErrors,
  TUser,
} from 'utils/types';
import CommentContainer from './components/comment-container/comment-container';
import ArticleMeta from './components/article-meta/ArticleMeta';
import api from '../../utils/api';
import { AxiosResponse } from 'axios';
import styles from './article.module.scss';
import ArticleActions from '../article/components/article-actions/article-actions';
interface IArticle {
  article: TArticle;
  comments: TComment[];
  currentUser: TUser | null;
  // commentErrors: TErrors | undefined;
  // inProgress: boolean | undefined;
  // tagList: string[];
  // title: string;
  // description: string;
  // body: string;
  // tagInput: string;
  // articleSlug: string;
  // onUpdateField: (key: string, value: string) => void;
  // onAddTag: () => Dispatch<SetStateAction<string>>;
  // onRemoveTag: (tag: string) => Dispatch<SetStateAction<string>>;
  // onLoad: (
  //   payload: [AxiosResponse<any, any>, AxiosResponse<any, any>]
  // ) => Dispatch<SetStateAction<string>>;
  // onLoad: any;
  // onUnload: () => void;
  // onSubmit: (promise: Promise<string>) => Dispatch<SetStateAction<string>>;
  // match: any;
}

// const mapStateToProps = (state) => ({
//   ...state.article,
//   currentUser: state.common.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onLoad: (payload) => dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
//   onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED }),
// });

export const Article: React.FC<IArticle> = ({
  article,
  comments,
  //commentErrors,
  currentUser,
  //match,
  //onLoad,
  //onUnload,
}) => {
  // useEffect(() => {
  //   onLoad(
  //     // Promise.all([
  //     //   api.getArticlesBy(match.params.id),
  //     //   api.getComments(match.params.id),
  //     // ])
  //   );
  //   return () => {
  //     onUnload();
  //   };
  // }, [onLoad, onUnload]);

  // if (article) {
  //   const markup = {
  //     __html: marked(article.body, { sanitize: true }),
  //   };

  const canModify =
    currentUser && currentUser.username === article.author.username;

  return (
    <div className="article-page">
      <div className="banner">
        <ArticleActions
          canModify={canModify}
          article={article}
          onClickDelete={(function (
            payload: Promise<string>
          ): Dispatch<SetStateAction<string>> {
            throw new Error('Function not implemented.');
          })}
        />
        <div className={styles.container}>
          <h1 className={styles.container__header}>{article.title}</h1>
          <ArticleMeta article={article} canModify={canModify} />
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            {/* <div dangerouslySetInnerHTML={markup}></div> */}
            <div>ARTICLE BODY</div>
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

        <div className="article-actions"></div>
        <div className="row">
          <CommentContainer
            comments={comments || []}
            //errors={commentErrors}
            slug={article.slug}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
  // }
  // return null;
};

// export default connect(mapStateToProps, mapDispatchToProps)(Article);
export default Article;
