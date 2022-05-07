import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {useState} from 'react'
const App = () => {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.text}>
      <Text style={styles.text}>Работает</Text>
      <Button title="Кнопка" onPress={()=>setCount(count+1)}/>
      <Text style={{textAlign:'center'}}>{count}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    justifyContent:'center',
    alignContent:'center',
    fontSize: 20,
    color: 'red',
    top:200
    
  }
})
