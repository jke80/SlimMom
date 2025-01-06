import css from './FloatingLabelInput.module.css';
import { useState } from 'react';
export const FloatLabelInput = props => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={css.container}>
      <input
        className={`${css.input}  ${focus || props.value ? css.filled : ''} ${
          props.className
        }`}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <label className={css.label} htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};
