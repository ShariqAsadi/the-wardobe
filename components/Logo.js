import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Stack spacing={0} align='center'>
      <img src='/wardrobe.png' alt='logo image' width='40px' />
      <Text fontWeight='medium' color='black'>
        The Wardrobe
      </Text>
    </Stack>
  );
};

export default Logo;
