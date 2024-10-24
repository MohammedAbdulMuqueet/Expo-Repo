import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();

  const handleGetOtp = () => {
    console.log(`Sending OTP to ${phoneNumber}`);
    setOtpSent(true);
  };

  const handleSubmit = () => {
    console.log(`Verifying OTP: ${otp}`);
    router.push('/LandingPage');
  };

  const handleResendOtp = () => {
    console.log(`Resending OTP to ${phoneNumber}`);
  };

  return (
    <ImageBackground 
      source={require('../assets/images/LoginBackground.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <BlurView intensity={50} style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo2.png')} style={styles.logo} />
        </View>
        
        {/* Static text instead of animated text */}
        <Text style={styles.title}>Rediscover Life, It is Yours!</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        
        {otpSent && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit OTP</Text>
            </TouchableOpacity>
          </>
        )}
        
        {!otpSent ? (
          <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
            <Text style={styles.buttonText}>Get OTP</Text> 
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleResendOtp}>
            <Text style={styles.buttonText}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  logoContainer: {
    marginBottom: 55,
    marginTop: 0,
  },
  logo: {
    width: 250,
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    opacity: 0.8,
    textAlign: 'left',
    width: '100%',
    paddingLeft: 20,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 5,
    width: '90%',
    backgroundColor: '#2E7D32',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
