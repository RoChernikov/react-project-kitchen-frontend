import React, { FC } from 'react';
import styles from './loader.module.scss';
//--------------------------------------------------------------------------------

const Loader: FC = () => {
  return <div className={styles.loader}>Loading...</div>;
};

export default Loader;
