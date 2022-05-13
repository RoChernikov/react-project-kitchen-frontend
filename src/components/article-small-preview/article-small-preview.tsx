import { FC } from 'react';
import styles from './article-small-preview.module.scss';
import { Link } from 'react-router-dom';
import Author from '../../components/author';
import { toLocalDate } from 'utils/date-time';

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
        <Author username={author} image={image} date={toLocalDate(date)} />
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
