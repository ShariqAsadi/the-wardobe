import React from 'react';
import styles from './Button.module.css';
import { BeatLoader } from 'react-spinners';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  loading,
  ...otherProps
}) => (
  <button
    className={`${inverted ? styles.inverted : ''} ${
      isGoogleSignIn ? styles['google-sign-in'] : ''
    } ${styles['custom-button']}`}
    {...otherProps}
  >
    {loading ? (
      <>
        <BeatLoader size={10} color="#FFF" />
      </>
    ) : (
      <>{children}</>
    )}
  </button>
);

export default CustomButton;
