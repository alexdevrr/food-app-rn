import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useSelector, useDispatch} from 'react-redux';

import {scale, ScaledSheet} from 'react-native-size-matters';
import {Cart} from '../interfaces/authInterfaces';

import useAnimations from '../hooks/useAnimations';
import {accumulatedAction} from '../actions/cartActions';

interface Props {
  itemsInCart: Cart[];
}

const InfoBottomCard = ({itemsInCart}: Props) => {
  const [totalprice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const {fadeIn, opacity, fadeOut, position, startMoving} = useAnimations();

  useEffect(() => {
    let price = 0;

    itemsInCart.forEach((item: any) => {
      price += item.qty * item.hamburguesa_precio;
    });

    setTotalPrice(price);
    console.log('price ->', price);
    dispatch(accumulatedAction(price));
  }, [itemsInCart]);

  const contentCartQty = useSelector((state: any) => state.cart.cart);

  let acumulado = 0;

  if (contentCartQty.length === 0) {
    // console.log('Aún no hay nada en el carrito');
  } else {
    // console.log('Ya hay algo en el carrito');
    contentCartQty.map((item: any) => {
      acumulado += item.qty;
    });
  }

  if (acumulado !== 0) {
    fadeIn();
    startMoving(0);
  } else {
    fadeOut();
  }

  return (
    <Animated.View
      style={{
        ...(styles.containerSupremo as any),
        transform: [
          {
            translateY: position,
          },
        ],
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#f3f1f1',
          borderBottomWidth: 1,
          paddingBottom: scale(12),
        }}>
        {contentCartQty.length === 0 ? (
          <Text style={styles.textBold}>0 items en el carrito</Text>
        ) : (
          <Text style={styles.textBold}>{acumulado} items en el carrito</Text>
        )}
        <Text style={styles.textBold}>${totalprice.toFixed(2)}</Text>
      </View>

      <View style={styles.containers}>
        <View style={styles.ubiAndCalle}>
          <Icon
            name="location-pin"
            size={scale(15)}
            style={{marginRight: scale(5)}}
          />
          <Text style={styles.textMastercard}>745 Linconln PI</Text>
        </View>
        <Text style={styles.textMastercard}>**** 5491</Text>
      </View>

      <Animated.View style={[styles.containerBtnOrder, {opacity: opacity}]}>
        <TouchableOpacity style={styles.btnOrder} activeOpacity={0.9}>
          <Text style={styles.textBtn}>Add to cart</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = ScaledSheet.create({
  containerSupremo: {
    backgroundColor: '#FFFFFF',
    marginTop: scale(12),
    height: '180@s',
    borderRadius: 30,
    padding: scale(20),
    justifyContent: 'space-between',
    shadowRadius: 2,
    shadowOffset: {
      width: 10,
      height: -13,
    },
    shadowColor: '#000',
    elevation: 8,
    // bottom: scale(3),
  },

  containers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scale(20),
  },

  textBold: {
    fontSize: scale(15),
    fontWeight: 'bold',
  },

  ubiAndCalle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textMastercard: {
    fontSize: scale(11),
    marginTop: 5,
  },

  containerBtnOrder: {
    paddingHorizontal: scale(5),
  },

  btnOrder: {
    padding: scale(12),
    backgroundColor: '#ffb143',
    width: '100%',
    borderRadius: 15,
  },

  textBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: scale(13),
  },
});

export default InfoBottomCard;
