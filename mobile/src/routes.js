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

import HeaderRight from './pages/HeaderIcons/HeaderRight';
import HeaderLeft from './pages/HeaderIcons/HeaderLeft';

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
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            case 'Favourite':
              iconName = 'heart';
              return <Feather name={iconName} size={size} color={color} />;
            case 'Wallet':
              iconName = 'wallet-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            case 'Ticket':
              iconName = 'ticket-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
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
      }}>
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
        <Stack.Screen name="QRCode" component={QRCode} options={{ title: 'Escanear Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
