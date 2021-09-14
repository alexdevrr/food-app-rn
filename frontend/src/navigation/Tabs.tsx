import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform} from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import CuentaScreen from '../screens/CuentaScreen';
import ComidaFavScreen from '../screens/ComidaFavScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      activeColor={'black'}
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: 'white',
        height: 50,
        // Para qutiar la linea que se hace
        elevation: 0,
        marginBottom: 5,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'fast-food-outline';
              break;

            case 'ComidaFavScreen':
              iconName = 'heart-outline';
              break;

            case 'SettingsScreen':
              iconName = 'card-outline';
              break;

            case 'CuentaScreen':
              iconName = 'person-outline';
              break;
          }

          return (
            <Icon
              name={iconName}
              size={20}
              // Si está seleccionada se muestra de otro color
              color={focused ? 'black' : 'grey'}
            />
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />

      <BottomTabAndroid.Screen
        name="SettingsScreen"
        options={{title: 'Pagos'}}
        component={SettingsScreen}
      />

      <BottomTabAndroid.Screen
        name="ComidaFavScreen"
        options={{title: 'Favoritos'}}
        component={ComidaFavScreen}
      />

      <BottomTabAndroid.Screen
        name="CuentaScreen"
        options={{title: 'Mi cuenta'}}
        component={CuentaScreen}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIos = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottomTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <BottomTabIos.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTabIos.Screen name="SettingsScreen" component={SettingsScreen} />
      <BottomTabIos.Screen name="CuentaScreen" component={CuentaScreen} />
    </BottomTabIos.Navigator>
  );
};

export default Tabs;
