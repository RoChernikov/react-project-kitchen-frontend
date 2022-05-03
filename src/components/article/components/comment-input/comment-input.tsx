import { FC, ChangeEvent, SyntheticEvent, useCallback } from 'react';
import agent from '../../../../../src_old/agent';
import { connect } from 'react-redux';
import { useState } from 'react';
import { ADD_COMMENT } from '../../../../../src_old/constants/actionTypes';
import { TUser } from 'utils/types';

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
  onSubmit: (slug: string, {body}: any) => void;
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
      onSubmit(slug, {body});
      setBody('');
    },
    [onSubmit, slug, body]
  );

  return (
    <form className="card comment-form" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={changeBody}
          rows={3}
        />
      </div>
      <div className="card-footer">
        <img
          src={currentUser.image}
          className="comment-author-img"
          alt={currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
export default CommentInput
