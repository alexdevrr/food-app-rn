import React from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SIZES} from '../constants/theme';
import {StackScreenProps} from '@react-navigation/stack';
import useAnimations from '../hooks/useAnimations';
import {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {items} from '../data/data-slices';
import {scale} from 'react-native-size-matters';
import {useCategories} from '../hooks/useCategories';
import Svg, {Path} from 'react-native-svg';

// Del Navigation.tsx
interface Props extends StackScreenProps<any, any> {}

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const SlideScreen = ({navigation}: Props) => {
  // TODO: TENGO QUE COOREGIR EL FLASHEO QUE HACE EL CAROUSEL

  useCategories();

  const [activeSlide, setActiveSlide] = useState(0);

  const {fadeIn, opacity} = useAnimations();

  const isActive = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            // backgroundColor: 'black',
            // padding: 40,
            paddingTop: scale(120),
            alignItems: 'center',
            width: '100%',
          }}>
          <Image
            source={item.img}
            style={{width: 350, height: 300, resizeMode: 'center'}}
          />

          <Pagination
            dotsLength={items.length}
            activeDotIndex={activeSlide}
            // containerStyle={{backgroundColor: 'white'}}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 3,
              backgroundColor: '#FFB143', // color bolita
            }}
            inactiveDotStyle={{
              backgroundColor: 'gray', // color bolita desact
            }}
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.6}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'red',
            width: '100%',
            padding: scale(20),
            height: scale(150),
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
          }}>
          <Text style={{...styles.textTitle, color: 'white'}}>
            {item.title}
          </Text>
          <Text style={{...styles.textDesc, color: 'white'}}>{item.desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
      }}>
      <View
        style={{
          // Contenedor debajo los svg
          // flexDirection: 'row',
          // paddingHorizontal: 10,
          width: '100%',
          backgroundColor: '#FFB143',
          height: scale(190),
          // zIndex: 999,
          // elevation: 9
          position: 'absolute',
          bottom: 0,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            position: 'absolute',
            top: -125,
            width: '100%',
          }}>
          <Svg width="100%" height="219" viewBox="0 0 283 129" fill="none">
            <Path
              d="M106.574 68.1857C128.628 84.7714 238.992 129 261.929 129C284.865 129 282.961 106.791 282.961 74.7826C282.961 42.7741 282.961 74.7826 282.961 0C244.596 86.6143 87.664 53.9636 106.574 68.1857Z"
              fill="#FFB143"
            />
            <Path
              d="M160.567 68.1857C140.496 84.7714 40.052 129 19.1772 129C-1.6976 129 0.0351238 106.791 0.0351238 74.7826C0.0351238 42.7741 0.0351238 74.7826 0.0351359 0C34.9516 86.6143 177.778 53.9636 160.567 68.1857Z"
              fill="#FFB143"
            />
          </Svg>
        </View>

        {/* <path d="M2.61902 68.1857C154.6666 84.6847 159.021 128.848 186.112 128.848C213.203 128.848 210.954 106.672 210.954 74.7107C210.954 42.7496 210.954 74.7107 210.954 0.0388336C165.64 86.5249 -19.7166 53.9225 2.61902 68.1236Z" fill="#FFB143"/> */}

        {/* <View
          style={{
            position: 'absolute',
            top: -135,
            right: -5,
          }}>
          <Svg width="351" height="269" viewBox="0 0 211 129" fill="none">
            <Path
              d="M2.53052 68.1236C28.5472 84.6847 158.747 128.848 185.806 128.848C212.865 128.848 210.619 106.672 210.619 74.7107C210.619 42.7496 210.619 74.7107 210.619 0.0388336C165.359 86.5249 -19.7786 53.9225 2.53052 68.1236Z"
              fill="#FFB143"
            />
          </Svg>
        </View>

        <View
          style={{
            position: 'absolute',
            top: -130,
            left: -10,
          }}>
          <Svg width="351" height="259" viewBox="0 0 180 129" fill="none">
            <Path
              d="M178.408 68.1857C156.107 84.7714 44.5022 129 21.308 129C-1.88623 129 0.0390265 106.791 0.0390265 74.7826C0.0390265 42.7741 0.0390265 74.7826 0.0390399 0C38.8351 86.6143 197.531 53.9636 178.408 68.1857Z"
              fill="#FFB143"
            />
          </Svg>
        </View> */}
      </View>

      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={SIZES.width}
        itemWidth={SIZES.width}
        layout="default"
        onSnapToItem={index => {
          setActiveSlide(index);
          if (index == 1) {
            fadeIn();
            // solo se activa si está en la ultima pagina
            isActive.current = true;
          }
        }}
      />
      <Animated.View
        style={{
          opacity,
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            ...styles.btnEntrar,
            backgroundColor: 'white',
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            // solo se puede presionar si está activo
            if (isActive.current) {
              navigation.navigate('Tabs');
              console.log('hola');
            }
          }}>
          <Text style={{...styles.textBtnEntrar, color: '#FFB143'}}>
            Entrar
            <Icon
              name="chevron-forward-outline"
              size={scale(14)}
              color="#FFB143"
            />
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    color: '#8b3cd4',
    textAlign: 'center',
    // color: '#8b3cd4',
  },

  textDesc: {
    fontSize: 15,
    textAlign: 'center',
  },

  btnEntrar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(80),
    height: scale(40),
    borderRadius: 70,
    backgroundColor: 'white',
    marginBottom: scale(20),
  },

  textBtnEntrar: {
    color: '#FFFFFF',
    fontSize: scale(14),
  },
});

export default SlideScreen;
