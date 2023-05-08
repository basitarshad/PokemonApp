import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemonDetails, selectPokemonDetails} from '../pokemonSlice';

export const PokemonDetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  const pokemonListDetails = useSelector(selectPokemonDetails);

  useEffect(() => {
    dispatch(fetchPokemonDetails(id));
  });

  const renderItem = ({item}) => (
    <View>
      <Image source={{uri: item.sprites.front_default}} />
      <Text>{item.name}</Text>
      <Text>Height: {item.height}</Text>
      <Text>Weight: {item.weight}</Text>
      <Text>Abilities:</Text>
      <View>
        {item.abilities.map(ability => (
          <Text key={ability.ability.name}>{ability.ability.name}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {pokemonListDetails ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={pokemonListDetails?.data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default PokemonDetailsScreen;
