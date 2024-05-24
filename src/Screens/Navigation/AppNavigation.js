import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Slider from '../Slider'
import Login from '../Login'
import PasswordValidation from '../Passwordvalidation'
import Homepage from '../Quotes/Homepage'
import ForgotPassword from '../ForgotPassword'
import Passwordvalidationemail from '../Passwordvalidationemail'
import OtpValidation from '../OtpValidation'
import Reset from '../Reset'
import OtpValidationemail from '../OtpValidationemail'
import Resetemail from '../Resetemail'
import { PaperProvider} from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './Main'
import { lightTheme, darkTheme } from '../../Utils/Theme';
const Stack= createStackNavigator()
const AppNavigation = () => {
  const isDarkMode = false;
   
  return (
    <SafeAreaProvider>
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <StatusBar translucent backgroundColor="transparent" />
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Homepage" >
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
        {/* <Stack.Screen
          name="EmailLogin"
          component={EmailLogin}
          options={{ headerShown: false }}
        /> */}
      
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
        {/* <Stack.Screen
          name="ForgotPasswordemail"
          component={ForgotPasswordemail}
          options={{ headerShown: false }}
        /> */}
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
          component={Homepage}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
         
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  </SafeAreaProvider>
  )
}

export default AppNavigation