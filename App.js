import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Slider from './src/Screens/Slider';
import {StatusBar} from 'react-native';
import PasswordValidation from './src/Screens/Passwordvalidation';
import EmailLogin from './src/Screens/EmailLogin';
import Homepage from './src/Screens/Homepage';
import ForgotPassword from './src/Screens/ForgotPassword';

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
      <StatusBar translucent backgroundColor="transparent" />
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
           <Stack.Screen
            name="Passwordvalidation"
            component={PasswordValidation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EmailLogin"
            component={EmailLogin}
            options={{headerShown: false}}
          />
              <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{headerShown: false}}
          />
              <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
