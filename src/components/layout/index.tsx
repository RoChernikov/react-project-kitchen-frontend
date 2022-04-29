import React, { FC } from 'react';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
//--------------------------------------------------------------------------------

const Layout: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
