import React, { Dispatch, FC, SetStateAction } from 'react';
import DeleteButton from '../delete-button/delete-button';
import { Link } from 'react-router-dom';
import { TUser } from 'utils/types';
import styles from './comment.module.scss';

interface IComment {
  comment: any; //На данный момент нет возможности проверить тип, так как комменты не постятся (500-тит сервер)
  currentUser: TUser | null;
  slug: string;
}

const Comment: FC<IComment> = ({ comment, currentUser, slug }) => {
  const show = currentUser && currentUser.username === comment.author.username;
  return (
    <div className={styles.container}>
      <div className={styles.smallcontainer}>
        <div className={styles.box}>
          <Link to={`/@${comment.author.username}`} className="comment-author">
            <img
              src={comment.author.image}
              className={styles.container__img}
              alt={comment.author.username}
            />
          </Link>
          <div className={styles.box__info}>
            <Link to={`/@${comment.author.username}`} className={styles.box__name}>
              {comment.author.username}
            </Link>
            <span className={styles.box__date}>
              {new Date(comment.createdAt).toDateString()}
            </span>
          </div>
        </div>
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
      <div>
        <p className={styles.container__text}>{comment.body}</p>
      </div>

    </div>
  );
};

export default Comment;
