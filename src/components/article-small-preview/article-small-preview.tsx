import { FC } from 'react';
import styles from './article-small-preview.module.scss';

interface IArticleSmallPreview {
  author: string;
  image: string;
  title: string;
  likes: number;
  date: string;
}

const ArticleSmallPreview:FC<IArticleSmallPreview> = ({ author, image, title, likes, date }) => {
  return (
    <div className={styles.articleSmallPreview}>
      <div className={styles.articleSmallPreview__info}>
        <img className={styles.articleSmallPreview__image} alt={author} src={image}/>
        <div className={styles.articleSmallPreview__personal}>
          <a className={styles.articleSmallPreview__authorLink} href="#">{author}</a>
          <p className={styles.articleSmallPreview__date}>{date}</p>
        </div>
        <div className={styles.articleSmallPreview__likes}>
          <p className={styles.articleSmallPreview__likesCounter}>{likes}</p>
          <div className={styles.articleSmallPreview__likesIcon} />
        </div>
      </div>
      <a className={styles.articleSmallPreview__titleLink} href="#">{title}</a>
    </div>
  )
}

export default ArticleSmallPreview;