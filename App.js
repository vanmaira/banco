import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Home from './Componentes/Home';
import Formulario from './Componentes/Formulario';
import Financas from './Componentes/Financas';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style="auto" />

      <Tab.Navigator initialRouterName='Home'
        screenOptions={({route})=>({
          tabBarIcon:({color, size})=>{
              let iconName;

              switch(route.name){
                case 'Home':
                  iconName = 'home';
                break;
                case 'Investir':
                  iconName = 'wallet-outline';
                break;
                case 'Dicas':
                  iconName = 'md-warning';
                break;
              }
              return <Ionicons name={iconName} size={size} color={color}/>
          }

      })}
        tabBarOptions={{
          activeTintColor:'red',
          inactiveTintColor: 'gray'
      }}>

        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Investir' component={Formulario}/>
        <Tab.Screen name='Dicas' component={Financas}/>

      </Tab.Navigator>
    
      
      
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
