import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,Image,View,ImageBackground,Button,Pressable,Alert } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const image_bg = { uri: "https://i.pinimg.com/originals/9f/7e/82/9f7e8255a1c0b5f01c58de4666ea3a6b.gif" };
const button_pressed = () => Alert.alert('Успешно !','Заявка подана')

const App = () => {
  function pressed(){
    alert('Заявка подана !')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image_bg} resizeMode="cover" style={styles.image}>
      <Text style={{textAlign:'center', top:100, color:'#E88E05',fontFamily:'Georgia',fontSize:20, fontWeight:'bold'}}>Подай заявку на Rocket_Hackaton сейчас !</Text>

      <Image style={{ flex:1, left: 10,resizeMode:'contain', width:400, position:'relative'}} source={{
          uri: 'https://cdn.dribbble.com/users/418188/screenshots/3102257/rocket_animation_tubik_studio.gif'
          }}/>
      <Text style = {{bottom: 200, textAlign:'center', margin: 3, marginBottom: 20}}>Поучавствуй в хакатоне и поборись</Text>
      <Text style = {{bottom: 200, textAlign:'center', margin: 3, marginBottom: 20}}>за главный приз: </Text> 
      <Text style = {{bottom: 200, textAlign:'center', margin: 3, marginBottom: 20, color:'#10CA21'}}>1 000 000  ₽</Text>
       
     <Pressable style={styles.button} onPress={button_pressed}>
      <Text style={styles.text}>Подать заявку</Text>
    </Pressable>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 13,
    backgroundColor: '#A70E4A',
    bottom: 70,
    width: 300,
    left: 53
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

export default App;
