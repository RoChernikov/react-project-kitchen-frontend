import { FC, ChangeEvent, SyntheticEvent, useCallback } from 'react';
import agent from '../../../../../src_old/agent';
import { connect } from 'react-redux';
import { useState } from 'react';
import { ADD_COMMENT } from '../../../../../src_old/constants/actionTypes';
import { TUser } from 'utils/types';
import styles from './comment-input.module.scss';
import { Button } from 'components/button/button';

// const mapStateToProps = (state) => ({ ...state.body });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (slug, { body }) =>
//     dispatch({
//       type: ADD_COMMENT,
//       payload: agent.Comments.create(slug, { body }),
//     }),
// });

interface ICommentInput {
  slug: string;
  currentUser: TUser;
  onSubmit: (slug: string, { body }: any) => void;
}

const CommentInput: FC<ICommentInput> = ({ slug, onSubmit, currentUser }) => {
  const [body, setBody] = useState('');

  const changeBody = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(evt.target.value);
  };

  const createComment = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      console.log("body", body);
      onSubmit(slug, { body });
      setBody('');
    },
    [onSubmit, slug, body]
  );

  return (

    <form onSubmit={createComment} >
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
            <div className={styles.info__name}>
              {currentUser.username}
            </div>
            <span className={styles.info__date}>
              09 апреля 2021 {/* вообще странное место для даты, ее что, обновлять пока чел пишет коммент? */}
            </span>
          </div>
        </div>
        <Button type="primary" color="primary" children="Отправить комментарий" />
      </div>

    </form>

  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
export default CommentInput
