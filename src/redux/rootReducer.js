import {combineReducers} from 'redux';
import {pokemonSlice} from '../pokemonSlice';

const rootReducer = combineReducers({
  pokemonSlice: pokemonSlice.reducer,
});

export default rootReducer;
