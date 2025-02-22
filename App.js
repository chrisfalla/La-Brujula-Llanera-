import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Category from './src/components/Category';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Category />
    </SafeAreaView>
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
