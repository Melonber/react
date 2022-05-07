 import React from 'react';
 import {
   SafeAreaView,
   Text,
 } from 'react-native';
import Main from './Main';
import FirstPage from './Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 const App = () => {
 
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={FirstPage} />
        <Stack.Screen name="Main" component={Main} />

      </Stack.Navigator>
    </NavigationContainer>
   );
 };
 
 
 export default App;
