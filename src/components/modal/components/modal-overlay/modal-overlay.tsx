import styles from './modal-overlay.module.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
//--------------------------------------------------------------------------------

const ModalOverlay: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.modalOverlay}
      onClick={() => {
        navigate(-1);
      }}></div>
  );
};

export default ModalOverlay;
