import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { theme } from '../styles/Theme'; 

export default function AppBar() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 180,
    height: 60,
  },
});
