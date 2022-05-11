import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './article-actions.module.scss';
import { Button } from 'components/button/button';
import TrashIcon from 'components/icons/trash-icon';
import PlusIcon from 'components/icons/plus-icon';
import { TArticle } from 'utils/types';

interface IArticleActions {
  article?: TArticle | null;
  canModify: boolean | null;
}

const ArticleActions: FC<IArticleActions> = ({
  article,
  canModify
}) => {
  const history = useNavigate();
  
  const onDeleteClick = () => {
    //onClickDelete(agent.Articles.del(article.slug));
  };

  function onEditClick() {
    history(`/editor/${article?.slug}`);
}
  if (canModify) {
    return (
      <div className={styles.container}>
        <div
          className={styles.container__editbutton}>
          <Button
            type="primary"
            color="primary"
            icon={<PlusIcon />}
            children="Редактировать запись"
            onClick={onEditClick}
          />
        </div>
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
