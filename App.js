import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import icon from './assets/icon.png';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ width: 200 }}>bienvenidos a la app de turismo de yopal</Text>
      <StatusBar style="auto" />
      <Text>hola mundo</Text>
      {/* <Image blurRadius={1} source={icon} style={{
        width: 120,
        height: 300,
        resizeMode: 'contain'
      }} /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
