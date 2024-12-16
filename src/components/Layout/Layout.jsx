import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Outlet />
    </div>
  );
};
