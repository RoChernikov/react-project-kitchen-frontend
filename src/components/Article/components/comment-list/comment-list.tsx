import React, { FC } from 'react';
import Comment from '../comment/comment';
import { TAuthor } from '../../../../utils/types';

interface ICommentList {
  comments: any; //На данный момент нет возможности проверить тип, так как комменты не постятся (500-тит сервер)
  currentUser: TAuthor;
  slug: string;
}

const CommentList: FC<ICommentList> = ({ comments, currentUser, slug }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            comment={comment}
            currentUser={currentUser}
            slug={slug}
            key={comment.id}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
