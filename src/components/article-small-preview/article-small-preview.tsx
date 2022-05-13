import { FC } from 'react';
import { toLocalDate } from 'utils/date-time';
import styles from './article-small-preview.module.scss';
import { Link } from 'react-router-dom';

interface IArticleSmallPreview {
  author: string;
  image: string;
  title: string;
  likes: number;
  date: string;
  slug: string;
}

const ArticleSmallPreview: FC<IArticleSmallPreview> = ({
  author,
  image,
  title,
  likes,
  date,
  slug,
}) => {
  return (
    <div className={styles.articleSmallPreview}>
      <div className={styles.articleSmallPreview__info}>
        <Link
          to={`/profile/@${author}`}
          className={styles.articleSmallPreview__author}>
          <img
            className={styles.articleSmallPreview__image}
            alt={author}
            src={image}
          />
          <div className={styles.articleSmallPreview__personal}>
            <p className={styles.articleSmallPreview__authorName}>{author}</p>
            <p className={styles.articleSmallPreview__date}>
              {toLocalDate(date)}
            </p>
          </div>
        </Link>

        <div className={styles.articleSmallPreview__likes}>
          <p className={styles.articleSmallPreview__likesCounter}>{likes}</p>
          <div className={styles.articleSmallPreview__likesIcon} />
        </div>
      </div>
      <Link
        to={`/articles/${slug}`}
        className={styles.articleSmallPreview__titleLink}>
        {title}
      </Link>
    </div>
  );
};

export default ArticleSmallPreview;
