import React from 'react';
import Logo from './Logo';
import { useAuth } from '../utils/useAuth';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user } = useAuth();
  return (
    <Flex align='center' justify='space-between' px='5' py='2'>
      <Logo />
      <Box
        d='flex'
        alignItems='center'
        justifyContent='center'
        fontSize='16px'
        color='black'
      >
        <FaUserCircle />
        <Text ml='2' mr='8'>
          {user ? user.email : 'Login'}
        </Text>
        <FaShoppingCart />
      </Box>
    </Flex>
  );
};

export default Navbar;
