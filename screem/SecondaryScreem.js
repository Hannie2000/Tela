import react from 'react';

import{ View, Text, Button, StyleSheet} from 'react-native';

export default function SecondaryScreem ({navigation}) {
  return(
    <View style={style.container}>
    <Text style={style.title}> Escolha sua Delicia!</Text>

    <View style={style.buttonContainer}>
      <Button title="Cafe" onPress={() => navigation.navigate('Cafe')} color="#a0522d"/>
    
      <View style={style.buttonContainer}>
      <Button title="Bolo" onPress={() => navigation.navigate('Bolo')} color="#8b4513"/>
      </View>

      <View style={style.buttonContainer}>
      <Button title="Pão Caseiro" onPress={() => navigation.navigate('Pao')} color="#deb887"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contrianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffafa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#444',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '60%',
  },
});