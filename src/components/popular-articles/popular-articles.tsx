import { FC } from 'react';
import ArticleSmallPreview from '../article-small-preview/article-small-preview';
import styles from './popular-articles.module.scss';

const PopularArticles:FC = () => {
  const localArticlesData = [
    {
      author: 'Name Surname',
      image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Что сделать, чтобы ваше резюме выделялось',
      likes: 24,
      date: '09.04.2022'
    },
    {
      author: 'Name Surname',
      image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Что происходит с рынком IT?',
      likes: 21,
      date: '09.04.2022'
    },
    {
      author: 'Name Surname',
      image: 'https://images.unsplash.com/photo-1650484542731-18a22dd17e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Как искать работу в условиях турбулентности',
      likes: 20,
      date: '09.04.2022'
    },
  ]
  return (
    <>
      <h1>Популярные материалы</h1>
      <ul className={styles.popularArticles__list}>
        {localArticlesData.map((article) => {
          return (
            <li className={styles.popularArticles__item}>
              <ArticleSmallPreview 
                author={article.author}
                image={article.image}
                title={article.title}
                likes={article.likes}
                date={article.date}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default PopularArticles;