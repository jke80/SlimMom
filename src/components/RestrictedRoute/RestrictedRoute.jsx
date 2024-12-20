import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
export const RestrictedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn && <Outlet />;
};
