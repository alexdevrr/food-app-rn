/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomeScreen from '../src/screens/HomeScreen';
import CuentaScreen from '../src/screens/CuentaScreen';
import ShoppingBag from '../src/screens/ShoppingBag';

test('HomeScreen.tsx correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CuentaScreen.tsx renders correctly', () => {
  const tree = renderer.create(<CuentaScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ShoppingBag.tsx renders correctly', () => {
  const tree = renderer.create(<ShoppingBag />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CuentaScreen.tsx renders correctly', () => {
  const tree = renderer.create(<CuentaScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
