import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MainPage } from 'pages/MainPage/MainPage';
import { CalculatorPage } from 'pages/CalculatorPage/CalculatorPage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { DiaryPage } from 'pages/DiaryPage/DiaryPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectToken } from '../redux/auth/authSelectors';
import { useEffect } from 'react';
import { authCurrent } from '../redux/auth/authSlice';

export const App = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (isRefreshing) return;
    if (token === 'token')
      dispatch(authCurrent({ name: 'Евгений', email: 'kolomoycev@gmail.com' }));
  }, [dispatch, isRefreshing, token]);

  return (
    <Routes>
      <Route path="/SlimMom/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="diary" element={<DiaryPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
        </Route>
        <Route path="" element={<RestrictedRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/SlimMom/" />} />
    </Routes>
  );
};
