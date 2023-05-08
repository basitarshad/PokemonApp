import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getPokemonList: builder.query({
      query: () => 'pokemon',
    }),
    getPokemonDetails: builder.query({
      query: id => `pokemon/${id}`,
    }),
  }),
});

export const {useGetPokemonListQuery, useGetPokemonDetailsQuery} = pokemonApi;
