import React from 'react';
import styles from './SignInAndSignUp.module.css';
import SignIn from '../../components/SingIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
const SignInAndSignUp = () => {
  return (
    <div className={styles['sign-in-and-sign-up']}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
