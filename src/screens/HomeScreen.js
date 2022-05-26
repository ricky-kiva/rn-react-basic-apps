import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>Vento</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 12,
    textTransform: 'uppercase'
  },
});

export default HomeScreen;
