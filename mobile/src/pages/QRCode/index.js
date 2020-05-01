import React from 'react';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

export default function QRCode() {
  return (
    <Container>
      <Text>QRCode</Text>
      <Feather name="home" size={28} color="#e02041" />
    </Container>
  );
}
