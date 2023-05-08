import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PokemonListScreen from '../screens/PokemonListScreen';
import {fetchPokemonList} from '../pokemonSlice';

const mockStore = configureStore([]);

describe('PokemonListScreen', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        status: 'succeeded',
        list: [
          {id: 1, name: 'bulbasaur'},
          {id: 2, name: 'ivysaur'},
          {id: 3, name: 'venusaur'},
        ],
      },
    });
    store.dispatch = jest.fn();
  });

  it('should render a list of pokemon', () => {
    render(
      <Provider store={store}>
        <PokemonListScreen />
      </Provider>,
    );

    expect(fetchPokemonList).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(fetchPokemonList());
  });
});
