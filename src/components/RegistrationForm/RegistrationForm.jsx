import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin, authRegister } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import css from './RegistrationForm.module.css';
import { FloatLabelInput } from 'components/Input/FloatingLabelInput';

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
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <form name="registration_form" onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          <FloatLabelInput
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
            label="Name *"
          />
          <FloatLabelInput
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
            label="Email *"
          />
          <FloatLabelInput
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
            label="Password *"
          />
        </div>
        <div className={css.buttonsContainer}>
          <Button type="submit" className={css.button}>
            Register
          </Button>
          <Button type="button" className={css.button} onClick={handleClick}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};
