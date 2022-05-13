import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { selectArticles } from 'services/selectors/articles';
import { getProfile, resetSelectedProfile } from 'services/slices/profile';
import ArticlePreview from 'components/article-preview/article-preview';
import styles from './profile.module.scss';
import { Button } from 'components/button/button';
import PlusIcon from 'components/icons/plus-icon';
import MinusIcon from 'components/icons/minus-icon';
import Loader from 'components/loader/loader';

const ProfilePage: FC = () => {
  const { username } = useParams();
  const { isAuth, user, selectedProfile } = useAppSelector(
    (state) => state.profile
  );
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);

  // const isUser = currentUser && currentUser.username === currentUser.username;

  useEffect(() => {
    dispatch(getProfile(username));
    return () => {
      dispatch(resetSelectedProfile());
    };
  }, [dispatch, username]);

  return (
    <>
      {!selectedProfile ? (
        <div
          style={{
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Loader />
        </div>
      ) : (
        <div className={styles.profile}>
          <div className={styles.usercontainer}>
            <div className={styles.avatar}>
              <img
                src={selectedProfile.image}
                className={styles.avatar__img}
                alt={selectedProfile.username}
              />
            </div>
            <h4 className={styles.usercontainer__text}>
              {selectedProfile ? selectedProfile.username : ''}
            </h4>
            {user.username !== selectedProfile.username && (
              <Button
                type="primary"
                color="primary"
                icon={<PlusIcon />}
                children="Подписаться"
              />
            )}
          </div>

          <ul className={styles.articleList}>
            {articles.map((article) => {
              return <ArticlePreview article={article} key={article.slug} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
