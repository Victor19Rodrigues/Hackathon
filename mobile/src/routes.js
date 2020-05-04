import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './pages/Home';
import QRCode from './pages/QRCode';
import Favourite from './pages/Favourite';
import Wallet from './pages/Wallet';
import Ticket from './pages/Ticket';
import Product from './pages/Product';
import Perfil from './pages/Perfil';
import HomeOrStore from './pages/HomeOrStore';
import GetInStore from './pages/GetInStore';
import GetProduct from './pages/GetProduct';
import MyRequests from './pages/MyRequests';

import HeartShareShoppingCart from './components/Icons/HeartShareShoppingCart';

import HeaderRight from './components/Icons/HeaderIcons/HeaderRight';
import HeaderLeft from './components/Icons/HeaderIcons/HeaderLeft';
import HeaderBack from './components/Icons/HeaderIcons/HeaderBack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
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
            case 'Ticket':
              iconName = 'ticket-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
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
          backgroundColor: '#FAFAFA',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Ticket" component={Ticket} />
    </Tab.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCode}
          options={{
            title: 'Escanear Produto',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <HeartShareShoppingCart />
              </>
            ),
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="HomeOrStore"
          component={HomeOrStore}
          options={{
            title: 'Em casa ou na Loja',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="GetInStore"
          component={GetInStore}
          options={{
            title: 'Pegar na Loja',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="GetProduct"
          component={GetProduct}
          options={{
            title: 'Retirar Produto',
            headerLeft: () => <HeaderBack />,
          }}
        />
        <Stack.Screen
          name="MyRequests"
          component={MyRequests}
          options={{
            title: 'Meus Pedidos',
            headerLeft: () => <HeaderBack />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
