import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,Image,View,ImageBackground,Button,Pressable,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from './Messages';

const button_pressed = () => Alert.alert('Успешно !','Мы оформили ваш заказ')

function DetailsScreen({ navigation }) {
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
                
            <Text style = {{bottom:40, left:140, fontWeight:'bold'}}>Apple watch Series 7</Text>
            <Text style = {{bottom:35, left:140, fontWeight:'bold'}}>Цена: 50 000 ₽</Text>
            <Text style = {{bottom:10, left:150, color:'#22950E',fontWeight:'bold'}}>Есть в наличии</Text>
        <Image style={styles.watches} source={{
            uri: 'https://www.pngplay.com/wp-content/uploads/9/Apple-Watch-Background-PNG-Image.png'
            }}/>
       <Pressable style={styles.button_1} onPress={button_pressed}>
        <Text style={styles.text}>Оформить заказ</Text>
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
            width: 350,
            height: 350,
            resizeMode: 'contain',
            bottom: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        logo:{
            flex:1,
            width:50,
            height:50,
            resizeMode:'contain',
            bottom: 150,
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
          bottom: 250,
          width: 190,
          left: 110,
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
      
  export default DetailsScreen
