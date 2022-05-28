import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {globalStyles, SIZES} from '../constants/theme';
import {TextInput} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import {useForm} from '../hooks/useForm';
import axios from 'axios';

const FormAdmin = () => {
  const {onChange, statecurrent} = useForm({
    nombre: '',
    password: '',
    email: '',
    rol: '',
  });

  const {nombre, password, email, rol} = statecurrent;

  const createUser = async (
    nombre: string,
    email: string,
    password: string,
    rol: string,
  ) => {
    try {
      const resp = await axios.post(`http://10.0.2.2:5000/api/usuarios`, {
        nombre,
        email,
        password,
        rol,
      });

      const data = resp.data;
      console.log('data ->', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
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
              onChangeText={(value: any) => onChange(value, 'nombre')}
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
              keyboardType="email-address"
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
          nombre === '' || password === '' || email === '' || rol === ''
            ? styles.btnUserCreateDisabled
            : styles.btnUserCreate
        }
        disabled={
          nombre === '' || password === '' || email === '' || rol === ''
        }
        onPress={() => createUser(nombre, email, password, rol)}>
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

export default FormAdmin;
