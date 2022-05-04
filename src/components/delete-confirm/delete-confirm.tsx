import React, { FC } from 'react';
import styles from './delete-confirm.module.scss';
//--------------------------------------------------------------------------------

const DeleteConfirm: FC = () => {
  return (
    <>
      <p className={styles.text}>
        Нажимая кнопку «Удалить запись», материал будет удален без возможности
        восстановления.
      </p>
      <button
        style={{ height: 40, width: 148, marginTop: 32, marginBottom: 32 }}>
        Удалить запись
      </button>{' '}
      {/* ЗАМЕНИТЬ КНОПКУ НА УНИВЕРСАЛЬНЫЙ КОМПОНЕНТ*/}
    </>
  );
};

export default DeleteConfirm;
