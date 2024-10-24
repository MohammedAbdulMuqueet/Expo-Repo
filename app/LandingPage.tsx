import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      
      {/* Static text instead of typing animation */}
      <Text style={styles.text}>Please Wait ...</Text>
      <Text style={styles.subtext}>We are processing your data...</Text>

      {/* ActivityIndicator for loading ring */}
      <ActivityIndicator size="large" color="#2E7D32" style={styles.loadingRing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFFFE4', // Same background color as Figma
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
  subtext: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  loadingRing: {
    marginTop: 20, // Adjust to place the ring below the text
  },
});
