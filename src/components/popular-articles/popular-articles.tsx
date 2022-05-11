import { FC } from 'react';
import { useAppSelector } from 'services/hooks';
import { selectArticles } from 'services/selectors/articles';
import { TArticle } from 'utils/types';
import ArticleSmallPreview from '../article-small-preview/article-small-preview';
import styles from './popular-articles.module.scss';

const PopularArticles:FC = () => {
  const articles = useAppSelector(selectArticles);
  // const localArticlesData = [
  //   {
  //     author: 'Name Surname',
  //     image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     title: 'Что сделать, чтобы ваше резюме выделялось',
  //     likes: 9,
  //     date: '09.04.2022',
  //     id: 1,
  //   },
  //   {
  //     author: 'Name Surname',
  //     image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     title: 'Что происходит с рынком IT?',
  //     likes: 2,
  //     date: '09.04.2022',
  //     id: 2,
  //   },
  //   {
  //     author: 'Name Surname',
  //     image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     title: 'Как искать работу в условиях турбулентности',
  //     likes: 20,
  //     date: '09.04.2022',
  //     id: 3,
  //   },
  //   {
  //     author: 'Name Surname',
  //     image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     title: 'Как искать работу в условиях турбулентности',
  //     likes: 120,
  //     date: '09.04.2022',
  //     id: 4,
  //   },
  //   {
  //     author: 'Name Surname',
  //     image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     title: 'Как искать работу в условиях турбулентности',
  //     likes: 1,
  //     date: '09.04.2022',
  //     id: 5,
  //   },
  // ]

  const popularSort = (arr: Array<TArticle>): Array<TArticle> => {
    if (arr.length < 2) return arr;
  
    const pivot = arr[0];
  
    const less: Array<TArticle> = [];
    const greater: Array<TArticle> = [];
    arr.slice(1).forEach((element: TArticle) => element.favoritesCount > pivot.favoritesCount ? less.push(element) : greater.push(element));
  
    return popularSort(less).concat(pivot, popularSort(greater));
  }

  const sortedArticlesByLikes = popularSort(articles);
  
  return (
    <>
      {!articles.length 
        ?
        <h2>No popular articles yet</h2> 
        : (
          <>
          <h1>Популярные материалы</h1><ul className={styles.popularArticles__list}>
              {sortedArticlesByLikes.map((article: TArticle) => {
                return (
                  <li key={article.updatedAt} className={styles.popularArticles__item}>
                    <ArticleSmallPreview
                      author={article.author.username}
                      image={article.author.image}
                      title={article.title}
                      likes={article.favoritesCount}
                      date={article.updatedAt} />
                  </li>
                );
              })}
            </ul>
          </>
      )}
    </>
  )
}

export default PopularArticles;