import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import {SIZES, globalStyles} from '../constants/theme';
import {useCategories} from '../hooks/useCategories';
import ListCategories from '../components/ListCategories';
import {useHamburger} from '../hooks/useHamburger';
import ListHamburgers from '../components/ListHamburgers';
import Loading from '../components/Loading';

const HomeScreen = () => {
  const {menus, isloadingcategory} = useCategories();
  const {listhamburgers, isloadinghamburger} = useHamburger();

  return (
    <View
      style={{
        ...globalStyles.globalBackground,
        ...globalStyles.globalMargin,
      }}>
      <Header
        title="Puerto Vallarta"
        onPressLeft={() => console.log('Ubicacion')}
        onPressRight={() => console.log('Compras')}
      />
      {/* Título */}
      <View style={{width: SIZES.width / 2}}>
        <Text style={{...globalStyles.title, fontWeight: 'bold'}}>
          Online Food
        </Text>
        <Text style={globalStyles.title}>Delivery!</Text>
      </View>

      {!isloadingcategory ? <ListCategories menus={menus} /> : <Loading />}

      {!isloadinghamburger ? (
        <ListHamburgers listhamburgers={listhamburgers} />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default HomeScreen;
