import css from './Modal.module.css';
import { ReactComponent as CloseIcon } from '../../images/close_button.svg';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={css.container}>
      <div className={css.subContainer}>
        <button className={css.closeButton} onClick={onClose}>
          <CloseIcon width="20" height="20" />
        </button>
        {children}
      </div>
    </div>
  );
};
