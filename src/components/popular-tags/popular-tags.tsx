import { FC } from 'react';
import styles from './popular-tags.module.scss';

const PopularTags:FC = () => {
    const localTags: Array<string> = [
      'опыт',
      'первая работа',
      'стажировка',
      'pet-проекты',
      'опыт',
      'перваяработа',
      'стажировка',
      'pet-проекты',
      'опыт',
      'перваяработа',
    ]

    const activeLocalTags: Array<string> = [
      'опыт',
    ]
  
    return (
      <div className={styles.popularTags}>
        <h1 className={styles.popularTags__title}>Популярные теги</h1>
        <ul className={styles.popularTags__tagsList}>
            {localTags.map((tag) => <li 
                className={`
                  ${styles.popularTags__tagsItem}
                  ${activeLocalTags.includes(tag) ? styles.popularTags__tagsItem_active : ''}
                `}
              >
                {`#${tag}`}
              </li>
            )}
        </ul>
      </div>
    )
  }
  
  export default PopularTags;