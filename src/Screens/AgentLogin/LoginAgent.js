import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {BASE_URL, COLORS, FONTSTYLES, windowWidth} from '../../Constraints/Generic';
import RenderWebView from "../../Common/GoogleReCaptcha"
import axios from 'axios';
import GoogleReCaptcha from '../../Common/GoogleReCaptcha';

const LoginAgent = ({navigation}) => {

  
  const [agentno, setAgentno] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [agentno]);

  const validateForm = () => {
    let errors = {};

    if (!agentno) {
      errors.agentno = "Agent code is required.";
    } else if (!/^[a-zA-Z0-9]{6}$/.test(agentno)) {
      errors.agentno = "Agent code should be alphanumeric and exactly 6 characters long.";
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
     
      agentCode: agentno,
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
      Alert.alert('Login with code', 'correct!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('PasswordValidationAgent', {agentno: agentno}),
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
    // console.error('API request failed', error);
  
    // Check if the error has a response object
    if (error.response && error.response.status === 400) {
      
      Alert.alert(
        'Agent Exists',

        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('PasswordValidationAgent', {agentno: agentno}),
          },
        ]
      );
    
    } else {
      // Handle other errors
      Alert.alert('Error', 'An error occurred while processing your request.');
    }
  }
    
  };
  
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{resizeMode: 'contain'}}
          source={require('../../assets/banner.png')}
        />
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
            placeholder="      Enter Agent Code"
            value={agentno}
            onChangeText={newagentno => setAgentno(newagentno)}
            style={{fontSize: 18, marginLeft: 5}}
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
          
          <GoogleReCaptcha url={'https://diagnal-react-workshop.web.app/'}
          siteKey={"6Ld77tgpAAAAALLcXBoa_Yc11n6GBsSBjmRIS8mG"}
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
            marginLeft: 20,
            bottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.iconConatiner}>
            <Image
              style={styles.icon}
              source={require('../../assets/chevrons-right.png')}
            />
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: 18,
                marginLeft: 80,
              }}>
              Send OTP
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('EmailLogin')}>
            <Text style={styles.linkText}>Login with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Login with mobile number</Text>
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
    alignItems: 'center',
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
  iconConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'cover',

    marginLeft: -120,
  },
});

export default LoginAgent;
