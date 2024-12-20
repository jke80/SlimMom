import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navContainer}>
      {!isLoggedIn && (
        <NavLink to="/SlimMom/login" className={css.navLink}>
          log in
        </NavLink>
      )}
      {!isLoggedIn && (
        <NavLink to="/SlimMom/register" className={css.navLink}>
          registration
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/SlimMom/diary" className={css.navLink}>
          diary
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/SlimMom/calculator" className={css.navLink}>
          calculator
        </NavLink>
      )}
    </nav>
  );
};
