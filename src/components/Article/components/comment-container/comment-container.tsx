import CommentInput from '../comment-input/comment-input';
import CommentList from '../comment-list/comment-list';
import { Link } from 'react-router-dom';
import React from 'react';
import { FC } from 'react';
import { TAuthor } from '../../../../utils/types';
import ListErrors from '../../../list-errors';

interface ICommentContainer {
  comments: any;
  errors: any;
  slug: string;
  currentUser: TAuthor | null;
}

const CommentContainer: FC<ICommentContainer> = ({
  comments,
  errors,
  slug,
  currentUser,
}) => {
  //console.log('SLUG', slug);
  return currentUser ? (
    <div className="col-xs-12 col-md-8 offset-md-2">
      <div>
        <ListErrors errors={errors} />
        <CommentInput slug={slug} currentUser={currentUser} />
      </div>
      <CommentList comments={comments} slug={slug} currentUser={currentUser} />
    </div>
  ) : (
    <div className="col-xs-12 col-md-8 offset-md-2">
      <p>
        <Link to="/login">Sign in</Link>
        &nbsp;or&nbsp;
        <Link to="/register">sign up</Link>
        &nbsp;to add comments on this article.
      </p>

      <CommentList comments={comments} slug={slug} currentUser={currentUser} />
    </div>
  );
};

export default CommentContainer;
