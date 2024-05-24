import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './src/Screens/Navigation/AppNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppNavigation/>
    
  );
};

export default App;
