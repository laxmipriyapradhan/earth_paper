import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTSTYLES, windowWidth} from '../Constraints/Colors';



const EmailLogin = ({navigation}) => {

  const [emailaddress, setEmailaddress] = useState('')
  const onBtnPress =()=>{
    navigation.navigate('Passwordvalidation', { emailaddress: emailaddress });

  }




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
            onChangeText={(newMobileno) => setEmailaddress(newMobileno)}
            style={{ fontSize: 18, marginLeft: 30 }}
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Login with mobile number</Text>
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
  alignSelf: 'left',
  marginLeft: -120,

 }
});

export default EmailLogin;
