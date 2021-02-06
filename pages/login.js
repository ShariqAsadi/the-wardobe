import { useState } from 'react';
import { useAuth } from '../utils/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signinWithEmail, signupWithEmail } = useAuth();

  const handleSignin = e => {
    e.preventDefault();
    signinWithEmail(email, password);
  };

  const handleSignup = e => {
    e.preventDefault();
    signupWithEmail(email, password);
  };

  return (
    <>
      <div>Signin</div>
      <form onSubmit={handleSignin}>
        <input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='text'
          name='password'
          value={password}
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
        />
      </form>
      <button onClick={handleSignin}>Submit</button>

      <div>Signup</div>
      <form onSubmit={handleSignup}>
        <input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='text'
          name='password'
          value={password}
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
        />
      </form>
      <button onClick={handleSignup}>Submit</button>
    </>
  );
}
