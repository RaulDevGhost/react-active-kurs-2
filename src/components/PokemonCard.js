import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import { capitalize } from 'lodash';
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.types[0].type.name),
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    navigation.navigate('Pokemon', { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image
              source={{
                uri: pokemon.sprites.other['official-artwork'].front_default,
              }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    display: 'flex',
    alignSelf: 'center',
    width: 90,
    height: 90,
  },
});
