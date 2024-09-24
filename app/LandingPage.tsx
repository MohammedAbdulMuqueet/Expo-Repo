import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // Navigate to home/dashboard after processing (you can change the route)
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Please Wait ...</Text>
      <Text style={styles.subtext}>We are processing your data...</Text>
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
    width: 150,
    height: 80,
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
});
