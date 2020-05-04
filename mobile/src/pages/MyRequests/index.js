import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  PaymentMethods,
  PaymentMethodsDescription,
  PaymentMethodsDescriptionType,
  BuyButton,
  PaymentMethodsInfo,
} from './styles';

import imgCard from '../../assets/img/product/apple-watch.png';

export default function GetProduct() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'center',
        }}>
        <PaymentMethods style={{ marginTop: 24 }}>
          <PaymentMethodsDescription
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                borderRadius: 2,
                height: 115,
                width: 164,
              }}>
              <Image source={imgCard} style={{ flex: 1, width: undefined, height: undefined }} />
            </View>

            <View style={{ marginRight: 16 }}>
              <PaymentMethodsDescriptionType
                style={{ marginLeft: 16, color: '#333333', width: 150, fontSize: 16 }}>
                Apple Watch Series 5 Gps, 44mm Space Grey Aluminium Case With Black Sport
              </PaymentMethodsDescriptionType>

              <PaymentMethodsDescription
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 16,
                  marginLeft: 16,
                  marginTop: 16,
                  alignItems: 'center',
                  width: 150,
                }}>
                <Text style={{ color: '#4F4F4F', fontSize: 14 }}>Valor:</Text>
                <Text style={{ color: '#333333', fontSize: 14 }}>R$ 1.549,99</Text>
              </PaymentMethodsDescription>

              <PaymentMethodsDescription
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 16,
                  marginLeft: 16,
                  marginTop: 10,
                  alignItems: 'center',
                  width: 150,
                }}>
                <Text style={{ color: '#4F4F4F', fontSize: 14 }}>Pedido:</Text>
                <Text style={{ color: '#333333', fontSize: 14 }}>02-8749487</Text>
              </PaymentMethodsDescription>
            </View>
          </PaymentMethodsDescription>
        </PaymentMethods>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 16,
            width: 300,
            textAlign: 'left',
            marginBottom: 32,
            fontSize: 20,
            lineHeight: 23,
          }}>
          Acompanhe seu pedido
        </Text>

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>Pedido efetuado</Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>12/03/2020</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>
              Pagamento efetuado
            </Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>12/03/2020</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>
              Nota fiscal emitida
            </Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>12/03/2020</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>Em transporte</Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>12/03/2020</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />

        <PaymentMethods style={{ marginBottom: 62 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#219653', fontSize: 14 }}>
              Disponível para retirar
            </Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#333333', fontSize: 14 }}>12/03/2020</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            marginRight: 50,
            marginLeft: 50,
            justifyContent: 'center',
            alignSelf: 'center',
            width: 327,
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <BuyButton
            onPress={() => {
              console.log('aqui');
            }}
            style={{
              backgroundColor: '#E60014',
              marginTop: 8,
              alignSelf: 'center',
              marginBottom: 5,
            }}>
            <Text style={{ color: '#fff', fontSize: 16, lineHeight: 19 }}>Retirar produto</Text>
          </BuyButton>
        </View>
      </View>
    </ScrollView>
  );
}
