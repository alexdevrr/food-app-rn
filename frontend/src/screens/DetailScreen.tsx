import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {Hamburguesa} from '../interfaces/CategoryResp';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoBottomCard from '../components/InfoBottomCard';

import {globalStyles, SIZES} from '../constants/theme';

// libreria para la escala de las fonts
import {scale, ScaledSheet} from 'react-native-size-matters';

import {useDispatch, useSelector} from 'react-redux';

import {addCartAction, removeFromCartAction} from '../actions/cartActions';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

// TODO: TRABAJAR EN AL REMOVER ITEM

const DetailScreen = ({navigation, route}: Props) => {
  const {params}: any = route;

  if (!params) return <ActivityIndicator size={30} color="red" />;

  const {
    _id,
    uri,
    calorias,
    hamburguesa_nom,
    hamburguesa_precio,
    hamburguesa_desc,
  }: Hamburguesa = params;

  const dispatch = useDispatch();

  const itemsInCart = useSelector((state: any) => state.cart.cart);

  let acumulado = 0;

  if (itemsInCart.length === 0) {
    // console.log('Aún no hay nada en el carrito');
  } else {
    itemsInCart.map((item: any) =>
      item.id === _id ? (acumulado += item.qty) : null,
    );
  }

  const addToCart = (id: string) => {
    dispatch(addCartAction(id));
  };

  const removeToCard = (id: string) => {
    dispatch(removeFromCartAction(id));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <View
        style={{
          ...globalStyles.globalMargin,
        }}>
        <Header
          title="Burgers"
          nameIconLeft="arrow-back-outline"
          nameIconRight="list"
          onPressLeft={() => navigation.goBack()}
          onPressRight={() => console.log('Ajustes')}
        />
      </View>

      {/* Contenedor general */}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        {/* Contenedor img */}
        <View style={styles.contenedor}>
          <Image source={{uri}} style={styles.img} resizeMode="cover" />
        </View>

        {/* Container button */}
        <View
          style={{
            alignItems: 'center',
            top: -45,
          }}>
          <View style={styles.buttonQuantity}>
            <TouchableOpacity onPress={() => removeToCard(_id)}>
              <Icon name="remove-outline" size={scale(20)} />
            </TouchableOpacity>

            <View>
              <Text style={{fontSize: scale(18)}}>{acumulado}</Text>
            </View>

            <TouchableOpacity onPress={() => addToCart(_id)}>
              <Icon name="add-outline" size={scale(20)} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: scale(10),
          }}>
          <Text style={styles.textPriceFood}>
            {hamburguesa_nom} - ${hamburguesa_precio}
          </Text>

          <Text
            style={{
              fontSize: scale(12),
              textAlign: 'center',
            }}>
            {hamburguesa_desc}
          </Text>

          <Text style={styles.textCalorias}>🔥 {calorias} cal</Text>
        </View>

        <View style={styles.containerBottomCard}>
          <InfoBottomCard />
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  contenedor: {
    height: SIZES.height / 2.5,
  },

  img: {
    width: '100%',
    height: '100%',
  },

  buttonQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '110@s',
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: '17@s',
    backgroundColor: 'white',

    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,

    elevation: 3,
  },

  textPriceFood: {
    fontSize: scale(17),
    fontWeight: 'bold',
    marginBottom: scale(10),
  },

  textCalorias: {
    fontSize: scale(12),
    textAlign: 'center',
    marginTop: '12@s',
    color: '#868686',
  },

  containerBottomCard: {
    shadowRadius: 2,
    shadowOffset: {
      width: 10,
      height: -13,
    },
    shadowColor: '#000',
    elevation: 4,
  },
});

export default DetailScreen;
