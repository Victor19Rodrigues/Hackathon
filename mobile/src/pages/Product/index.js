import React from 'react';
import { ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { Container, Content, Img, Title } from './styles';

import imgCard from '../../assets/img/product/apple-watch.png';

export default function Product() {
  return (
    <>
      <Container>
        <ScrollView horizontal>
          <Img source={imgCard} />
          <Img source={imgCard} />
          <Img source={imgCard} />
        </ScrollView>
      </Container>
      <Content>
        <Title>Lavadora de Roupas Brastemp 12Kg BWK12 Branca 100V</Title>
      </Content>
      <Rating
        ratingCount={5}
        imageSize={60}
        showRating
      />
    </>
  );
}
