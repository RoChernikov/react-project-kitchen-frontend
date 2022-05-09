import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { TUser } from 'utils/types';
import CommentContainer from './components/comment-container/comment-container';
import ArticleMeta from './components/article-meta/article-meta';
import styles from './article.module.scss';
import ArticleActions from '../article/components/article-actions/article-actions';
import {
  selectCurrentArticle,
} from 'services/selectors/articles';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { getCurrentArticleData } from 'services/slices/articles';
import { selectCurrentUser } from 'services/selectors/profile';

export const Article: React.FC = ({
  //commentErrors,
}) => {
  const dispatch = useAppDispatch();
  const article = useAppSelector(selectCurrentArticle);
  const { id } = useParams();
  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentArticleData(id));
  }, [dispatch]);

  const canModify =
    currentUser && currentUser.username === article?.author?.username;

  const onAfticleDelete = function (
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
          onClickDelete={onAfticleDelete}
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
