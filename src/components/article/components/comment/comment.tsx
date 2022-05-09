import { FC, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TComment } from 'utils/types';
import styles from './comment.module.scss';
import { Button } from 'components/button/button';
import TrashIcon from 'components/icons/trash-icon';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { deleteComment } from 'services/slices/articles';
import { signIn } from 'services/slices/profile';
import { selectCurrentUser } from 'services/selectors/profile';
import { toLocalDate } from 'utils/date-time';

interface IComment {
  comment: TComment;
  slug: string | undefined;
}

const Comment: FC<IComment> = ({ comment, slug }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const showActions = currentUser && currentUser?.username === comment.author.username;
  const localCommentDate = toLocalDate(comment.createdAt);
  

  const onCommentDelete = useCallback(() => {
    console.log(comment);
    dispatch(deleteComment(slug, comment.id));
  }, [dispatch]);

  useEffect(() => {
    // временный хардкор логин
    dispatch(
      signIn({
        user: { username: 'julia', email: 'julia@gmail.com', password: '123' },
      })
    );
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
              {localCommentDate}
            </span>
          </div>
        </div>
        {showActions && (
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
