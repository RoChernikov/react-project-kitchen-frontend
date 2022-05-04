import CommentInput from '../comment-input/comment-input';
import CommentList from '../comment-list/comment-list';
import { Link } from 'react-router-dom';
import React from 'react';
import { FC } from 'react';
import { TUser } from 'utils/types';
import styles from './comment-container.module.scss';
//import ListErrors from '../../../../../src_old/components/list-errors/list-errors';

interface ICommentContainer {
  comments: any;
  //errors: any;
  slug: string;
  currentUser: TUser | null;
}

const CommentContainer: FC<ICommentContainer> = ({
  comments,
  //errors,
  slug,
  currentUser,
}) => {
  return currentUser ? (
    <div className={styles.container}>
      <p className={styles.container__header}>Комментарии</p>
      <div className={styles.inputbox}>
        {/* <ListErrors errors={errors} /> */}
        <CommentInput
          slug={slug}
          currentUser={currentUser}
          onSubmit={function (slug: string, { body }: any): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <CommentList comments={comments} slug={slug} currentUser={currentUser} />
    </div>
  ) : (
    //пока нет дизайна на залогиниться
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
