import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './article-preview.module.scss';
import imgPath from '../../assets/images/author-image.jpg';
import { ReactComponent as LikeDefault } from '../../assets/images/like-default.svg';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

interface IArticlePreview {
  article: {
    slug: string;
    favorited: boolean;
    author: { username: string; image: string };
    createdAt: string;
    favoritesCount: number;
    title: string;
    description: string;
    tagList: [];
  };
  unfavorite: (slug: string) => void;
  favorite: (slug: string) => void;
}

const ArticlePreview: FC = () => {
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
          <img src={imgPath} alt="" className={styles.author_avatar} />
          <div className={styles.author_text}>
            <p className={styles.author_name}>Екатерина Молокова</p>
            <p className={styles.date}>09 апреля 2022</p>
          </div>
        </div>
        <div className={styles.likes}>
          <span className={styles.likes_count}>1</span>
          <LikeDefault className={styles.like_icon} />
        </div>
      </div>
      <div className={styles.article_main}>
        <h1 className={styles.title}>История трудоустройства</h1>
        <p className={styles.article_text}>
          Это моя первая работа после четырёхлетнего перерыва. Сначала случился
          декрет, потом переезд в Амстердам. В новой стране я решила получать
          новую профессию и оказалась в 22-й когорте направления
          «Веб-разработка».
        </p>
      </div>
      <div className={styles.article_footer}>
        <Link to="" className={styles.readmore}>
          Читать дальше
        </Link>
        <div className={styles.tags}>
          <p className={`${styles.tag} ${styles.active_tag}`}>#перваяработа</p>
          <p className={styles.tag}>#перваяработа</p>
          <p className={styles.tag}>#перваяработа</p>
          <p className={styles.tag}>#перваяработа</p>
          <p className={styles.tag}>#перваяработа</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
