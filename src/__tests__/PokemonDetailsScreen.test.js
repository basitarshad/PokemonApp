import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import pokemonSlice from '../pokemonSlice';

describe('PokemonDetailsScreen', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        pokemonSlice: pokemonSlice.reducer,
      },
    });
  });

  it('renders pokemon details correctly', async () => {
    const pokemon = {
      id: 1,
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      abilities: ['overgrow', 'chlorophyll'],
      image: 'https://pokeapi.co/api/v2/pokemon/1.png',
    };
    const mockRoute = {params: {id: 1}};

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <PokemonDetailsScreen route={mockRoute} />
      </Provider>,
    );

    await waitFor(() => {
      expect(getByTestId('pokemon-details-image')).toHaveProp('source', {
        uri: pokemon.image,
      });
      expect(getByText(pokemon.name)).toBeTruthy();
      pokemon.types.forEach(type => {
        expect(getByText(type)).toBeTruthy();
      });
      pokemon.abilities.forEach(ability => {
        expect(getByText(ability)).toBeTruthy();
      });
    });
  });
});
