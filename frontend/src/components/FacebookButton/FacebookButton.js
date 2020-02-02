import React from 'react';
import FacebookLogin from 'react-facebook-login';
import styles from './FacebookButton.module.css';
const FacebookButton = props => {
  return (
    <FacebookLogin
      {...props}
      cssClass={`${styles['facebook-sign-in']} ${styles['custom-button']}`}
    />
  );
};

export default FacebookButton;
