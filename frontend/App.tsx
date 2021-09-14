import React from 'react';
import Tabs from './src/navigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" />
      <Navigation />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
