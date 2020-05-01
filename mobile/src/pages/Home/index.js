import React from 'react';
import { MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
import { Container, Header, HeaderIconsRight } from './styles';

import Carousel from '../../components/Carousel';
import Sugestions from '../../components/Sugestions';
import Products from '../../components/Products';

export default function Home() {
  return (
    <>
    <Container>
      
      <Sugestions/>

      <Carousel/>
      <Products/>
      
    </Container>
    </>
  );
}
