import { Text, SafeAreaView } from 'react-native';
import React from 'react';

export default function Pokedex() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text>Hello Pokedex</Text>
    </SafeAreaView>
  );
}
