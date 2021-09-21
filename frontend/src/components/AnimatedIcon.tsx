import React from 'react';
import Animated from 'react-native-reanimated';
import {View, Text} from 'react-native';
import Tabs from '../navigation/Tabs';

interface AnimatedIconProps {
  progress: Animated.SharedValue<number>; // Reanimated - 0 is not Active, 1 is Active
}

const AnimatedIcon = ({progress}: AnimatedIconProps) => {
  return <Tabs />;
};

export default AnimatedIcon;
