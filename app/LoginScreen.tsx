import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();

  const handleGetOtp = () => {
    // Logic to send OTP can be added here
    console.log(`Sending OTP to ${phoneNumber}`);
    setOtpSent(true); // Simulate OTP sent
  };

  const handleSubmit = () => {
    // Logic for OTP verification can be added here
    console.log(`Verifying OTP: ${otp}`);
    router.push('/LandingPage'); // Navigate to landing page after verification
  };

  const handleResendOtp = () => {
    // Logic to resend OTP can be added here
    console.log(`Resending OTP to ${phoneNumber}`);
  };

  return (
    <ImageBackground 
      source={require('../assets/images/LoginBackground.jpg')} 
      style={styles.container}
      resizeMode="cover" // Cover the whole screen
    >
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo2.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>LOGIN</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad" // To open number keypad
        />
        
        {otpSent && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad" // To open number keypad
            />
            <Button title="Submit OTP" onPress={handleSubmit} color="#007BFF" /> 
          </>
        )}
        
        {!otpSent ? (
          <Button title="Get OTP" onPress={handleGetOtp} color="#007BFF" /> 
        ) : (
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendOtp}>Resend OTP</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity onPress={() => router.push('../register')}>
          <Text style={styles.register}>Do not have an account? Register now</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Increased opacity of background
    padding: 20,
  },
  logoContainer: {
    marginBottom: 45, // Decrease margin bottom to bring title closer
    marginTop: 0, // Adjust this value to move logo closer to the top
  },
  logo: {
    width: 250, // Keeping the logo size intact
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  resendOtp: {
    color: 'red',
    marginTop: 10,
  },
  register: {
    marginTop: 20,
    color: 'red',
  },
});
