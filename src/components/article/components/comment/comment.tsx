import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TComment } from 'utils/types';
import styles from './comment.module.scss';
import { Button } from 'components/button/button';
import TrashIcon from 'components/icons/trash-icon';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { deleteComment } from 'services/slices/articles';
import { selectCurrentUser } from 'services/selectors/profile';
import { toLocalDate } from 'utils/date-time';
import { LikeButton } from 'components/like-button/like-button';

interface IComment {
  comment: TComment;
  slug: string | undefined;
}

const Comment: FC<IComment> = ({ comment, slug }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const showActions =
    currentUser && currentUser?.username === comment.author.username;
  const localCommentDate = toLocalDate(comment.createdAt);
  const onCommentDelete = useCallback(() => {
    dispatch(deleteComment(slug, comment.id));
  }, [comment, dispatch, slug]);

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
            <span className={styles.box__date}>{localCommentDate}</span>
          </div>
        </div>
        {showActions ? (
          <div className={styles.box__trash}>
            <Button
              type="secondary"
              icon={<TrashIcon />}
              onClick={onCommentDelete}
            />
          </div>
        ) : (
          <LikeButton />
        )}
      </div>
      <div>
        <p className={styles.container__text}>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
