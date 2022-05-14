import { FC, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './header-menu.module.scss';
import { ReactComponent as EditIcon } from '../../assets/images/edit-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/settings-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/logout-icon.svg';
import { useAppSelector, useAppDispatch } from 'services/hooks';
import { signOut } from 'services/slices/profile';
import noAvatarImg from '../../assets/images/Intersect.svg';

const HeaderMenu: FC<{ image: string; name: string }> = ({ image, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profile);
  const userEl = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (evt: { target: any }) =>
      (userEl.current && userEl.current.contains(evt.target)) ||
      setIsOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className={styles.menu}>
      <div
        ref={userEl}
        className={styles.menu__user}
        onClick={() => {
          setIsOpen(true);
        }}>
        <img
          src={image ? image : noAvatarImg}
          alt={name}
          className={styles.menu__image}
        />
        <span className={styles.menu__text}>{name}</span>
      </div>
      <nav
        className={`${styles.menu__nav} ${isOpen && styles.menu__nav_active}`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link
              to={`profile/@${user.username}`}
              state={{ backgroundLocation: location }}
              className={styles.menu__link}>
              <div
                className={`${styles.menu__user} ${styles.menu__user_opened}`}>
                <img
                  src={image ? image : noAvatarImg}
                  alt={name}
                  className={styles.menu__image}
                />
                <span className={styles.menu__text}>{name}</span>
              </div>
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              to="new-article"
              state={{ backgroundLocation: location }}
              className={styles.menu__link}>
              <EditIcon className={styles.menu__icon} />
              <span className={styles.menu__text}>Новая запись</span>
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              to={'settings'}
              state={{ backgroundLocation: location }}
              className={styles.menu__link}>
              <SettingsIcon className={styles.menu__icon} />
              <span className={styles.menu__text}>Настройки</span>
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              to="/"
              className={styles.menu__link}
              onClick={() => {
                dispatch(signOut());
              }}>
              <LogoutIcon className={styles.menu__icon} />
              <span className={styles.menu__text}>Выйти</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
