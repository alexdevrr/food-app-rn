import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/Navigation';

// Redux
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
