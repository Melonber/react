import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight:"bold", color:"black", fontSize:20}}>Журнал Bright {'\n'} </Text>
      <View style={styles.box}>
        <Text style={{color:'blue', fontSize: 17, top:50, left: 18}}>Новости</Text>
        <Image
        style={{width: 300, height: 220, top: 100, right: 50}}
        source={require('./assets/ava.jpg')}
      />
      <Text style={{position:'absolute' ,top: 350,left:28,fontWeight:"bold", color:"black", fontSize:23}}>Тревожные признаки  в {'\n'} поведении мужчины</Text>
      <Text style={{position:'absolute' ,top: 430,left:28,fontWeight:"normal", color:"black", fontSize:15}}>
       Психолог Галина Янко поделилась ценными{'\n'}советами с нашими читательницами, как во{'\n'}время заметить тревожные признаки в поведении{'\n'}мужчины в самом начале отношений.
      </Text>
      </View>
                    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#CDCBD2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  box: {
    flex: 0,
    backgroundColor:'white',
    width: 400,
    height: 600,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },

});
