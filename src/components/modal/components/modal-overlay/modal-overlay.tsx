import styles from './modal-overlay.module.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
//--------------------------------------------------------------------------------

const ModalOverlay: FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.modalOverlay}
      onClick={() => {
        onClose();
      }}></div>
  );
};

export default ModalOverlay;
