import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import rootReducer from './redux/rootReducer';
import PokemonListScreen from './screens/PokemonListScreen';
import PokemonDetailsScreen from './screens/PokemonDetailsScreen';

const Stack = createStackNavigator();
const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

function Pokemon() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PokemonList"
            component={PokemonListScreen}
            options={{title: 'Pokemon List'}}
          />
          <Stack.Screen
            name="PokemonDetails"
            component={PokemonDetailsScreen}
            options={({route}) => ({title: route.params.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Pokemon;
