import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('')
  const [token, setToken] = useState(null)

 const onSubmit = async() => {
        await AsyncStorage.setItem('token', username)
        if (username === 'berkman' && password === '123123') {
            alert('Успешно!')
            navigation.navigate('Main')
            
        }else {
            navigation.navigate('login')
        }
    }

    const tokenlogin = async() => {
        const value = await AsyncStorage.getItem('token')
        console.log(value)
        //if (value !== null) {
          //  navigation.navigate('Main')
          //  console.log('Connected')
       // }else {
         //   console.log('No connected')
       // }
    }

    tokenlogin()

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:("https://t6k8i7j6.stackpathcdn.com/wp-content/uploads/2021/11/quiztime-title-mobile-retina.gif")}} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name: "
          placeholderTextColor="black"
          onChangeText={(value) => setUsername(value)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password: "
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    top:100,
    zIndex:1,
    width:350,
    height:240,
    resizeMode:"conteain"
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    bottom:310,
    marginBottom: 20,
    alignItems: "flex-start",
    borderWidth:4,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems:'center',
    alignText:'center'
  },
 
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "white",
    bottom:5,
    borderWidth:4,
  },
});
