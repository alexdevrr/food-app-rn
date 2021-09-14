import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimations = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(-100)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const easing = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    easing,
  };
};

export default useAnimations;
