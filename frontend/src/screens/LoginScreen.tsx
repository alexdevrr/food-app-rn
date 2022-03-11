import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {globalStyles, SIZES} from '../constants/theme';
import {useForm} from '../hooks/useForm';
import {TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const {onChange, statecurrent, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    isSuscribed: false,
  });

  return (
    <View
      style={{...globalStyles.globalBackground, ...globalStyles.globalMargin}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/pediditos.png')}
          style={styles.icon}
        />
        <Text style={styles.encabezado}>Pediditos</Text>
      </View>

      {/* Es un componente que resuelve el problema común de las vistas que necesitan moverse fuera del camino del teclado virtual. Puede ajustar automáticamente su altura, posición o relleno inferior en función de la altura del teclado. */}
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
              onChangeText={(value: any) => onChange(value, 'email')}
              placeholder="Email address"
              placeholderTextColor="gray"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <TextInput
              style={{...styles.input, color: 'red'}}
              onChangeText={(value: any) => onChange(value, 'password')}
              placeholder="Password"
              placeholderTextColor="gray"
              autoCorrect={false}
              autoCapitalize="none"
              // It used so that the password is not displayed
              secureTextEntry={true}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* Contenedor forgot pass & signIn button */}
      <View
        style={{
          ...globalStyles.globalMargin,
          marginTop: scale(20),
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={() => navigation.navigate('SlideScreen')}>
          <Text style={styles.textSignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Social media container */}
      <View
        style={{
          flexDirection: 'column',
          marginTop: scale(30),
          // backgroundColor: 'green',
          height: '100%',
          borderTopColor: 'rgba(0, 0, 0, .30)',
          borderTopWidth: 1,
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'gray',
            fontSize: scale(15),
            backgroundColor: 'white',
            width: 50,
            bottom: 15,
          }}>
          OR
        </Text>
        <View style={styles.socialMediaContainer}>
          <Image
            source={require('../assets/facebook.png')}
            style={styles.icons}
          />

          <Image
            source={require('../assets/twitter.png')}
            style={styles.icons}
          />

          <Image
            source={require('../assets/instagram.png')}
            style={styles.icons}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: scale(20),
          }}>
          <Text>Not a user yet? </Text>
          <TouchableOpacity>
            <Text style={{color: '#FFB143', fontWeight: 'bold'}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',

    height: SIZES.height / 3,
    backgroundColor: 'white',
  },

  icon: {
    width: 130,
    height: 70,
  },

  encabezado: {
    color: '#FFB143',
    fontWeight: 'bold',
    fontSize: scale(25),
  },

  input: {
    borderWidth: 1.5,
    borderColor: '#FFB143',
    height: 'auto',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
  },

  forgotPassword: {
    color: 'rgba(0, 0, 0, .70)',
    opacity: 1,
  },

  btnSignIn: {
    backgroundColor: '#FFB143',
    width: '100%',
    marginTop: scale(30),
    padding: scale(10),
    borderRadius: 50,
  },

  textSignIn: {
    textAlign: 'center',
    color: 'white',
    fontSize: scale(12),
  },

  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(30),
  },

  icons: {
    width: scale(30),
    height: scale(30),
    marginRight: scale(10),
  },
});

export default LoginScreen;
