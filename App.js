import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial/';
import TelaRestaurantes from './componentes/TelaRestaurantes/';
import TelaPasseios from './componentes/TelaPasseios/';
import TelaHospedagens from './componentes/TelaHospedagens/';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component = { TelaInicial } />
        <Stack.Screen name="Restaurante" component = { TelaRestaurantes } />
        <Stack.Screen name="Passeios" component = { TelaPasseios } />
        <Stack.Screen name="Hospedagens" component = { TelaHospedagens } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}