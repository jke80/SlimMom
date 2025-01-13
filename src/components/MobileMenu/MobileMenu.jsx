import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className={css.container}>
      {isTablet && isLoggedIn && <UserInfo />}
      <button
        type="button"
        className={css.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <MenuIcon width="24" height="24" />
        ) : (
          <CloseIcon width="24" height="24" />
        )}
      </button>
      {isOpen && (
        <div className={css.menuContainer}>
          <NavLink className={css.navLink} to="/SlimMom/diary">
            diary
          </NavLink>
          <NavLink className={css.navLink} to="/SlimMom/calculator">
            calculator
          </NavLink>
        </div>
      )}
    </div>
  );
};
