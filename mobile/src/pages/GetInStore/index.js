import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  PaymentMethods,
  PaymentMethodsIcon,
  PaymentMethodsDescription,
  PaymentMethodsDescriptionTitle,
  PaymentMethodsDescriptionType,
  PaymentMethodsInfo,
} from './styles';

export default function GetInStore() {
  const navigation = useNavigation();
  const [isSelectedFirst, setIsSelectedFirst] = useState(false);
  const [isSelectedSecond, setIsSelectedSecond] = useState(false);

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'flex-start' }}>
      <Text
        style={{
          marginTop: 24,
          marginLeft: 16,
          width: 300,
          textAlign: 'left',
          marginBottom: 32,
          fontSize: 20,
          lineHeight: 23,
        }}>
        Loja
      </Text>

      <PaymentMethods style={{ marginbackgroundColor: 'red' }}>
        <PaymentMethodsIcon>
          <MaterialCommunityIcons name="store" color="#333333" size={24} />
        </PaymentMethodsIcon>
        <PaymentMethodsDescription>
          <PaymentMethodsDescriptionTitle>Lojas Americanas, Centro</PaymentMethodsDescriptionTitle>
          <PaymentMethodsDescriptionType>Bairro, Cidade - Estado</PaymentMethodsDescriptionType>
        </PaymentMethodsDescription>
        <PaymentMethodsInfo>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: '#2F80ED', textDecorationLine: 'underline' }}>
              Alterar
            </Text>
          </TouchableOpacity>
        </PaymentMethodsInfo>
      </PaymentMethods>

      <TouchableOpacity
        onPress={() => {
          setIsSelectedFirst(true);
          setIsSelectedSecond(false);
          // navigation.navigate('GetInStore');
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#CCC',
          textAlign: 'center',
          marginLeft: 16,
          marginRight: 16,
        }}>
        <PaymentMethods style={{ marginTop: 24 }}>
          <PaymentMethodsDescription>
            <PaymentMethodsDescriptionTitle>Pegar agora</PaymentMethodsDescriptionTitle>
            <PaymentMethodsDescriptionType>
              Com o pagamento aprovado, você leva o produto imediatamente.
            </PaymentMethodsDescriptionType>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo style={{ marginLeft: 30 }}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setIsSelectedFirst(true);
                  setIsSelectedSecond(false);
                }}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#E60014',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {isSelectedFirst && (
                  <View
                    style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#E60014' }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </PaymentMethodsInfo>
        </PaymentMethods>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIsSelectedSecond(true);
          setIsSelectedFirst(false);
        }}
        style={{
          marginTop: 8,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#CCC',
          textAlign: 'center',
          marginLeft: 16,
          marginRight: 16,
        }}>
        <PaymentMethods style={{ marginTop: 24 }}>
          <PaymentMethodsDescription>
            <PaymentMethodsDescriptionTitle>Agendar retirada</PaymentMethodsDescriptionTitle>
            <PaymentMethodsDescriptionType>
              Com o pagamento aprovado até as 16h, você pega o produto no mesmo dia.
            </PaymentMethodsDescriptionType>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setIsSelectedSecond(true);
                  setIsSelectedFirst(false);
                }}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#E60014',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {isSelectedSecond && (
                  <View
                    style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#E60014' }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </PaymentMethodsInfo>
        </PaymentMethods>
      </TouchableOpacity>
    </View>
  );
}
