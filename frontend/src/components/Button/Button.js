import React from 'react';
import styles from './Button.module.css';
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? styles.inverted : ''} ${
      isGoogleSignIn ? styles['google-sign-in'] : ''
    } ${styles['custom-button']}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
