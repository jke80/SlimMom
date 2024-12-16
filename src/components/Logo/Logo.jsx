import { NavLink } from 'react-router-dom';
import logoDesktop from '../../images/logo_desktop.svg';
import logoTablet from '../../images/logo_tablet.svg';
import logoMobile from '../../images/logo_mobile.svg';
import { useMediaQuery } from 'react-responsive';

export const Logo = () => {
  const isDesktop = useMediaQuery({ query: '(min-width:1200px)' });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1199px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });

  return (
    <NavLink to="/SlimMom/">
      {isDesktop && <img src={logoDesktop} alt="logo SlimMom desktop" />}
      {isTablet && <img src={logoTablet} alt="logo SlimMom tablet" />}
      {isMobile && <img src={logoMobile} alt="logo SlimMom mobile" />}
    </NavLink>
  );
};
