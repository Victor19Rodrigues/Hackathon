import React from 'react';
import { Octicons, Feather } from '@expo/vector-icons';

import { Container, Header, HeaderIconsRight } from './styles';

export default function HeaderIcons() {
  return (
    <Container>
      <Header>
        <HeaderIconsRight>
          <Octicons name="search" size={24} color="#E60014" />
          <Feather name="shopping-bag" padding={30} size={24} color="#E60014" />
          <Feather name="user" size={24} color="#E60014" />
        </HeaderIconsRight>
      </Header>
    </Container>
  );
}
