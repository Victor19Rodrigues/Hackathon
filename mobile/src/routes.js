import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import Home from './pages/Home';
import QRCode from './pages/QRCode';
import Favourite from './pages/Favourite';
import Wallet from './pages/Wallet';
import User from './pages/User';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  return <Feather name={iconName} size={size} color={color} />;
                case 'QRCode':
                  iconName = 'qrcode';
                  return (
                    <MaterialCommunityIcons
                      name={iconName}
                      size={size}
                      color={color}
                    />
                  );
                case 'Favourite':
                  iconName = 'heart';
                  return <Feather name={iconName} size={size} color={color} />;
                case 'Wallet':
                  iconName = 'wallet-outline';
                  return (
                    <MaterialCommunityIcons
                      name={iconName}
                      size={size}
                      color={color}
                    />
                  );
                case 'User':
                  iconName = 'user';
                  return <Feather name={iconName} size={size} color={color} />;
                default:
                  break;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
              backgroundColor:'#FAFAFA',
              borderTopColor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="QRCode" component={QRCode} />
          <Tab.Screen name="Favourite" component={Favourite} />
          <Tab.Screen name="Wallet" component={Wallet} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
