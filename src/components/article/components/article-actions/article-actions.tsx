import React, { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
//import agent from '../../../../../src_old/agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../../../../src_old/constants/actionTypes';
import styles from './article-actions.module.scss';
import { Button } from 'components/button/button';
import TrashIcon from 'components/icons/trash-icon';
import PlusIcon from 'components/icons/plus-icon';
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
  if (true) {
    return (
      <div className={styles.container}>
        <Link
          to={`/editor/${article?.slug}`}
          className={styles.container__editbutton}>
          <Button
            type="primary"
            color="primary"
            icon={<PlusIcon />}
            children="Редактировать запись"
          />
        </Link>
        <Button
          type="secondary"
          children="Удалить запись"
          icon={<TrashIcon />}
        />
      </div>
    );
  }
  return null;
};

// export default connect(() => ({}), mapDispatchToProps)(ArticleActions);

export default ArticleActions;
