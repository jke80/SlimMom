import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navContainer}>
      {!isLoggedIn && (
        <NavLink className={css.navLink} to="/SlimMom/login">
          log in
        </NavLink>
      )}
      {!isLoggedIn && (
        <NavLink className={css.navLink} to="/SlimMom/register">
          registration
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={css.navLink} to="/SlimMom/diary">
          diary
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={css.navLink} to="/SlimMom/calculator">
          calculator
        </NavLink>
      )}
    </nav>
  );
};
