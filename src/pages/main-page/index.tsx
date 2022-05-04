import React, { FC } from 'react';
import styles from './main-page.module.scss';
import { useLocation, Link } from 'react-router-dom';
//--------------------------------------------------------------------------------

const MainPage: FC = () => {
  const location = useLocation();
  return (
    <div className={styles.main}>
      MAIN PAGE
      <Link
        to={`/modal`}
        state={{ backgroundLocation: location }}
        className={styles.main__link}
        children={'ТЕСТ МОДАЛКИ'}
      />
    </div>
  );
};

export default MainPage;
