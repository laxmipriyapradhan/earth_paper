import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowWidth } from '../Constraints/Colors';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const PasswordValidation = ({ route, navigation }) => {
  const { mobileno } = route.params;

  const onBtnPress = () => {
    navigation.navigate('Homepage');

  }
  const onChangePress = () => {
    navigation.navigate('Login', mobileno);
  }

  return (
    <>
      <View style={styles.container}>
        <Image style={{resizeMode:"cover"}} source={require('../assets/banner.png')} />
        <Text style={styles.text}>Welcome! Login to your account</Text>
        <View style={styles.linksContainer}>

          <Text style={styles.textMobile}>+91{mobileno}</Text>


          <TouchableOpacity onPress={onChangePress}>
            <Text style={[styles.linkText, { color: COLORS.btnPrimary, }]}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textplaceholder1}>Password</Text>
        

        <CustomTextInput placeholder="Enter password" ></CustomTextInput>
        <CustomButton text={"Login"} onBtnPress={onBtnPress} widthDecrement={60} ></CustomButton>
        <View style={styles.orContainer}>
       
          <View style={styles.line} />
        <Text style= {styles.textOr}>  or  </Text>
        <View style={styles.line} />
   
        </View>
        <CustomButton text={"Send OTP"} onBtnPress={onBtnPress} widthDecrement={60} ></CustomButton>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,

  },
  textMobile: {
    color: '#303030',
    fontSize: 16,
    marginLeft: 12,
    fontWeight: 'bold',
    fontFamily: FONTSTYLES.fontstying,


  },
  text: {
    color: '#303030',
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
    fontFamily: FONTSTYLES.fontstying,
  },

  textplaceholder: {
    color: Colors.placeholderTextColor,
  },
  textplaceholder1:
  {
    marginBottom: 5, 
    fontSize: SIZES.h2,
    margin: 30,
    color: Colors.placeholderTextColor1,

  },
  linksContainer: {
    top: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingHorizontal: 20,
  },
  linkText: {
    color: COLORS.textColor1,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  textOr:{
    textAlign: "center",

  },
  line: {
    flex: 0.5,
    height: 1,
    top: 2.5,
    backgroundColor: COLORS.placeholderTextColor1, 
  },
  orContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth - 60,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    margin: 20

  
  }
});

export default PasswordValidation;

