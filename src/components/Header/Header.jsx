import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';

import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.container}>
      <Logo />
      <Navigation />
    </div>
  );
};
