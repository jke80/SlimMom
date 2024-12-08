import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <p>Layout</p>;
      <Outlet />;
    </>
  );
};
