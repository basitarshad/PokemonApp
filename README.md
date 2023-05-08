# Pokemon App

This project aims to be a react-native applications. In this application, you can view the list of pokemons and see their details. Their are also unit-tests written to tet the functionality and to assure the performance of the overall application.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 14](https://developer.apple.com/xcode)
- [Cocoapods 1.12.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) for writing redux logic.
- [@rtk-incubator/rtk-query](https://www.npmjs.com/package/@rtk-incubator/rtk-query) for data fetching and caching.
- [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Folder structure

This App follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `redux`: This folder contains all actions that can be dispatched to redux.
    - `rootReducer.js`
  - `NavigationContainer`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `__tests__`: Folder that contains all unit tests for screens/features.
      - `PokemonListScreen.test.js`
      - `PokemonDetailsScreen.test.js`
  - `screens`: Folder that contains all your application screens/features.
      - `PokemonListScreen.js`
      - `PokemonDetailsScreen.js`
- `pokemonApi.js`: All the API implementation is written in this file.
- `pokemonSlice.js`: All the API slicing is done in this file.
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Setup environments

 `yarn` for installing all the dependencies
 
 `npx pod-install` for installing all iOS related dependencies with Pods
 
 `npx react-native run-android` for running Android application
 
 `npx react-native run-ios` for running iOS application
 
## Unit Testing
Please run `yarn test` for running written tests

## Generate debug build

These are the steps to generate `.apk`

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assembleRelease`
