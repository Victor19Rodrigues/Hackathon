import React from 'react';
import { MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';

import { Container, Header, HeaderIconsRight } from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="#E60014" />

        <HeaderIconsRight>
          <Octicons name="search" size={24} color="#E60014" />
          <Feather name="shopping-bag" padding={30} size={24} color="#E60014" />
          <MaterialCommunityIcons name="bell-outline" size={24} color="#E60014" />
        </HeaderIconsRight>
      </Header>
    </Container>
  );
}
