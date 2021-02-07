import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../utils/useAuth';
import { extendTheme } from '@chakra-ui/react';
import { styles } from '../styles/globalStyles';
import { fonts, colors } from '../styles/theme';

const theme = extendTheme({ fonts, styles, colors });

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
