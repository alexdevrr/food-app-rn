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
import InfoBottomCard from '../components/InfoBottomCard';

import {globalStyles, SIZES} from '../constants/theme';

// libreria para la escala de las fonts
import {scale, ScaledSheet} from 'react-native-size-matters';

import {useDispatch, useSelector} from 'react-redux';

import {addCartAction, removeFromCartAction} from '../actions/cartActions';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

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

  const itemsInCart = useSelector((state: any) => state.cart.cart);

  const dispatch = useDispatch();

  let acumulado = 0;

  if (itemsInCart.length === 0) {
  } else {
    itemsInCart.map((item: any) =>
      item._id === _id ? (acumulado += item.qty) : null,
    );
  }

  const addToCart = (id: string, price: number) => {
    dispatch(addCartAction(id, price));
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
          nameIconLeft="chevron-back-outline"
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
            position: 'absolute',
            justifyContent: 'center',
            top: SIZES.height / 2.7,
            padding: 0,
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={styles.buttonQuantity}>
            <TouchableOpacity
              onPress={() => removeToCard(_id)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                flex: 1,
                borderRadius: 30,
              }}
              disabled={acumulado === 0 ? true : false}>
              <Icon name="remove-outline" size={scale(20)} />
            </TouchableOpacity>

            <View>
              <Text style={{fontSize: scale(18), textAlign: 'center'}}>
                {acumulado}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => addToCart(_id, hamburguesa_precio)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                flex: 1,
                borderRadius: 30,
              }}>
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

        {/* {acumulado !== 0 && ( */}
        {/* <View style={styles.containerBottomCard}> */}
        <InfoBottomCard itemsInCart={itemsInCart} />
        {/* </View> */}
        {/* )} */}
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
    justifyContent: 'space-around',
    width: '120@s',
    borderRadius: 30,
    // padding: 10,
    paddingVertical: '8@s',
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
});

export default DetailScreen;
