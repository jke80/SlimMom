import { useState } from 'react';
// import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button';

export const LoginForm = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = e => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const email = state.email;
    const password = state.password;
    dispatch(
      authLogin({ user: { email, password, name: 'guest' }, token: 'token' })
    );
  };

  return (
    <>
      <h1>Log In</h1>
      <form name="login_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email*"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Password*"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Log In</Button>
        <Button type="button" onClick={() => navigate('/SlimMom/register')}>
          Register
        </Button>
      </form>
    </>
  );
};
