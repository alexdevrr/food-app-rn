import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimations = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(250)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const easing = () => {
    Animated.timing(position, {
      toValue: 100,
      duration: 1400,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initPosition: number) => {
    Animated.timing(position, {
      toValue: initPosition,
      duration: 900,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    easing,
    startMoving,
  };
};

export default useAnimations;
