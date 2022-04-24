import { FC, ChangeEvent, SyntheticEvent, useCallback } from 'react';
import agent from '../../../../agent';
import { connect } from 'react-redux';
import { useState } from 'react';
import { ADD_COMMENT } from '../../../../constants/actionTypes';

import { TAuthor } from '../../../../utils/types';

const mapStateToProps = (state) => ({ ...state.body });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (slug, { body }) =>
    dispatch({
      type: ADD_COMMENT,
      payload: agent.Comments.create(slug, { body }),
    }),
});

interface ICommentInput {
  slug: string;
  currentUser: TAuthor;
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
/*
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      body: '',
    };

    this.setBody = (ev) => {
      this.setState({ body: ev.target.value });
    };

    this.createComment = (ev) => {
      ev.preventDefault();
      const payload = agent.Comments.create(this.props.slug, {
        body: this.state.body,
      });
      this.setState({ body: '' });
      this.props.onSubmit(payload);
    };
  }

  render() {
    return (
      <form className="card comment-form" onSubmit={this.createComment}>
        <div className="card-block">
          <textarea
            className="form-control"
            placeholder="Write a comment..."
            value={this.state.body}
            onChange={this.setBody}
            rows="3"></textarea>
        </div>
        <div className="card-footer">
          <img
            src={this.props.currentUser.image}
            className="comment-author-img"
            alt={this.props.currentUser.username}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);*/
