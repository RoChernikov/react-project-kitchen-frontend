import styles from './modal.module.scss';
import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import ModalOverlay from './components/modal-overlay/modal-overlay';
import React, {FC, ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
//--------------------------------------------------------------------------------

const Modal: FC<{children: ReactElement}> = ({children}) => {
  const navigate = useNavigate();
  const rootModal = document.getElementById('root-modal');

  useEffect(() => {
    const closeModalByEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && navigate(-1);
    };
    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [navigate]);

  return createPortal(
    <div className={styles.popup}>
      <div className={`pb-15 ${styles.popup__wrapper}`}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className={`mt-15 mr-10 ${styles.popup__closeButton}`}></button>
        {children}
      </div>
      <ModalOverlay />
    </div>,
    rootModal!
  );
};
export default Modal;
