import { useAuth } from '../utils/useAuth';
import { verifyIdToken } from '../firebase/firebaseAdmin';
import nookies from 'nookies';
export default function Home({ userDetails }) {
  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout();
  };

  return (
    <div>
      Hello
      <div>
        {userDetails?.email
          ? `Email: ${userDetails.email} and UID: ${userDetails.uid}`
          : 'No user'}
      </div>
      {userDetails?.email && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: {
        userDetails: {
          email,
          uid,
        },
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
