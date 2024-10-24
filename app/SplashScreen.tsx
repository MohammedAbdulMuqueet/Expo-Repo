import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to login screen after 6 seconds (same total duration as before)
    const timer = setTimeout(() => {
      router.push('/LoginScreen');
    }, 6000); // 6-second delay

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [router]);

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
    alignSelf: 'center',
  },
});
