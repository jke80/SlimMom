import css from './Button.module.css';

export const Button = ({ onClick, type, className, children }) => {
  return (
    <button
      className={`${css.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
