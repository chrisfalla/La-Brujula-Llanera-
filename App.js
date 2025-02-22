import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
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
