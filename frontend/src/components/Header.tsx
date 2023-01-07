import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconSim from 'react-native-vector-icons/SimpleLineIcons';

import { scale, ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

interface Props {
  title?: String;
  nameIconLeft?: String;
  nameIconRight?: String;
  notification?: String;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const Header = ({
  title,
  onPressLeft,
  onPressRight,
  nameIconLeft = 'location-outline',
  nameIconRight,
}: Props) => {
  const contentCartQty = useSelector((state: any) => state.cart.cart);

  let acumulado = 0;

  if (contentCartQty.length === 0) {
    // console.log('Aún no hay nada en el carrito');
  } else {
    contentCartQty.map((item: any) => {
      acumulado += item.qty;
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeft}>
        <View style={styles.btnBorder}>
          <Icon name={`${nameIconLeft}`} size={scale(18)} color="black" />
        </View>
      </TouchableOpacity>
      {title && (
        <View style={styles.statusUbication}>
          <View style={styles.infoLocation}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: scale(12),
              }}>
              {title}
            </Text>
          </View>
        </View>
      )}

      {nameIconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <View style={styles.btnBorder}>
            {acumulado !== 0 && nameIconRight === 'handbag' && (
              <View style={styles.notification}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  {acumulado}
                </Text>
              </View>
            )}
            <IconSim name={`${nameIconRight}`} size={scale(18)} color="black" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    top: 10,
    height: 40,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },

  btnBorder: {
    // backgroundColor: 'blue',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // NOTIFICACION COMPRAS
  notification: {
    width: 18,
    height: 18,
    borderRadius: 100,
    position: 'absolute',
    top: 30,
    right: 3,
    backgroundColor: '#ffb143',
    justifyContent: 'center',
    textAlign: 'center',
  },

  statusUbication: {
    // backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  infoLocation: {
    width: '100%',
    backgroundColor: '#EFEFF1',
    height: 40,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
