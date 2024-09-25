import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/meditation.png')} 
        style={styles.image} 
      />
      <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    top: 0, 
    width: 250, 
    height: 250, 
    resizeMode: 'contain',
    opacity: 0.65,
    alignSelf: 'center',
  },
});
