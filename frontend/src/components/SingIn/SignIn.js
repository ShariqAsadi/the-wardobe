import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './SignIn.module.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {
  login,
  oauthFacebook,
  oauthGoogle
} from '../../redux/actions/authActions';
import GoogleLogin from 'react-google-login';
import FacebookButton from '../FacebookButton/FacebookButton';
import useInput from '../../hooks/useInput';

const INITIAL_STATE = {
  email: '',
  password: ''
};

const SignIn = () => {
  const { handleChange, values } = useInput(INITIAL_STATE);
  const { email, password } = values;
  const dispatch = useDispatch();

  const responseGoogle = res => {
    dispatch(oauthGoogle(res.accessToken));
  };
  const responseFacebook = res => {
    dispatch(oauthFacebook(res.accessToken));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className={styles['sign-in']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="password"
          handleChange={handleChange}
          name="password"
          value={password}
          required
          label="Password"
        />
        <div className={styles.buttons}>
          <Button type="submit">Sign In</Button>
          <GoogleLogin
            clientId="664346966163-6e2crrba13f0hg9hh5h3m5u50ipas4ed.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
              <Button
                isGoogleSignIn
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login with Google
              </Button>
            )}
          />
          <FacebookButton
            appId="759675984485774"
            autoLoad={false}
            fields="name,email,picture"
            textButton="Login with Facebook"
            callback={responseFacebook}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
