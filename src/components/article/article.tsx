import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { TUser } from 'utils/types';
import CommentContainer from './components/comment-container/comment-container';
import ArticleMeta from './components/article-meta/ArticleMeta';
import styles from './article.module.scss';
import ArticleActions from '../article/components/article-actions/article-actions';
import {
  selectCurrentArticle,
} from 'services/selectors/articles';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import getCurrentArticleData from 'services/thunks/currentArticle';

interface IArticle {
  // article: TArticle;
  // comments: TComment[];
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

export const Article: React.FC<IArticle> = ({
  //commentErrors,
  currentUser,
}) => {
  const dispatch = useAppDispatch();
  const article = useAppSelector(selectCurrentArticle);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentArticleData(id));
  }, [dispatch]);

  const canModify =
    currentUser && currentUser.username === article?.author?.username;

  const del = function (
    payload: Promise<string>
  ): Dispatch<SetStateAction<string>> {
    throw new Error('Function not implemented.');
  };

  return (
    <div className="article-page">
      <div className="banner">
        <ArticleActions
          canModify={canModify}
          article={article}
          onClickDelete={del}
        />
        <div className={styles.container}>
          <h1 className={styles.container__header}>{article?.title}</h1>
          <ArticleMeta article={article} canModify={canModify} />
        </div>
      </div>
      <div className={styles.container}>
        <div className="row article-content">
          <div className="col-xs-12">
            <div className={styles.container__text}>{article?.body}</div>
            <ul className={styles.container__tags}>
              {article?.tagList?.map((tag) => {
                return (
                  <li className={styles.container__tag} key={tag}>
                    {'# ' + tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="article-actions"></div>
        <div className="row">
          <CommentContainer
            comments={article?.comments}
            //errors={commentErrors}
            slug={article?.slug}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
