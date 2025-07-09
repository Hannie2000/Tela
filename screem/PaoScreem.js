import react from 'react';

import{View, Text, Image, StyleSheet} from 'react-native';

export default function PaoScreem(){
  return(
    <View style={style.container}>
      <Text style={styles.title}>Um Pao Caseiro</Text> 
      <Image 
      source={{uri: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/ccb94de6fc9ce97326f562576b08373c/Derivates/2db80b1c80f2a28e606cdbb32da596adca112c15.jpg'}}
      style={styles.Image}></Image>
      <Text style={styles.description}> O aroma e o sabor de um pao caseiro fresquinho, feito com carinho. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf0',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#8b4513',
  },

  image :{
    width: 200,
    heighth: 200,
    borderRadiius: 100,
    marginBottom: 20,
    borderColor: '#deb887',
    borderWidht: 3,
  },

  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#a0522d',
    marginHorizontal: 15,
    lineHeight: 25,
  },
});