import { FC, ChangeEvent, SyntheticEvent, useCallback } from 'react';
import { useState } from 'react';
import styles from './comment-input.module.scss';
import { Button } from 'components/button/button';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { postComment } from 'services/slices/articles';
import { selectCurrentUser } from 'services/selectors/profile';
import { toLocalDate } from 'utils/date-time';

interface ICommentInput {
  slug: string | undefined;
}

const CommentInput: FC<ICommentInput> = ({ slug }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentDate = toLocalDate();

  const [body, setBody] = useState('');

  const changeBody = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(evt.target.value);
  };

  const createComment = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      dispatch(postComment(slug, { comment: { body } }));
      setBody('');
    },
    [dispatch, slug, body]
  );

  return (
    <form onSubmit={createComment}>
      <div className={styles.line}>
        <textarea
          className={styles.textarea}
          placeholder="Напишите свой комментарий..."
          value={body}
          onChange={changeBody}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.box}>
          <img
            src={currentUser.image}
            className={styles.info__img}
            alt={currentUser.username}
          />
          <div className={styles.info__smallbox}>
            <div className={styles.info__name}>{currentUser.username}</div>
            <span className={styles.info__date}>
              {currentDate}
            </span>
          </div>
        </div>
        <Button
          type="primary"
          color="primary"
          children="Отправить комментарий"
          disabled={body ? false : true}
        />
      </div>
    </form>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
export default CommentInput;
