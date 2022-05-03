import React, { Dispatch, FC, SetStateAction } from 'react';
import DeleteButton from '../delete-button/delete-button';
import { Link } from 'react-router-dom';
import { TUser } from 'utils/types';

interface IComment {
  comment: any; //На данный момент нет возможности проверить тип, так как комменты не постятся (500-тит сервер)
  currentUser: TUser | null;
  slug: string;
}

const Comment: FC<IComment> = ({ comment, currentUser, slug }) => {
  const show = currentUser && currentUser.username === comment.author.username;
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link to={`/@${comment.author.username}`} className="comment-author">
          <img
            src={comment.author.image}
            className="comment-author-img"
            alt={comment.author.username}
          />
        </Link>
        &nbsp;
        <Link to={`/@${comment.author.username}`} className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
        <DeleteButton
          show={show}
          slug={slug}
          commentId={comment.id}
          onClick={function (
            payload: Promise<string>,
            commentId: string
          ): Dispatch<SetStateAction<string>> {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};

export default Comment;
