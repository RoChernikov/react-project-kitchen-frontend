import React, { FC } from 'react';
import styles from './test-component.module.scss';
//--------------------------------------------------------------------------------

interface ITestComponent {
  children: string;
}

const TestComponent: FC<ITestComponent> = ({ children }) => {
  return (
    <div className={styles.header}>
      <span className={styles.header__text}>{children}</span>
    </div>
  );
};

export default TestComponent;
