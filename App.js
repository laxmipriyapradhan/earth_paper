import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Slider from './src/Screens/Slider';
import { StatusBar } from 'react-native';
import PasswordValidation from './src/Screens/Passwordvalidation';
import EmailLogin from './src/Screens/EmailLogin';
import Homepage from './src/Screens/Homepage';
import ForgotPassword from './src/Screens/ForgotPassword';
import Passwordvalidationemail from './src/Screens/Passwordvalidationemail';
import ForgotPasswordemail from './src/Screens/ForgotPasswordemail';
import OtpValidation from './src/Screens/OtpValidation';
import Reset from './src/Screens/Reset';
import OtpValidationemail from './src/Screens/OtpValidationemail';
import Resetemail from './src/Screens/Resetemail';
import LoginAgent from './src/Screens/AgentLogin/LoginAgent';
import PasswordValidationAgent from './src/Screens/AgentLogin/PasswordValidationAgent';
import ForgotPasswordAgent from './src/Screens/AgentLogin/ForgotPasswordAgent';
import OtpValidationAgent from './src/Screens/AgentLogin/OtpValidationAgent';
import ResetAgent from './src/Screens/AgentLogin/ResetAgent';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PaperProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Slider"
            component={Slider}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Passwordvalidation"
            component={PasswordValidation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EmailLogin"
            component={EmailLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Passwordvalidationemail"
            component={Passwordvalidationemail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPasswordemail"
            component={ForgotPasswordemail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OtpValidation"
            component={OtpValidation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reset"
            component={Reset}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OtpValidationemail"
            component={OtpValidationemail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Resetemail"
            component={Resetemail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginAgent"
            component={LoginAgent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PasswordValidationAgent"
            component={PasswordValidationAgent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPasswordAgent"
            component={ForgotPasswordAgent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OtpValidationAgent"
            component={OtpValidationAgent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetAgent"
            component={ResetAgent}
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
