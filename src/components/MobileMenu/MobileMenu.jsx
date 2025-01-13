import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../images/menu_icon.svg';
import { ReactComponent as CloseIcon } from '../../images/close_icon.svg';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { SCREEN_SIZE } from 'utils/constants';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import css from './MobileMenu.module.css';
import { useMediaQuery } from 'react-responsive';

export const MobileMenu = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isTablet = useMediaQuery({ query: SCREEN_SIZE.TABLET });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = e => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className={css.container}>
      {isTablet && isLoggedIn && <UserInfo />}
      <button type="button" className={css.button} onClick={handleButtonClick}>
        {!isOpen ? (
          <MenuIcon width="24" height="24" />
        ) : (
          <CloseIcon width="24" height="24" />
        )}
      </button>
      {isOpen && (
        <div className={css.menuContainer}>
          <button
            type="button"
            className={`${css.menuItemButton} ${
              location.pathname === '/SlimMom/diary' && css.active
            }`}
            onClick={() => {
              navigate('/SlimMom/diary');
              setIsOpen(false);
              console.log(location.pathname);
            }}
          >
            diary
          </button>
          <button
            type="button"
            className={`${css.menuItemButton} ${
              location.pathname === '/SlimMom/calculator' && css.active
            }`}
            onClick={() => {
              navigate('/SlimMom/calculator');
              setIsOpen(false);
              console.log(location.pathname);
            }}
          >
            calculator
          </button>
        </div>
      )}
    </div>
  );
};
