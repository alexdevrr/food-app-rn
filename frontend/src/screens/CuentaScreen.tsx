import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginAction, logoutAction} from '../actions/authAction';
import {scale} from 'react-native-size-matters';

const CuentaScreen = () => {
  const dispatch = useDispatch();

  const login = (uid: string, name: string) => dispatch(loginAction(uid, name));
  const logout = () => dispatch(logoutAction());

  return (
    <View>
      <Text>Hello world from CuentaScreen</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => login('123', 'Alex')}
          style={styles.btnOrder}>
          <Text style={{textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={logout}
          style={{...styles.btnOrder, backgroundColor: '#C4C4C4'}}>
          <Text style={{textAlign: 'center'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
  },

  btnOrder: {
    padding: scale(12),
    backgroundColor: '#7094d6',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default CuentaScreen;
