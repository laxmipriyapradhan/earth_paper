import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { BASE_URL, COLORS, FONTSTYLES, windowWidth} from '../Constraints/Generic';
import RenderWebView from '../Common/GoogleReCaptcha';
import axios from 'axios';
import GoogleReCaptcha from '../Common/GoogleReCaptcha';



const EmailLogin = ({navigation}) => {

  const [emailaddress, setEmailaddress] = useState('')
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    validateForm();
  }, [emailaddress]);

  const validateForm = () => {
    let errors = {};

   
    if (!emailaddress) {
      errors.emailaddress = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(emailaddress)) {
      errors.emailaddress = "Email is invalid.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
    
  }

  const onBtnPress = async() => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please  the fields correctly.');
      return;
    }
    const agentData = {
     
      emailAddress: emailaddress,
      // password: password,
    };
  
  try {
    console.log("agentData", agentData);
    

    const response = await axios.post(
      `${BASE_URL}login/search`,
      agentData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          requestUID: '4e8ea3bb-b55b-4a6f-ad03-741fee6836c6'
        },
      }
    );
  
    console.log('response', response.data);
  
    // Check the status code of the response
    if (response.status === 200) {
      // Successful registration
      Alert.alert('Login with email ', 'correct!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Passwordvalidationemail', {emailaddress: emailaddress}),
        },
      ]
      );
    
      console.log("response", response);
      // You may navigate to another screen or perform additional actions here
    } else {
      // Handle other status codes
      console.error('Unexpected status code', response.status);
      Alert.alert(
        'Error',
        'An error occurred while processing your request. Please try again.',
      
      );
    }
  } catch (error) {

    if (error.response && error.response.status === 400) {
      
      Alert.alert(
        'Agent Exists',

        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Passwordvalidationemail', {mobileno: mobileno}),
          },
        ]
      );
    
    } else {

      Alert.alert('Error', 'An error occurred while processing your request.');
    }
  }

  };


  return (
    <>
      <View style={styles.container}>
        <Image style={{resizeMode: "contain"}} source={require('../assets/banner.png')} />
        <Text style={styles.text}>Welcome! Login to your account</Text>
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
    
          <TextInput
            placeholder="Enter email address"
            value= {emailaddress}
            onChangeText={(newemailaddress) => setEmailaddress(newemailaddress)}
            style={{ fontSize: 18, marginLeft: 10 }}
            placeholderTextColor={COLORS.placeholderTextColor}
            cursorColor={'black'}
          />
          </View>
          <View
          style={{
            
            height: 150,
            backgroundColor: 'white',
            marginTop: 20,
            top: 10,
            width:windowWidth ,
            resizeMode: "contain",
           
          }}>
          
          <GoogleReCaptcha url={'https://diagnal-react-workshop.web.app/'} siteKey={"6Ld77tgpAAAAALLcXBoa_Yc11n6GBsSBjmRIS8mG"}  />
          
      
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
            marginLeft: 20,
            bottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
      }}>
   <View style={styles.iconConatiner}>
      <Image style={styles.icon} source={require('../assets/chevrons-right.png')} />
        <Text style={{color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 80 }}>
        Send OTP
        </Text>
      </View>
    </TouchableOpacity>

 
    <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Login with mobile number</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginAgent')}>
          <Text style={styles.linkText}>LoginAgent</Text>
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
  text: {
    color: '#303030',
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

export default EmailLogin;
