import React, { FC } from 'react';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
//--------------------------------------------------------------------------------

const Header: FC = () => {
  return (
    <header className={styles.header}>
      Header
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <NavLink
              to={'/'}
              className={styles.sidebarLink}
              style={({ isActive }) =>
                isActive
                  ? { opacity: 1, pointerEvents: 'none', color: 'red' }
                  : { color: 'red', opacity: 0.5 }
              }>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'profile'}
              className={styles.sidebarLink}
              style={({ isActive }) =>
                isActive
                  ? { opacity: 1, pointerEvents: 'none', color: 'red' }
                  : { color: 'red', opacity: 0.5 }
              }>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
