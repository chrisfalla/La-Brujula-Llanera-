import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import Category from './src/components/Category';

import icon from './assets/icon.png';
export default function App() {
  return <Category/>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
