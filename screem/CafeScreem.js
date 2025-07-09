import react from 'react';

import{View, Text, Image, StyleSheet} from 'react-native';

export default function CafeScreem(){
  return(
    <View style={style.container}>
      <Text style={styles.title}>Um Cafe Fresquinho</Text> 
      <Image 
      source={{uri: 'https://soranews24.com/wp-content/uploads/sites/3/2019/12/hatcoffee10.jpgm'}}
      style={styles.Image}>
      <Text style={styles.description}> Comece o dia com uma xicara de cafe aromatico e revigorante. </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#5c4033',
  },

  image:{
    width: 200,
    heighth: 200,
    borderRadiius: 100,
    marginBottom: 20,
    borderColor: '#d2b48c',
    borderWidht: 3,
  },

  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#654321',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});