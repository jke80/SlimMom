import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { UserInfo } from 'components/UserInfo/UserInfo';
import css from './Header.module.css';
export const Header = () => {
  return (
    <div className={css.container}>
      <Logo />
      <Navigation />
      <UserInfo />
    </div>
  );
};
