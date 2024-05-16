import React, {useState ,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {BASE_URL, COLORS, FONTSTYLES, textHaeder, windowWidth} from '../Constraints/Generic';
import GoogleReCaptcha from '../Common/GoogleReCaptcha';
import axios from 'axios';
import CustomTextHeader from '../Common/CustomTextHeader';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';

const Login = ({navigation}) => {
  const [mobileno, setMobileno] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSelected, setSelection] = useState(false);

 // updated code
  useEffect(() => {
    validateForm();
  }, [mobileno]);

  const validateForm = () => {
    let errors = {};

    if (!mobileno) {
      errors.mobileno = "Mobile number is required.";
    } else if (
      !/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[7896]\d{9}|(\d[ -]?){10}\d$/.test(
        mobileno
      )
    ) {
      errors.mobileno = "Mobile number should only contain numbers.";
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
     
      mobileNumber: mobileno,
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
      Alert.alert('Login with number', 'correct!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Passwordvalidation', {mobileno: mobileno}),
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
            onPress: () => navigation.navigate('Passwordvalidation', {mobileno: mobileno}),
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
          source={require('../assets/banner.png')}
        />
        {/* <Text style={styles.text}>Welcome! Login to your account</Text> */}
        <Text style={styles.text}>{textHaeder.textHaeder1}</Text>
        <CustomTextInput
        textprefix={"+91"}
        placeholder="Enter Mobile number"
        value={mobileno}
        onChangeText={setMobileno}
        linksText={"Login with Email ID"}
        error={errors.mobileno} 
       
      />
        <View
          style={{
            height: 150,
            backgroundColor: 'white',
            marginTop: 10,
            marginHorizontal:10,
            width:windowWidth ,
            resizeMode: "contain",
            
          }}>
           
          <GoogleReCaptcha url={'https://diagnal-react-workshop.web.app/'} siteKey={"6Ld77tgpAAAAALLcXBoa_Yc11n6GBsSBjmRIS8mG"}/>
          
          
        
        </View>
        <CustomButton text={"Send OTP"} onBtnPress={onBtnPress} widthDecrement={50}  />
        
        
      
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
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

export default Login;
