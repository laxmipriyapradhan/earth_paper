import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Slider from './src/Screens/Slider';
import {StatusBar} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Slider"
            component={Slider}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
