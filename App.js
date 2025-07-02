import React, {unestade} from 'react';

import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {

    if(true){
      navigation.navigate('HomeScreen');
    }else{    
      alert('Por favor, preencha todas os campos');
      }
  };

  Return (
  <View style={style.container}>
  <TextInput style={style.input} 
    placeholder="Email"
    value={email} 
    onChangeText={setEmail}  />

  <View style={style.container}>
  <TextInput style={style.input} 
    placeholder="Senha"
    secureTextEntry={true}
    value={password} 
    onChangeText={setPassword}  />

    <Pressable style={style.button} onPress={handleLogin}>
    <Text style={style.buttonText}>Entrar</Text>
    </Pressable>
    </View>
  );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#6A0C0B',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      color: 'white',
    },

    Input: {
      width: '100%',
      height: 40,
      borderColor: '#FBCA03',
      color: 'white',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    Button:{
      backgroundColor: '#AA0505',
      padding: 10,
      borderRadius: 5,
      borderColor: '#FBCA03',
    },
    ButtonText: {
      color: 'white',
      textAlign: 'center',
    },
});

export default LoginScreen;

