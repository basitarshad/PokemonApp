import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemonList, selectPokemonList} from '../pokemonSlice';

function PokemonListScreen({navigation}) {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList());
  });

  const handlePokemonPress = pokemon => {
    navigation.navigate('PokemonDetails', {id: pokemon.id, name: pokemon.name});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.pokemonItem}
      onPress={() => handlePokemonPress(item)}>
      <Text style={styles.pokemonName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {pokemonList ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={pokemonList?.data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pokemonItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignSelf: 'stretch',
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PokemonListScreen;
