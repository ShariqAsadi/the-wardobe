import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './SignInAndSignUp.module.css';
import SignIn from '../../components/SingIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUp = () => {
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  const history = useHistory();

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated, history]);

  return (
    <div className={styles['sign-in-and-sign-up']}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
