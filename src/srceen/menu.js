import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Trangchu from './Trangchu';
import canhan from './canhan';
import { View } from 'react-native-web';



const Tab = createBottomTabNavigator ();
const Menu = () => {
  return(
   
        <Tab.Navigator screenOptions = {{headerShown: false}}>
          <Tab.Screen name = "Trang chủ" component = {Trangchu} options={{
              tabBarlabel: 'Trang chủ',
              tabBarIcon: ({color}) => (
                  <MaterialIcons name="home" size ={26} color ={color}/>
              ),
          }}></Tab.Screen>
          <Tab.Screen name='Cá nhân' component={canhan} options={{
              tabBarlabel: 'Cá nhân',
              tabBarIcon: ({color}) => (
                  <MaterialIcons name='person' size={26} color={color}/>
              )
          }}/>
        </Tab.Navigator>
       
  );
};
export default Menu;  