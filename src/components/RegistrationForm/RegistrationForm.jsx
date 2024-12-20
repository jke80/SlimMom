import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin, authRegister } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button';

export const RegistrationForm = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = state.name;
    const email = state.email;
    const password = state.password;
    dispatch(authRegister({ user: { email, password, name }, token: 'token' }));
    dispatch(authLogin({ user: { email, password, name }, token: 'token' }));
  };

  const handleClick = () => {
    navigate('/SlimMom/login');
  };

  return (
    <>
      <h1>Register</h1>
      <form name="registration_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name*"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
        />
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

        <Button type="submit">Register</Button>
        <Button type="button" onClick={handleClick}>
          Log In
        </Button>
        {/* <button type="submit">Register</button>
        <button type="button" onClick={handleClick}>
          Log In
        </button> */}
      </form>
    </>
  );
};
