import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/authActions';
import styles from './SignUp.module.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import useInput from '../../hooks/useInput';
import { useToasts } from 'react-toast-notifications';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp = () => {
  const { handleChange, values } = useInput(INITIAL_STATE);
  const { name, email, password, confirmPassword } = values;
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      addToast('Passwords do not match!', {
        appearance: 'error',
        autoDismiss: true
      });
      return;
    }
    dispatch(register(name, email, password));
  };

  return (
    <div className={styles['sign-up']}>
      <h2 className={styles.title}>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={styles['sign-up-form']} onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
