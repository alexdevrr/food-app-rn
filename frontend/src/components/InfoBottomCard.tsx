import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {scale, ScaledSheet} from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const InfoBottomCard = () => {
  return (
    <View style={styles.containerSupremo}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: '#f3f1f1',
          borderBottomWidth: 1,
          paddingBottom: scale(12),
        }}>
        <Text style={styles.textBold}>4 items en el carrito</Text>
        <Text style={styles.textBold}>$46.98</Text>
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

      <View style={styles.containerBtnOrder}>
        <TouchableOpacity style={styles.btnOrder} activeOpacity={0.9}>
          <Text style={styles.textBtn}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
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
