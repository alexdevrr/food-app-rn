import React from 'react';
// React navigation
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform, TouchableOpacity, View, Animated} from 'react-native';
// Screens
import SettingsScreen from '../screens/SettingsScreen';
import CuentaScreen from '../screens/CuentaScreen';
import ComidaFavScreen from '../screens/ComidaFavScreen';
import HomeScreen from '../screens/HomeScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import Svg, {Path} from 'react-native-svg';

const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

// const BottomTabAndroid = createMaterialBottomTabNavigator();
const BottomTabAndroid = createBottomTabNavigator();

// Button curved-bottom-navigation-bar
const TabBarCustomButton = ({accessibilityState, children, onPress}: any) => {
  let isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: 'white'}}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            {/* Path necesario para el vector */}
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill="white"
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: 'white'}}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'white',
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: 'white',
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
          marginBottom: 10,
        },
      }}>
      <BottomTabAndroid.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({focused}) => (
            // <TabBarCustomButton isSelected={focused}>
            <Icon
              name="home"
              size={25}
              // Si está seleccionada se muestra de otro color
              color={focused ? '#ffb143' : 'grey'}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        component={HomeScreen}
      />

      <BottomTabAndroid.Screen
        name="SettingsScreen"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="card" size={25} color={focused ? '#ffb143' : 'grey'} />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        component={SettingsScreen}
      />

      <BottomTabAndroid.Screen
        name="ComidaFavScreen"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="heart" size={25} color={focused ? '#ffb143' : 'grey'} />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        component={ComidaFavScreen}
      />

      <BottomTabAndroid.Screen
        name="CuentaScreen"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="person"
              size={25}
              color={focused ? '#ffb143' : 'grey'}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        component={CuentaScreen}
      />
    </BottomTabAndroid.Navigator>
  );
};

// const TabsAndroid = () => {
//   return (
//     <BottomTabAndroid.Navigator
//       labeled={true} /**Quita el nombre parte de abajo */
//       activeColor={'black'}
//       sceneAnimationEnabled={true}
//       barStyle={{
//         backgroundColor: 'transparent',
//         height: 50,
//         // Para qutiar la linea que se hace
//         marginBottom: 5,
//         elevation: 0 /** para android */,
//         borderTopWidth: 0 /** para ios */,
//       }}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let iconName: string = '';
//           switch (route.name) {
//             case 'HomeScreen':
//               iconName = 'fast-food-outline';
//               break;

//             case 'ComidaFavScreen':
//               iconName = 'heart-outline';
//               break;

//             case 'SettingsScreen':
//               iconName = 'card-outline';
//               break;

//             case 'CuentaScreen':
//               iconName = 'person-outline';
//               break;
//           }

//           return (
//             <Icon
//               name={iconName}
//               size={20}
//               // Si está seleccionada se muestra de otro color
//               color={focused ? 'black' : 'grey'}
//             />
//           );
//         },
//       })}>
//       <BottomTabAndroid.Screen
//         name="HomeScreen"
//         options={{title: 'Home'}}
//         component={HomeScreen}
//       />

//       <BottomTabAndroid.Screen
//         name="SettingsScreen"
//         options={{title: 'Pagos'}}
//         component={SettingsScreen}
//       />

//       <BottomTabAndroid.Screen
//         name="ComidaFavScreen"
//         options={{title: 'Favoritos'}}
//         component={ComidaFavScreen}
//       />

//       <BottomTabAndroid.Screen
//         name="CuentaScreen"
//         options={{title: 'Mi cuenta'}}
//         component={CuentaScreen}
//       />
//     </BottomTabAndroid.Navigator>
//   );
// };

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
