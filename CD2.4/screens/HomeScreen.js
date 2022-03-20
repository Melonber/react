import * as React from 'react';
import { StyleSheet, Text, StatusBar,Image,View,Pressable,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
    <Text style={{textAlign:'center', top:30, color:'black',fontFamily:'Georgia',fontSize:20, fontWeight:'bold'}}>
        WATCH</Text>
        <Text style={{textAlign:'center', right: 10,top:35, color:'black',fontFamily:'Georgia',fontSize:15, fontWeight:'bold'}}>
        SERIES</Text>
        
    <Image style={styles.logo} source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png'
        }}/>
        <View style={{top:100}}>
        <Text style = {{bottom:95, left:235}}>Apple watch Series 7</Text>
    <Image style={styles.watches} source={{
        uri: 'https://www.pngplay.com/wp-content/uploads/9/Apple-Watch-Background-PNG-Image.png'
        }}/>
        <Image style={{width:200,height:150,bottom:479,left:200, resizeMode:'contain'}} source={{
        uri: 'https://cdn.svyaznoy.ru/upload/files/image/article-block-image-id/531/Watch.png'
        }}/>  
        <Text style = {{bottom:463, left:30}}>Apple watch Series 6</Text>  
   <Pressable style={styles.button_1} onPress={() => navigation.navigate('Details')}>
    <Text style={styles.text}>Купить</Text>
  </Pressable>
  <Pressable style={styles.button_2} onPress={() => navigation.navigate('Messages')}>
    <Text style={styles.text}>Купить</Text>
  </Pressable>
  </View>

  </View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      
    },
    watches:{
        width: 200,
        height: 200,
        resizeMode: 'contain',
        bottom: 300
    },
    logo:{
        flex:1,
        width:50,
        height:50,
        resizeMode:'contain',
        bottom: 140,
        left: 100
    },
    button_1: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 13,
      backgroundColor: 'black',
      bottom: 450,
      width: 100,
      left: 53,
      height: 45
    },
    button_2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 13,
        backgroundColor: 'black',
        bottom: 494,
        width: 100,
        left: 254,
        height: 45
      },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    image: {
      flex: 1,
      justifyContent: "center",
      position: "relative",
  
    },
  });
  
export default HomeScreen;

