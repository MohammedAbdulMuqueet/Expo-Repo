import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/meditation.png')} style={styles.image} />
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFFFE4', // Light green background
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 80,
    resizeMode: 'contain',
  },
});
