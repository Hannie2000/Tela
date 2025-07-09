import react from 'react';

import{View, Text, Image, StyleSheet} from 'react-native';

export default function BoloScreem(){
  return(
    <View style={style.container}>
      <Text style={styles.title}>Um Bolo</Text> 
      <Image 
      source={{uri: 'https://assets.epicurious.com/photos/663a3a97507b6c79600a2be1/4:3/w_5484,h_4113,c_limit/34_RedVelvetCake_1034_COMP.jpg'}}
      style={styles.Image}></Image>
      <Text style={styles.description}> Uma fatia de irresistivel de bolo, perfeito para qualquer hora. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#4a2c2a',
  },

  image:{
    width: 200,
    heighth: 200,
    borderRadiius: 100,
    marginBottom: 20,
    borderColor: '#6b3e2e',
    borderWidht: 3,
  },

  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5e403d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});