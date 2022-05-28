import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../actions/authAction';
import {scale} from 'react-native-size-matters';
import {useForm} from '../hooks/useForm';
import {globalStyles, SIZES} from '../constants/theme';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';

const CuentaScreen = () => {
  const dispatch = useDispatch();
  const [enabledButton, setEnabledButton] = useState(true);

  const {onChange, statecurrent} = useForm({
    name: '',
    password: '',
    email: '',
    rol: '',
  });

  const {name, password, email, rol} = statecurrent;

  const logout = () => dispatch(logoutAction());

  return (
    <View
      style={{
        ...globalStyles.globalBackground,
        ...globalStyles.globalMargin,
      }}>
      <View style={{width: SIZES.width / 2}}>
        <Text style={{...globalStyles.title, fontWeight: 'bold'}}>
          Crea un usuario
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* OnFocus input */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              ...globalStyles.globalMargin,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingTop: 5,
            }}>
            <TextInput
              style={{...styles.input, color: 'black'}}
              onChangeText={(value: any) => onChange(value, 'name')}
              placeholder="Nombre"
              placeholderTextColor="gray"
              autoCorrect={false}
              autoCapitalize="none"
            />

            <TextInput
              style={{...styles.input, color: 'red'}}
              onChangeText={(value: any) => onChange(value, 'password')}
              placeholder="Password"
              placeholderTextColor="gray"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
            />

            <TextInput
              style={{...styles.input, color: 'gray'}}
              onChangeText={(value: any) => onChange(value, 'email')}
              placeholder="Correo"
              placeholderTextColor="gray"
              autoCorrect={false}
              autoCapitalize="none"
            />

            <TextInput
              style={{...styles.input, color: 'gray'}}
              onChangeText={(value: any) => onChange(value, 'rol')}
              placeholder="Rol"
              placeholderTextColor="gray"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={
          name === '' || password === '' || email === '' || rol === ''
            ? styles.btnUserCreateDisabled
            : styles.btnUserCreate
        }
        disabled={name === '' || password === '' || email === '' || rol === ''}>
        <Text style={styles.textUserCreate}>Create user</Text>
      </TouchableOpacity>
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

  input: {
    borderWidth: 1.5,
    borderColor: '#FFB143',
    height: scale(35),
    paddingHorizontal: 20,
    marginVertical: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'white',
  },

  btnUserCreate: {
    backgroundColor: '#FFB143',
    width: '100%',
    marginTop: scale(30),
    padding: scale(10),
    borderRadius: 50,
  },

  btnUserCreateDisabled: {
    backgroundColor: '#face91',
    width: '100%',
    marginTop: scale(30),
    padding: scale(10),
    borderRadius: 50,
  },
  textUserCreate: {
    textAlign: 'center',
    color: 'white',
    fontSize: scale(12),
  },
});

export default CuentaScreen;
