import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
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

  return <View />;
}
