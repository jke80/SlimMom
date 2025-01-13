import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from 'utils/constants';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isTablet = useMediaQuery({ query: SCREEN_SIZE.TABLET });
  const isMobile = useMediaQuery({ query: SCREEN_SIZE.MOBILE });

  return (
    <div className={css.container}>
      <Logo />
      {((!isMobile && !isTablet) || !isLoggedIn) && <Navigation />}
      {(isMobile || isTablet) && isLoggedIn && <MobileMenu />}
    </div>
  );
};
