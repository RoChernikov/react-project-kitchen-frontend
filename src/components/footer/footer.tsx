import React, { FC } from 'react';
import styles from './footer.module.scss';

const Footer: FC<any> = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <p className={styles.container__text}>© Когда вырасту</p>
        <p className={styles.container__text}>
          Сделано студентами Яндекс.Практикума
        </p>
      </div>
    </div>
  );
};

export default Footer;
