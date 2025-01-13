import { NavLink } from 'react-router-dom';
import logoDesktop from '../../images/logo_desktop.svg';
import logoTablet from '../../images/logo_tablet.svg';
import logoMobile from '../../images/logo_mobile.svg';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from 'utils/constants';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isDesktop = useMediaQuery({ query: SCREEN_SIZE.DESKTOP });
  const isTablet = useMediaQuery({ query: SCREEN_SIZE.TABLET });
  const isMobile = useMediaQuery({ query: SCREEN_SIZE.MOBILE });

  return (
    <NavLink to="/SlimMom/">
      {isDesktop && <img src={logoDesktop} alt="logo SlimMom desktop" />}
      {(isTablet || (isMobile && isLoggedIn)) && (
        <img src={logoTablet} alt="logo SlimMom tablet" />
      )}
      {isMobile && !isLoggedIn && (
        <img src={logoMobile} alt="logo SlimMom mobile" />
      )}
    </NavLink>
  );
};
