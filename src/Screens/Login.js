import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTSTYLES, windowWidth } from '../Constraints/Colors';
import CustomButton from '../Common/CustomButton';
import SplashScreen from 'react-native-splash-screen';



const Login = ({ navigation }) => {

  const [mobileno, setMobileno] = useState('')
  const onBtnPress = () => {
    navigation.navigate('Passwordvalidation', { mobileno: mobileno });

  }




  return (
    <>
      <View style={styles.container}>
        <Image style={{resizeMode: "contain"}} source={require('../assets/banner.png')} />
        <Text style={styles.text}
        
        >Welcome! Login to your account</Text>
        <View
          style={{
            flexDirection: 'row',

            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#DADADA',
            height: 60,
            fontSize: 20,
            alignItems: 'center',
            marginHorizontal: 25,
          }}>
          <View style={{ alignSelf: 'left' }}>
            <Text style={{ fontSize: 18, color: '#303030', marginLeft: 10 }}>
              +91
            </Text>
          </View>
          <TextInput
            placeholder=" Enter Mobile Number"
            value={mobileno}
            onChangeText={(newMobileno) => setMobileno(newMobileno)}
            style={{ fontSize: 18, marginLeft: 5 }}
            placeholderTextColor={COLORS.placeholderTextColor}
            cursorColor={'black'}
          />
        </View>
        <TouchableOpacity
      onPress={onBtnPress}
      style={{
        width: windowWidth - 40, //change
        height: 60,
        backgroundColor: COLORS.btnPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <View style={styles.iconConatiner}>
      <Image style={styles.icon} source={require('../assets/chevrons-right.png')} />
        <Text style={{color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 80 }}>
        Send OTP
        </Text>
      </View>
    </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('EmailLogin')}>
            <Text style={styles.linkText}>Login with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>


      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,


  },
  btncontainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',

  },
  text: {
    color: COLORS.textColor1,
    fontSize: 20,
    margin: 30,
    fontWeight: 'bold',
    fontFamily: FONTSTYLES.fontstying,
  },

  textplaceholder: {
    color: '#BDC0C7',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingHorizontal: 20, // Add horizontal padding to space out the links
  },
  linkText: {
    color: '#303030',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  iconConatiner:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"

  },
  icon: {
  resizeMode:"cover",
 
  marginLeft: -120,

 }
});

export default Login;
