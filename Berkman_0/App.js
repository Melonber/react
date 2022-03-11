import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableHighlight,View, Platform } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Main = () => {
  const pressed = ()=> alert('Копнка была нажата')
  return(
    <SafeAreaView style={styles.main}>
      <Text>Hello, world !</Text>
      <Button title='Кнопка' onPress={pressed}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: "center",
      alignItems:"center"
    },
   
});

export default Main;
