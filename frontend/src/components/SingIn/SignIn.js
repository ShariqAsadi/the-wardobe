import React, { useState } from 'react';
import styles from './SignIn.module.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <Button isGoogleSignIn>Sign in with Google</Button>
          <Button isGoogleSignIn>Sign in with Facebook</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
