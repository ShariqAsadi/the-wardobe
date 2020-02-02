import React, { useState } from 'react';
import styles from './SignIn.module.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import GoogleLogin from 'react-google-login';
import FacebookButton from '../FacebookButton/FacebookButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const responseGoogle = res => {
    // await this.props.oauthGoogle(res.accessToken);
    // if (!this.props.errorMessage) {
    //   this.props.history.push('/dashboard');
    // }
    console.log(res);
  };
  const responseFacebook = res => {
    // await this.props.oauthFacebook(res.accessToken);
    // if (!this.props.errorMessage) {
    //   this.props.history.push('/dashboard');
    // }
    console.log(res);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      //To be implemented
    } catch (err) {
      console.log(err);
    }
  };

  const handleNameChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles['sign-in']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleNameChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="password"
          handleChange={handlePasswordChange}
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
