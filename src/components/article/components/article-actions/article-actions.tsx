import React, { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
//import agent from '../../../../../src_old/agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../../../../src_old/constants/actionTypes';
import styles from './article-actions.module.scss';
import { DeleteButton } from '../delete-button/delete-button';
// const mapDispatchToProps = (dispatch) => ({
//   onClickDelete: (payload) => dispatch({ type: DELETE_ARTICLE, payload }),
// });

interface IArticleActions {
  article: any;
  canModify: boolean | null;
  onClickDelete: (
    payload: Promise<string>
  ) => Dispatch<SetStateAction<string>>;
}

const ArticleActions: FC<IArticleActions> = ({
  article,
  canModify,
  onClickDelete,

}) => {
  const del = () => {
    //onClickDelete(agent.Articles.del(article.slug));
  };
  if (canModify) {
    return (
      <div className={styles.container}>
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>
        <div className={styles.container__del}>
          <DeleteButton></DeleteButton>
          <p>Удалить запись</p>
        </div>

      </div>
    );
  }

  return <span></span>;
};

// export default connect(() => ({}), mapDispatchToProps)(ArticleActions);

export default ArticleActions;
