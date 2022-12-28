import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Pokemon() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>Estamos en un POKEMON</Text>
    </SafeAreaView>
  );
}
