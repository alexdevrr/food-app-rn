import React from 'react';
import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useState} from 'react';
import useAnimations from '../hooks/useAnimations';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimations();

  const [isloading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...(style as any),
      }}>
      {isloading && (
        <ActivityIndicator
          size={30}
          color="red" // Para que se ponga en el centro de la imagen
          style={{
            position: 'absolute',
          }}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoad={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;
