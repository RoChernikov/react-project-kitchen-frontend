import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './article-preview.module.scss';
import imgPath from '../../assets/images/author-image.jpg';
import { ReactComponent as LikeDefault } from '../../assets/images/like-default.svg';
import { TArticle } from 'utils/types';
import { toLocalDate } from 'utils/date-time';
import { LikeButton } from 'components/like-button/like-button';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

interface IArticlePreview {
  article: TArticle;
  // unfavorite: (slug: string) => void;
  // favorite: (slug: string) => void;
}

const ArticlePreview: FC<IArticlePreview> = ({ article }) => {
  // const favoriteButtonClass = article.favorited
  //   ? FAVORITED_CLASS
  //   : NOT_FAVORITED_CLASS;

  // const handleClick = (ev: any) => {
  //   ev.preventDefault();
  //   if (article.favorited) {
  //     unfavorite(article.slug);
  //   } else {
  //     favorite(article.slug);
  //   }
  // };

  return (
    <div className={styles.article_preview}>
      <div className={styles.header}>
        <Link to={`/profile/`} className={styles.author}>
          <img
            src={article?.author?.image}
            alt={`${article?.author?.username} avatar`}
            className={styles.author_avatar}
          />
          <div className={styles.author_text}>
            <p className={styles.author_name}>{article?.author?.username}</p>
            <p className={styles.date}>{toLocalDate(article?.createdAt)}</p>
          </div>
        </Link>
        <Link to={`/articles/${article?.slug}`} className={styles.likes}>
          <span className={styles.likes_count}>{article?.favoritesCount}</span>
          <LikeButton active={article?.favorited} />
        </Link>
      </div>
      <Link to={`/articles/${article?.slug}`} className={styles.article_main}>
        <div className={styles.article_main}>
          <h1 className={styles.title}>{article?.title}</h1>
          <p className={styles.article_text}>{article?.description}</p>
        </div>
      </Link>
      <div className={styles.article_footer}>
        <Link to={`/articles/${article?.slug}`} className={styles.readmore}>
          Читать дальше
        </Link>
        <div className={styles.tags}>
          {article?.tagList.map((tag, index) => {
            return (
              <div className={`${styles.tag}`} key={index}>
                {`#${tag}`}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
