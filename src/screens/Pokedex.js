import { Text, SafeAreaView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getAll, getPokemon } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    loadPokemons();
    // (async () => {
    //   await loadPokemons();
    // })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getAll(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];
      // for await (const pokemon of response.results) {
      //   const pokemonDetails = await getPokemon(pokemon.url);

      //   pokemonsArray.push({
      //     id: pokemonDetails.id,
      //     name: pokemonDetails.name,
      //     type: pokemonDetails.types[0].type.name,
      //     order: pokemonDetails.order,
      //     imagen:
      //       pokemonDetails.sprites.other['official-artwork'].front_default,
      //   });
      // }
      await Promise.all(
        response.results.map(async (pokemon) => {
          const pokemonDetails = await getPokemon(pokemon.url);
          pokemonsArray.push(pokemonDetails);
        })
      );
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        loadPokemons={loadPokemons}
        pokemons={pokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
