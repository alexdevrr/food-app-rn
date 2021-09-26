import {ImageSourcePropType} from 'react-native';

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

export const items: Slide[] = [
  {
    title: 'Welcome to Pediditos',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/screen-1.png'),
  },
  {
    title: 'About Us',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/screen-2.png'),
  },
];
