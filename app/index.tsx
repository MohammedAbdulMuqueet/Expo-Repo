import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import SplashScreen from './SplashScreen';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/LoginScreen'); // Redirect to login after 3 seconds
    }, 3000);
  }, []);

  return <SplashScreen />;
}
