import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors } from '../../redux/actions/errorActions';
import styles from './SignInAndSignUp.module.css';
import SignIn from '../../components/SingIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import BusyOverlay from '../../components/BusyOverlay/BusyOverlay';
import { useToasts } from 'react-toast-notifications';

const SignInAndSignUp = () => {
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.error);
  const history = useHistory();
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
    return () => {
      dispatch(clearErrors());
    };
  }, [authenticated, history, dispatch]);

  useEffect(() => {
    if (error.msg && error.id) {
      addToast(error.msg, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  }, [error, addToast]);

  return (
    <>
      {loading && <BusyOverlay />}
      <div className={styles['sign-in-and-sign-up']}>
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default SignInAndSignUp;
