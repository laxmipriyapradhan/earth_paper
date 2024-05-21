import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, TEXTHEADING, windowHeight, windowWidth } from '../Constraints/Generic';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import { postRequest } from '../Common/Api';
import CustomCheck from '../Common/CustomCheck';


const Passwordvalidationemail = ({ route, navigation }) => {
  const { email } = route.params;
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");

  const onChangePress = () => {
    navigation.navigate('EmailLogin', { email: email });
  }
  const onForgotbtnPress = () => {
    navigation.navigate('ForgotPasswordemail', { email: email });
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

  const onBtnsendOtp = async () => {

    try {
      // Make API call or perform other actions
      await postRequest('otp/generate', {}, navigation, 'OtpValidationAgent', { email: email });
    } catch (error) {
      console.error('postRequest error:', error);
      // Handle errors from postRequest function
    }

  }
  return (
    <>
      <View style={styles.container}>
        <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
        <Text style={styles.text}>{TEXTHEADING.textPassword}</Text>
        <View style={styles.linksContainer}>

          <Text style={styles.textMobile}>{email}</Text>


          <TouchableOpacity onPress={onChangePress}>
            <Text style={[styles.linkText, { color: COLORS.btnPrimary }]}>Change</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.textplaceholder1}>Password</Text> */}



        <CustomTextInput
          label={"Enter password"}
          onChangeText={setPassword}
          error={errors.password} ></CustomTextInput>
        <TouchableOpacity onPress={onForgotbtnPress}>
          <Text style={[styles.linkText, { color: COLORS.btnPrimary, marginLeft: 40, marginBottom:10}]}>{TEXTHEADING.textForgot}</Text>
        </TouchableOpacity>
        <CustomCheck label={TEXTHEADING.textkeepSign}/>
        <CustomButton text={"Login"} onBtnPress={onBtnPress} widthDecrement={60} />

        {/* <View style={styles.orContainer}>

          <View style={styles.line} />
          <Text style={styles.textOr}>  or  </Text>
          <View style={styles.line} />

        </View> */}

        <Text style={styles.needConatiner}>{TEXTHEADING.textNeed}</Text>
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
    fontFamily: FONTSTYLES.fontstyling,


  },
  text: {
    color: '#303030',
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
    fontFamily: FONTSTYLES.fontstyling,
  },


  linksContainer: {
    marginBottom: 10,
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

 needConatiner: {
    fontSize: SIZES.h2,
    color: COLORS.btnPrimary,
    fontWeight: "bold",
    marginLeft: 170,
    height: windowHeight,
    marginTop: 180,
    width: windowWidth,

  }

});

export default Passwordvalidationemail;

