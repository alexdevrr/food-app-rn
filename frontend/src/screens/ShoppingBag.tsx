import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ScaledSheet, scale} from 'react-native-size-matters';
import FadeInImage from '../components/FadeInImage';
import {globalStyles} from '../constants/theme';
import Header from '../components/Header';
import {RootStackParams} from '../navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import axios from 'axios';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const ShoppingBag = ({navigation}: Props) => {
  const cartContent = useSelector((state: any) => state.cart.cart);

  const sendOrder = async (creator: string, contentCartQty: any) => {
    const order = contentCartQty;

    try {
      const resp = await axios.post(`http://10.0.2.2:5000/api/ticket/order`, {
        order,
        creator,
        totalPrice,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const contentCartQty = useSelector((state: any) => state.cart.cart);
  const creator = useSelector((state: any) => state.auth.email);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);

  return (
    <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
      <View style={{...globalStyles.globalMargin}}>
        <Header
          nameIconLeft="chevron-back-outline"
          onPressLeft={() => navigation.goBack()}
        />
        <Text style={styles.mainTitle}>Carrito</Text>
        {cartContent.length === 0 && (
          <View
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/cart.png')}
                style={styles.img}
              />
              <Text style={styles.msgEmpyCart}>
                Agrega artículos para comenzar a llenar tu carrito
              </Text>
              <Text style={styles.msgLargeEmpyCart}>
                Cuando agregues artículos de un restaturante o negocio, tu
                carrito aparecerá aquí
              </Text>
              <TouchableOpacity style={styles.btnBuyNow} activeOpacity={0.9}>
                <Text style={styles.textBtn}>Comprar ahora</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {cartContent.map((item: any) => {
          const foodName = item.hamburguesa_nom;
          const foodQty = item.qty;
          const foodPrice = item.hamburguesa_precio;
          const foodImage = item.hamburguesa_img[0].url;

          return (
            <View style={styles.listContainer} key={item._id}>
              <FadeInImage
                uri={foodImage}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.productName}>{foodName}</Text>
                <View style={styles.rowArticle}>
                  <Text style={styles.productInfo}>{foodQty} </Text>
                  <Text style={styles.productInfo}>
                    {foodQty > 1 ? 'Artículos' : 'Artículo'} •
                  </Text>
                  <Text style={styles.productInfo}>
                    {' '}
                    USD {foodQty * foodPrice}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: scale(10),
                    color: '#625959',
                    paddingBottom: scale(7),
                  }}>
                  Entregar en Alamo #544
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={[styles.containerBtnOrder]}>
        <View>
          <TouchableOpacity
            style={styles.btnOrder}
            activeOpacity={0.9}
            onPress={() => sendOrder(creator, contentCartQty)}>
            <Text style={styles.textBtn}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  mainTitle: {
    fontSize: scale(28),
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: scale(10),
    // backgroundColor: '#d46767',
    width: '100%',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d6c9c9',
  },
  rowArticle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productName: {
    fontSize: scale(18),
  },
  productInfo: {
    fontSize: scale(13),
    color: '#625959',
  },

  img: {
    width: '70%',
    height: '70%',
  },
  msgEmpyCart: {
    fontSize: scale(12),
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  msgLargeEmpyCart: {
    fontSize: scale(9),
    color: '#625959',
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  btnBuyNow: {
    marginTop: 10,
    padding: scale(7),
    backgroundColor: '#000000',
    width: '30%',
    borderRadius: 7,
  },
  textBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: scale(10),
  },

  containerBtnOrder: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: scale(5),
    position: 'absolute',
    bottom: scale(20),
  },

  btnOrder: {
    paddingVertical: scale(12),
    paddingHorizontal: scale(32),
    backgroundColor: '#ffb143',
    width: '100%',
    borderRadius: 15,
  },
});

export default ShoppingBag;
