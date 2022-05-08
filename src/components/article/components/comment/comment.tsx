import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TComment, TUser } from 'utils/types';
import styles from './comment.module.scss';
import { Button } from 'components/button/button';
import TrashIcon from 'components/icons/trash-icon';
import { useAppDispatch } from 'services/hooks';
import { deleteComment } from 'services/slices/articles';

interface IComment {
  comment: TComment;
  currentUser: TUser | null;
  slug: string | undefined;
}

const Comment: FC<IComment> = ({ comment, currentUser, slug }) => {
  const dispatch = useAppDispatch();

  const show = currentUser && currentUser.username === comment.author.username;

  const onCommentDelete = useCallback(() => {
    dispatch(deleteComment(slug, comment.id));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.smallcontainer}>
        <div className={styles.box}>
          <Link to={`/@${comment.author.username}`}>
            <img
              src={comment.author.image}
              className={styles.container__img}
              alt={comment.author.username}
            />
          </Link>
          <div className={styles.box__info}>
            <Link
              to={`/@${comment.author.username}`}
              className={styles.box__name}>
              {comment.author.username}
            </Link>
            <span className={styles.box__date}>
              {new Date(comment.createdAt).toDateString()}
            </span>
          </div>
        </div>
        {show && (
          <Button
            type="secondary"
            icon={<TrashIcon />}
            onClick={onCommentDelete}
          />
        )}
      </div>
      <div>
        <p className={styles.container__text}>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
