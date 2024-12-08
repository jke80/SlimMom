import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MainPage } from 'pages/MainPage/MainPage';
import { CalculatorPage } from 'pages/CalculatorPage/CalculatorPage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { DiaryPage } from 'pages/DiaryPage/DiaryPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';

export const App = () => {
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
