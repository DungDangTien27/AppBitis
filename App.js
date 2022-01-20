import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Chitietsp from './src/srceen/Chitietsp';
import menu from './src/srceen/menu';

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:  false }}
      initialRouteName = {"Trangchu"}
      >
        <Stack.Screen name='Trangchu' component={menu}></Stack.Screen>
        <Stack.Screen name='Chitiet' component={Chitietsp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  };
export default App;