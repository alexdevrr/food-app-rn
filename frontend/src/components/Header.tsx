import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconSim from 'react-native-vector-icons/SimpleLineIcons';

interface Props {
  title: String;
  nameIconLeft?: String;
  nameIconRight?: String;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const Header = ({
  title,
  onPressLeft,
  onPressRight,
  nameIconLeft = 'location-outline',
  nameIconRight = 'handbag',
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnBorder}>
        <TouchableOpacity>
          <Icon
            name={`${nameIconLeft}`}
            size={25}
            color="black"
            onPress={onPressLeft}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.statusUbication}>
        <View style={styles.infoLocation}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 12}}>
            {title}
          </Text>
        </View>
      </View>
      <View style={styles.btnBorder}>
        <TouchableOpacity>
          <IconSim
            name={`${nameIconRight}`}
            size={25}
            color="black"
            onPress={onPressRight}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
