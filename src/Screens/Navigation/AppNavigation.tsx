import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Slider from '../Slider';
import Login from '../Login';
import PasswordValidation from '../Passwordvalidation';
import Homepage from '../Quotes/Homepage';
import ForgotPassword from '../ForgotPassword';
import Passwordvalidationemail from '../Passwordvalidationemail';
import OtpValidation from '../OtpValidation';
import Reset from '../Reset';
import OtpValidationemail from '../OtpValidationemail';
import Resetemail from '../Resetemail';
import Main from './Main';
import { lightTheme, darkTheme } from '../../Utils/Theme';
import BottomTabs from '../Quote/BottomtabHome';
import CreateQuote from '../Quotes/CreateQuote'; // Ensure this is imported
import { RootStackParamList } from '../Quote/config'; // Adjust the path to where RootStackParamList is defined

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const isDarkMode = false;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Homepage">
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
              name="Homepage"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quotes"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateQuote"
              component={CreateQuote}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
