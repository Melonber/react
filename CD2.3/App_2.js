import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,Image,View,ImageBackground,Button } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', top:100, color:'#F0005F',fontFamily:'Apple Color Emoji',fontSize:15}}>Register to Rocket_Hackaton now</Text>

      <Image style={{ flex:1, left: 10,resizeMode:'contain', width:400, position:'relative'}} source={{
          uri: 'https://cliply.co/wp-content/uploads/2019/03/371903250_ROCKET_LAUNCH_400px.gif'
          }}/>
     <Button style={styles.button} title='Подать заявку'/>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
  },

  button:{
    top:500,
    color: 'red',
    borderColor: 'black',
    backgroundColor: 'purple',
    borderWidth: 3
  }

});

export default App;
