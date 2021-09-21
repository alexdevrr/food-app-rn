import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ComidaFavScreen = () => {
  const auth = useSelector((state: any) => state.auth);

  if (!auth.uid) {
    return <Text>Aún no estás logueado</Text>;
  }

  return (
    <View>
      <Text>Hola desde ComidaFavScreen</Text>
      <Text>{JSON.stringify(auth, null, 3)}</Text>
    </View>
  );
};

export default ComidaFavScreen;
