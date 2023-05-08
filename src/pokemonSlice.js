import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useGetPokemonListQuery, useGetPokemonDetailsQuery} from './pokemonApi';

const initialState = {
  list: {
    status: 'idle',
    data: [],
  },
  details: {
    status: 'idle',
    data: {},
  },
};

export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchPokemonList',
  async () => {
    const response = await useGetPokemonListQuery();
    return response;
  },
);

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchPokemonDetails',
  async id => {
    const response = await useGetPokemonDetailsQuery(id);
    return response;
  },
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonList.pending, state => {
        state.list.status = 'loading';
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.list.status = 'succeeded';
        state.list.data = action.payload;
      })
      .addCase(fetchPokemonList.rejected, state => {
        state.list.status = 'failed';
      })
      .addCase(fetchPokemonDetails.pending, state => {
        state.details.status = 'loading';
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.details.status = 'succeeded';
        state.details.data = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, state => {
        state.details.status = 'failed';
      });
  },
});

export const selectPokemonList = state => state.pokemon?.list;
export const selectPokemonDetails = state => state.pokemon.details;
