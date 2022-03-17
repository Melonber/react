import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image,Button} from 'react-native';

export default function App() {
  function pressed(){
    alert('Нажата')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Play Mario right now !</Text>
      <Image style={styles.logo}resizeMode='contain' source={{uri:'https://clipart-best.com/img/mario/mario-clip-art-5.png'}}/>
      <Button
        
        backgroundColor='#f194ff'
        color='#8511DF'
        title="Press me"
        
        onPress={pressed}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 150,
    height: 150,
  },
  text:{
    color:'#F01449',
    fontFamily:'Cochin',
    fontSize: 24,
    bottom: 40
  },

});
