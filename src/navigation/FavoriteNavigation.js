import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favs from '../screens/Favs';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorite'
        component={Favs}
        options={{ title: 'Favoritos' }}
      />
    </Stack.Navigator>
  );
}
