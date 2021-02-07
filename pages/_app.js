import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../utils/useAuth';
import { extendTheme } from '@chakra-ui/react';
import { styles } from '../styles/globalStyles';

const theme = extendTheme({ styles });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
