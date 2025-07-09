import react from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreem from './screem/HomeScreem';
import SecondaryScreem from './screem/SecondaryScreem';
import CafeScreem from './screem/CafeScreem';
import BoloScreem from './screem/BoloScreem';
import PaoScreem from './screem/PaoScreem';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screem name="Home" component={HomeScreem} options={{ title: 'Bem-vindo!'}}/>
      <Stack.Screem name="Secondary" component={SecondaryScreem} options={{ title: 'Opções Deliciosas'}}/>
      <Stack.Screem name="Cafe" component={CafeScreem} options={{ title: 'Nosso Café'}}/>
      <Stack.Screem name="Bolo" component={BoloScreem} options={{ title: 'Bolo de Chocolate'}}/>
      <Stack.Screem name="Pao" component={PaoScreem} options={{ title: 'Pão Caseiro'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

