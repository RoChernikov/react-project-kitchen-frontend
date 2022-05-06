import React, { FC } from 'react';
import { TComment, TUser } from 'utils/types';
import Comment from '../comment/comment';
import styles from './comment-list.module.scss';

interface ICommentList {
  comments: TComment[]; //На данный момент нет возможности проверить тип, так как комменты не постятся (500-тит сервер)
  currentUser: TUser | null;
  slug: string | undefined;
}

const CommentList: FC<ICommentList> = ({ comments, currentUser, slug }) => {
  return (
    <>
      {comments?.map((comment: TComment) => (
        <Comment
          comment={comment}
          currentUser={currentUser}
          slug={slug}
          key={comment.id}
        />
      ))}
    </>
  );
};

export default CommentList;
