import { useAuth } from '../utils/useAuth';
import { verifyIdToken } from '../firebase/firebaseAdmin';
import nookies from 'nookies';
import { APP_TOKEN } from '../utils/constants';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

export default function Home({ userDetails }) {
  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout();
  };

  return (
    <>
      <Navbar />
    </>
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
