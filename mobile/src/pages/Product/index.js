import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, YellowBox } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Img,
  Title,
  Rating,
  PriceInfo,
  Value,
  Discount,
  Price,
  CashBack,
  CashBackText,
  PaymentMethods,
  PaymentMethodsIcon,
  PaymentMethodsDescription,
  PaymentMethodsDescriptionTitle,
  PaymentMethodsDescriptionType,
  MorePaymentMethodsLink,
  DivisorLine,
  PaymentMethodsInfo,
  MoreInfo,
  DivisorLineInfo,
  RateComments,
  RatingComments,
  DivisionRateComments,
  IconsLike,
  ButtonSale,
  BuyButton,
  AskOpinionButton,
} from './styles';

import imgCard from '../../assets/img/product/apple-watch.png';

console.ignoredYellowBox = ['Warning: Each', 'Warning: componentWillReceiveProps has been'];
YellowBox.ignoreWarnings = ['Warning: componentWillReceiveProps has been'];

export default function Product() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <ScrollView horizontal>
            <Img source={imgCard} />
            <Img source={imgCard} />
            <Img source={imgCard} />
          </ScrollView>
        </Container>
        <Content>
          <Title>Apple Watch Series 5 Gps, 44mm Space Grey Aluminium Case With Black Sport</Title>

          <Rating>
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#CCC'} size={15} />
            <Text style={{ marginLeft: 10 }}>(1200)</Text>
            <Text style={{ marginLeft: 100, marginRight: 16 }}>Cód. 123456789</Text>
          </Rating>

          <PriceInfo>
            <Value>
              <Discount>R$ 1.800,99</Discount>
              <Price>R$ 1.800,99</Price>
            </Value>
            <CashBack>
              <CashBackText>15,50 de cashback</CashBackText>
            </CashBack>
          </PriceInfo>

          <PaymentMethods>
            <PaymentMethodsIcon>
              <Feather name="credit-card" color="#EB5757" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Cartão Americanas</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>24x R$ 64,54 sem juros</PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
          </PaymentMethods>

          <PaymentMethods>
            <PaymentMethodsIcon>
              <Feather name="credit-card" color="#333333" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Cartão de Crédito</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>12x R$ 129,16 sem juros</PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
          </PaymentMethods>

          <MorePaymentMethodsLink>
            <Text
              style={{
                fontSize: 14,
                color: '#2F80ED',
                textDecorationLine: 'underline',
              }}>
              mais formas de pagamento
            </Text>
          </MorePaymentMethodsLink>

          <DivisorLine />

          <PaymentMethods>
            <PaymentMethodsIcon>
              <Feather name="truck" color="#333333" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Receber em Casa</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>
                Recebe em até 7 dias úteis
              </PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <PaymentMethodsDescriptionType style={{ fontWeight: 'bold' }}>
                R$ 29,90
              </PaymentMethodsDescriptionType>
            </PaymentMethodsInfo>
          </PaymentMethods>

          <PaymentMethods>
            <PaymentMethodsIcon>
              <MaterialCommunityIcons name="store" color="#333333" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Pegar na Loja</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>1 dia útil</PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <PaymentMethodsDescriptionType style={{ fontWeight: 'bold', color: '#219653' }}>
                Grátis
              </PaymentMethodsDescriptionType>
            </PaymentMethodsInfo>
          </PaymentMethods>

          <TouchableOpacity>
            <PaymentMethods style={{ marginTop: 41 }}>
              <PaymentMethodsIcon>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 21,
                    color: '#4F4F4F',
                    fontWeight: 'bold',
                  }}>
                  Informações Técnicas
                </Text>
              </PaymentMethodsIcon>

              <PaymentMethodsInfo>
                <Ionicons name="ios-arrow-forward" size={20} color="#4F4F4F" />
              </PaymentMethodsInfo>
            </PaymentMethods>
            <MoreInfo>
              <Text style={{ color: '#828282', fontSize: 14 }}>
                A Máquina de Lavar Brastemp 12kg conta com design moderno e exclusivo e a alta
                performance do ciclo tira-manchas Advanced para retirar mais de 40 manc...
              </Text>
            </MoreInfo>
          </TouchableOpacity>

          <DivisorLineInfo />

          <TouchableOpacity>
            <PaymentMethods style={{ marginTop: 41 }}>
              <PaymentMethodsIcon>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 21,
                    color: '#4F4F4F',
                    fontWeight: 'bold',
                  }}>
                  Descrição
                </Text>
              </PaymentMethodsIcon>

              <PaymentMethodsInfo>
                <Ionicons name="ios-arrow-forward" size={20} color="#4F4F4F" />
              </PaymentMethodsInfo>
            </PaymentMethods>
            <MoreInfo>
              <Text style={{ color: '#828282', fontSize: 14 }}>
                A Máquina de Lavar Brastemp 12kg conta com design moderno e exclusivo e a alta
                performance do ciclo tira-manchas Advanced para retirar mais de 40 manc...
              </Text>
            </MoreInfo>
          </TouchableOpacity>

          <DivisorLineInfo />

          <TouchableOpacity>
            <PaymentMethods style={{ marginTop: 41 }}>
              <PaymentMethodsIcon>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 21,
                    color: '#4F4F4F',
                    fontWeight: 'bold',
                  }}>
                  Avaliações
                </Text>
              </PaymentMethodsIcon>

              <PaymentMethodsInfo>
                <Ionicons name="ios-arrow-forward" size={20} color="#4F4F4F" />
              </PaymentMethodsInfo>
            </PaymentMethods>
          </TouchableOpacity>

          <RateComments>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>5.0</Text>
            <DivisionRateComments>
              <RatingComments>
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
              </RatingComments>
              <Text style={{ fontSize: 10, color: '#828282' }}>100% dos clientes recomendam</Text>
            </DivisionRateComments>
          </RateComments>

          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsIcon>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontWeight: 'bold',
                }}>
                gostei muito
              </Text>
            </PaymentMethodsIcon>

            <PaymentMethodsInfo>
              <Text style={{ fontSize: 12, color: '#828282' }}>18/03/2020</Text>
            </PaymentMethodsInfo>
          </PaymentMethods>
          <RatingComments style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }}>
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
          </RatingComments>
          <Text style={{ fontSize: 14, color: '#828282', marginLeft: 16, marginTop: 8 }}>
            entrega no prazo correto e o produto veio certo. muito bom. recomendo
          </Text>
          <IconsLike>
            <AntDesign style={{ marginRight: 27 }} name="dislike2" size={24} color="#4F4F4F" />
            <AntDesign name="like2" size={24} color="#219653" />
          </IconsLike>

          <DivisorLineInfo />

          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsIcon>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontWeight: 'bold',
                }}>
                não gostei muito
              </Text>
            </PaymentMethodsIcon>

            <PaymentMethodsInfo>
              <Text style={{ fontSize: 12, color: '#828282' }}>18/03/2020</Text>
            </PaymentMethodsInfo>
          </PaymentMethods>
          <RatingComments style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }}>
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#CCC'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#CCC'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#CCC'} size={15} />
          </RatingComments>
          <Text style={{ fontSize: 14, color: '#828282', marginLeft: 16, marginTop: 8 }}>
            entrega no prazo correto e o produto veio certo. muito bom. recomendo
          </Text>
          <IconsLike>
            <AntDesign style={{ marginRight: 27 }} name="dislike2" size={24} color="#EB5757" />
            <AntDesign name="like2" size={24} color="#4F4F4F" />
          </IconsLike>

          <DivisorLineInfo />

          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsIcon>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontWeight: 'bold',
                }}>
                gostei muito
              </Text>
            </PaymentMethodsIcon>

            <PaymentMethodsInfo>
              <Text style={{ fontSize: 12, color: '#828282' }}>18/03/2020</Text>
            </PaymentMethodsInfo>
          </PaymentMethods>
          <RatingComments style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }}>
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
          </RatingComments>
          <Text style={{ fontSize: 14, color: '#828282', marginLeft: 16, marginTop: 8 }}>
            entrega no prazo correto e o produto veio certo. muito bom. recomendo
          </Text>
          <IconsLike>
            <AntDesign style={{ marginRight: 27 }} name="dislike2" size={24} color="#4F4F4F" />
            <AntDesign name="like2" size={24} color="#219653" />
          </IconsLike>

          <DivisorLineInfo style={{ marginBottom: 150 }} />
        </Content>
      </ScrollView>

      <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
        <ButtonSale style={{ paddingTop: 5 }}>
          <NumericInput
            rounded
            onChange={() => {}}
            type="plus-minus"
            totalWidth={164}
            totalHeight={55}
            iconSize={25}
            minValue={0}
            borderColor="#fff"
            containerStyle={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 1,
            }}
          />

          <BuyButton onPress={() => navigation.navigate('HomeOrStore')}>
            <Text style={{ color: '#fff', fontSize: 16, lineHeight: 19 }}>Comprar</Text>
          </BuyButton>
        </ButtonSale>

        <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#fff' }}>
          <AskOpinionButton
            style={{
              borderWidth: 2,
              borderColor: '#E60014',
              borderRadius: 4,
              marginTop: 5,
              marginBottom: 5,
            }}>
            <Text
              style={{
                alignItems: 'center',
                color: '#E60014',
                fontSize: 16,
                lineHeight: 19,
              }}>
              Pedir opinião de um comprador
            </Text>
          </AskOpinionButton>
        </View>
      </View>
    </View>
  );
}
