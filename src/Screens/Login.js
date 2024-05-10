import React from 'react';
import { View, Text, StatusBar, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, windowHeight, windowWidth} from "../Constraints/Colors";
import CustomTextInput from '../Common/CustomTextInput';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/banner.png')} />
      <Text style={styles.text}>Welcome! Login to your account</Text>
      {/* <TextInput style={styles.textInput} placeholder=' +91    Enter Mobile Number'></TextInput>   */}
      <View style = {{
        flexDirection:'row',
        marginHorizontal:10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DADADA',
        height: 60,
        fontSize: 20,
        alignItems: "center",
        marginHorizontal: 25

        // justifyContent:''
    }}>
    <View style={{alignSelf:'left'}}>
      <Text style={{fontSize: 20, color:"#303030", marginHorizontal:10 }}>+91</Text>
      </View>
      <TextInput placeholder= ' Enter Mobile Number' style= {{width: windowWidth}} ></TextInput> 
     
    </View>
     
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: windowHeight,

  },
  text: {
    color: "#303030",
    fontSize: 20,
    margin: 30,
    fontWeight: 'bold',

  },

  textplaceholder: {
    color: "#BDC0C7",

  }


});

export default Login;
