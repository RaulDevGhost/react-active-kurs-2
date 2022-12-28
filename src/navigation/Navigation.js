import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Account'
        component={AccountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name='user' color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name='Pokedex'
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name='Favs'
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => {
            return <Icon name='heart' color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const renderPokeball = () => (
  <Image
    source={require('../assets/pokeball.png')}
    style={{ width: 75, height: 75, top: -15 }}
  />
);
