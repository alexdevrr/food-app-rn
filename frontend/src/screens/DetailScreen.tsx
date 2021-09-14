import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {globalStyles, SIZES} from '../constants/theme';
import {Hamburguesa} from '../interfaces/CategoryResp';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({navigation, route}: Props) => {
  const {params}: any = route;

  if (!params) return <ActivityIndicator size={30} color="red" />;

  const {
    uri,
    calorias,
    hamburguesa_nom,
    hamburguesa_precio,
    hamburguesa_desc,
  }: Hamburguesa = params;

  return (
    <View style={globalStyles.globalBackground}>
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
      <View>
        {/* Contenedor img */}
        <View style={styles.contenedor}>
          <Image source={{uri}} style={styles.img} resizeMode="cover" />
        </View>

        {/* Container button */}
        <View
          style={{
            bottom: 10,
            alignItems: 'center',
            top: -20,
          }}>
          <View style={styles.buttonQuantity}>
            <TouchableOpacity>
              <Icon name="remove-outline" size={20} />
            </TouchableOpacity>
            <View>
              <Text style={{fontSize: 22}}>1</Text>
            </View>
            <TouchableOpacity>
              <Icon name="add-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 30,
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            {hamburguesa_nom} - ${hamburguesa_precio}
          </Text>

          <Text style={{fontSize: 19, textAlign: 'center'}}>
            {hamburguesa_desc}
          </Text>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginTop: 18,
              color: '#868686',
            }}>
            🔥 {calorias} cal
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 130,
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
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
});

export default DetailScreen;
