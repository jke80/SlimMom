import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import css from './Layout.module.css';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <div>
        <Header />
        <Outlet />
      </div>
      {isLoggedIn && <RightSideBar />}
    </div>
  );
};
