import { useAuth } from '../utils/useAuth';
import { verifyIdToken } from '../firebase/firebaseAdmin';
import nookies from 'nookies';
import { APP_TOKEN } from '../utils/constants';
import { Box } from '@chakra-ui/react';

export default function Home({ userDetails }) {
  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout();
  };

  return (
    <Box bg='tomato'>
      Hello
      <div>
        {userDetails?.email
          ? `Email: ${userDetails.email} and UID: ${userDetails.uid}`
          : 'No user'}
      </div>
      {userDetails?.email && <button onClick={handleLogout}>Logout</button>}
    </Box>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies[APP_TOKEN]);
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
