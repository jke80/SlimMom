import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { authLogout } from '../../redux/auth/authSlice';
import css from './UserInfo.module.css';
export const UserInfo = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = e => {
    e.preventDefault();
    dispatch(authLogout());
  };

  return (
    <div className={css.container}>
      <p className={css.userName}>{user.name}</p>
      <button className={css.exitButton} type="button" onClick={handleClick}>
        exit
      </button>
    </div>
  );
};
