// Login.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';
import SvgComponent from '../assets/Svg_Image/App_Header';
import GoogleReCaptcha from '../Common/GoogleReCaptcha';
import { Checkbox } from 'react-native-paper';
import { BASE_URL, COLORS, FONTSTYLES, SIZES, TEXTHEADING, windowHeight, windowWidth } from '../Constraints/Generic';
import CustomCheckBox from '../Common/CustomCheck';

const Login = ({ navigation, route }) => {
  const { screenName } = route.params || { screenName: 'Mobile' };
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = React.useState(false);
  const [togglePlaceholder, setTogglePlaceholder] = useState(screenName === 'Email');

  const handleClick = () => {
    setTogglePlaceholder(!togglePlaceholder);
    navigation.setParams({ screenName: togglePlaceholder ? 'Mobile' : 'Email' });
  };

  const validateForm = () => {
    let errors = {};

    if (togglePlaceholder) {
      if (!email) {
        errors.email = "Email ID is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = "Invalid email format.";
      }
    } else {
      if (!mobileno) {
        errors.mobileno = "Mobile number is required.";
      } else if (!/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[7896]\d{9}|(\d[ -]?){10}\d$/.test(mobileno)) {
        errors.mobileno = "Mobile number should only contain numbers.";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onBtnPress = async () => {
    if (!validateForm()) return;

    const agentData = togglePlaceholder ? { email: email } : { mobileNumber: mobileno }
    console.log(agentData);

    try {
      const response = await axios.post(`${BASE_URL}login/search`, agentData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          requestUID: '4e8ea3bb-b55b-4a6f-ad03-741fee6836c6'
        },
      });
    
      if (response.status === 200) {
        if (togglePlaceholder) {
          Alert.alert('Login Successful', 'correct!', [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Passwordvalidationemail', { email: email }),
            },
          ]);
        } else {
          Alert.alert('Login Successful', 'correct!', [
            {
              text: 'OK',
              onPress: () => navigation.navigate('OtpValidation', { mobileno }),
            },
          ]);
        }
      } else {
        Alert.alert('Error', 'An error occurred while processing your request. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Alert.alert('Agent Exists', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Passwordvalidation', { mobileno }),
          },
        ]);
      } else {
        Alert.alert('Error', 'An error occurred while processing your request.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <SvgComponent />
      <Text style={styles.text}>{TEXTHEADING.textHeader}</Text>
      <CustomTextInput
        textprefix={togglePlaceholder ? "" : "+91"}
        label={togglePlaceholder ? "Enter Email ID" : "Enter Mobile number"}
        value={togglePlaceholder ? email : mobileno}
        onChangeText={togglePlaceholder ? setEmail : setMobileno}
        linksText={"Login with Email ID"}
        error={togglePlaceholder ? errors.email : errors.mobileno}
        handleClick={handleClick}
      />
      <View style={{ height: 100, backgroundColor: 'white', marginTop: 10, marginHorizontal: 10, width: windowWidth, resizeMode: "contain" }}>
        <GoogleReCaptcha url={'https://diagnal-react-workshop.web.app/'} siteKey={"6Ld77tgpAAAAALLcXBoa_Yc11n6GBsSBjmRIS8mG"} />
      </View>
      <CustomCheckBox label= {TEXTHEADING.textTerms} textlabel={TEXTHEADING.textLabel} textandLabel={TEXTHEADING.textandlabel} additionallabel={TEXTHEADING.additionalLabel} />
      <CustomButton text={togglePlaceholder ? "Enter Password" : "Send OTP"} onBtnPress={onBtnPress} widthDecrement={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: windowHeight,
    width: windowWidth,
   
  },
  text: {
    color: COLORS.textColor1,
    fontSize: SIZES.h1,
    margin: 20,
    fontWeight: 'bold',
    fontFamily: FONTSTYLES.fontstyling,
  },
});

export default Login;
