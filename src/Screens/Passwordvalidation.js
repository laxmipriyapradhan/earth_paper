import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowWidth } from '../Constraints/Generic';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import { postRequest } from '../Common/Api';

const PasswordValidation = ({ route, navigation }) => {
  const mobileno = route.params?.mobileno;
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onChangePress = () => {
    navigation.navigate('Login', { mobileno: mobileno });
  }

  const onForgotbtnPress = () => {
    navigation.navigate('ForgotPassword', { mobileno: mobileno });
  }

  const onBtnPress = async () => {
    // Clear previous errors
    setErrors({});
  
    // Validate password
    if (!password) {
      setErrors({ password: "Password is required." });
      return; // Prevent further execution
    }
   // here login api end point will add
    try {
      // Make API call or perform other actions
      await postRequest('otp/generate', {}, navigation, 'Homepage');
    } catch (error) {
      console.error('postRequest error:', error);
      // Handle errors from postRequest function
    }
  }
  
  const onBtnsendOtp =async()=>{
    
    try {
      // Make API call or perform other actions
      await postRequest('otp/generate', {}, navigation, 'OtpValidation', { mobileno: mobileno });
    } catch (error) {
      console.error('postRequest error:', error);
      // Handle errors from postRequest function
    }
  
  }

  return (
    <View style={styles.container}>
      <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
      <Text style={styles.text}>Welcome! Login to your account</Text>
      <View style={styles.linksContainer}>
        <Text style={styles.textMobile}>+91{mobileno}</Text>
        <TouchableOpacity onPress={onChangePress}>
          <Text style={[styles.linkText, { color: COLORS.btnPrimary }]}>Change</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textplaceholder1}>Password</Text>
      <TouchableOpacity onPress={onForgotbtnPress}>
        <Text style={[styles.linkText, { color: COLORS.btnPrimary, bottom: 30, marginLeft: 260 }]}>Forgot Password ?</Text>
      </TouchableOpacity>
      <CustomTextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        error={errors.password} 
      />
      <CustomButton text={"Login"} onBtnPress={onBtnPress} widthDecrement={60} />
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.textOr}>  or  </Text>
        <View style={styles.line} />
      </View>
      <CustomButton text={"Send OTP"} onBtnPress={onBtnsendOtp} widthDecrement={60} bgColor={COLORS.primary} btnTextColor={COLORS.btnPrimary} borderBtnColor={COLORS.btnPrimary} borderbtnWidth={1.5} />
      <Text style={{ fontSize: SIZES.h2, color: COLORS.btnPrimary, fontWeight: "bold", marginLeft: 170, margin: 20, width: windowWidth }}>Need Help</Text>
    </View>
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
  textplaceholder1: {
    marginBottom: 5,
    fontSize: SIZES.h2,
    margin: 30,
    color: COLORS.placeholderTextColor1,
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
  textOr: {
    textAlign: "center",
  },
  line: {
    flex: 0.5,
    height: 1,
    top: 2.5,
    backgroundColor: COLORS.placeholderTextColor1,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth - 60,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    marginBottom: 15
  }
});

export default PasswordValidation;
