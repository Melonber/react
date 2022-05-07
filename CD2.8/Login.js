import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
export let name = ''


const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  name = userName

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, styles.padd]}>
        <Text style={styles.textStyle}>
          Введите ваше имя:
        </Text>
        {}
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Введите значение'}
          style={styles.inputStyle}
        />
        {}
        <Button
          title="Следующая страница"
          onPress={() =>
            navigation.navigate('Main', {
              paramKey: userName,
            })
          }
        />
      </View>
      
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  padd: {
    bottom: -100,

  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
});
