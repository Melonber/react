import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 2, backgroundColor: '#C0BEC4' }}>
      <Text style={{textAlign: 'center', top: 66, fontSize:23}}>"Кадиш.com" Натан Ингаланедер.{"\n"} Издательство "Книжники"</Text>
    </View>
    <View style={{ flex: 6, backgroundColor: '#9C9AA2' }}>
    <Text style={{textAlign: 'center', top: 66, fontSize:18}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
