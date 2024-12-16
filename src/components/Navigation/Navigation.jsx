import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.navContainer}>
      <NavLink to="/SlimMom/login" className={css.navLink}>
        log in
      </NavLink>
      <NavLink to="/SlimMom/register" className={css.navLink}>
        registration
      </NavLink>
      <NavLink to="/SlimMom/diary" className={css.navLink}>
        diary
      </NavLink>
      <NavLink to="/SlimMom/calculator" className={css.navLink}>
        calculator
      </NavLink>
    </nav>
  );
};
