import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailScreen from '../screens/DetailScreen';
import Tabs from './Tabs';

import {Hamburguesa} from '../interfaces/CategoryResp';
import SlideScreen from '../screens/SlideScreen';
import LoginScreen from '../screens/LoginScreen';
import ShoppingBag from '../screens/ShoppingBag';

export type RootStackParams = {
  DetailScreen: Hamburguesa;
  LoginScreen: undefined;
  ShoppingBag: undefined;
  SlideScreen: undefined;
  HomeScreen: undefined;
  Tabs: undefined;
  navigate: any;
};

const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SlideScreen" component={SlideScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ShoppingBag" component={ShoppingBag} />
    </Stack.Navigator>
  );
};

export default Navigation;
