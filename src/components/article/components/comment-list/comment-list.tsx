import React, { FC } from 'react';
import { TUser } from 'utils/types';
import Comment from '../comment/comment';
import styles from './comment-list.module.scss';

interface ICommentList {
  comments: any; //На данный момент нет возможности проверить тип, так как комменты не постятся (500-тит сервер)
  currentUser: TUser | null;
  slug: string;
}

const CommentList: FC<ICommentList> = ({ comments, currentUser, slug }) => {
  return (
    <div>
      {comments.map((comment: any) => {
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
