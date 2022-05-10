import React, { FC } from 'react';
import styles from './profile-page.module.scss';
import { useLocation, Link } from 'react-router-dom';
//--------------------------------------------------------------------------------

const ProfilePage: FC = () => {
  const location = useLocation();
  return (
    <>
      <div className={styles.profile}>
        PROFILE PAGE
        <Link
          to={`/modal`}
          state={{ backgroundLocation: location }}
          className={styles.profile__link}
          children={'OPEN MODAL'}
        />
      </div>
    </>
  );
};

//export default ProfilePage;