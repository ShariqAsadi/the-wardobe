import { useAuth } from '../utils/useAuth';

export default function Home() {
  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout();
  };

  return (
    <div>
      Hello
      <div>{user ? 'User is authenticated' : 'No user'}</div>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
