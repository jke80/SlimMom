import { useMediaQuery } from 'react-responsive';
import css from './Modal.module.css';
import { ReactComponent as CloseIcon } from '../../images/close_icon.svg';
import { ReactComponent as BackIcon } from '../../images/back_icon.svg';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
export const Modal = ({ isOpen, onClose, children }) => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });

  if (!isOpen) enableBodyScroll(document.body);
  if (!isOpen) return null;

  disableBodyScroll(document.body);
  return (
    <div className={css.container}>
      <div className={css.subContainer}>
        <button className={css.closeButton} onClick={onClose}>
          {isMobile ? (
            <BackIcon width="12" height="12" />
          ) : (
            <CloseIcon width="20" height="20" />
          )}
        </button>
        {children}
      </div>
    </div>
  );
};
