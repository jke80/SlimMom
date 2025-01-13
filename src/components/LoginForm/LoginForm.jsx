import { useState } from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { FloatLabelInput } from 'components/Input/FloatingLabelInput';

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
    navigate('/SlimMom/diary');
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Log In</h1>
      <form name="login_form" onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
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
            Log In
          </Button>
          <Button
            type="button"
            className={css.button}
            onClick={() => navigate('/SlimMom/register')}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
