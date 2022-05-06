import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './article-preview.module.scss';
import imgPath from '../../assets/images/author-image.jpg';
import { ReactComponent as LikeDefault } from '../../assets/images/like-default.svg';
import { TArticle } from 'utils/types';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

interface IArticlePreview {
  article: TArticle;
  unfavorite: (slug: string) => void;
  favorite: (slug: string) => void;
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
        <div className={styles.author}>
          <img
            src={article?.author?.image}
            alt=""
            className={styles.author_avatar}
          />
          <div className={styles.author_text}>
            <p className={styles.author_name}>{article?.author?.username}</p>
            <p className={styles.date}>{article?.createdAt}</p>
          </div>
        </div>
        <div className={styles.likes}>
          <span className={styles.likes_count}>{article?.favoritesCount}</span>
          <LikeDefault className={styles.like_icon} />
        </div>
      </div>
      <div className={styles.article_main}>
        <h1 className={styles.title}>{article?.title}</h1>
        <p className={styles.article_text}>{article?.body}</p>
      </div>
      <div className={styles.article_footer}>
        <Link to="" className={styles.readmore}>
          Читать дальше
        </Link>
        <div className={styles.tags}>
          <div className={`${styles.tag} ${styles.active_tag}`}>
            #перваяработа
          </div>
          {article?.tagList.map((tag) => {
            return (
              <div className={`${styles.tag}`} key={tag}>
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
