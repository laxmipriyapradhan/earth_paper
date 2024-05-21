import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, TEXTHEADING, windowWidth } from '../Constraints/Generic';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import { postRequest } from '../Common/Api';
import CustomText from '../Common/CustomText';


const Reset = ({ navigation }) => {



    const onBtnPress = async () => {
        try {
            // Make API call or perform other actions
            await postRequest('otp/reset', {}, navigation, 'Login');
        } catch (error) {
            console.error('postRequest error:', error);
            // Handle errors from postRequest function
        }

    }
    const onChangePress = () => {
        navigation.navigate('Login', mobileno);
    }
    // const onForgotbtnPress = () => {
    //     navigation.navigate('ForgotPassword');


    // }

    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
                <Text style={styles.text}>Set Password</Text>
                <View style={styles.textResetcontainer}>

                    {/* <Text style={styles.textplaceholder1}>Enter password</Text> */}

                    {/* <CustomTextInput placeholder="at least 6 characters" placeholderTextColor1={COLORS.placeholderTextColor1}></CustomTextInput> */}
                    <CustomTextInput label={"Enter Password"}  placeholder={"At least 6 Characters"}/>
                    <View style={styles.textResetChildcontainer}>
                        {/* <Text style={styles.textplaceholder1}>Re-enter password</Text> */}
                        {/* <CustomTextInput placeholder="at least 6 characters" placeholderTextColor1={COLORS.placeholderTextColor1}></CustomTextInput> */}
                        <CustomTextInput label={"Re-Enter Password"} placeholder={"At least 6 Characters"}/>
                        <CustomButton text={TEXTHEADING.textsetPassword} onBtnPress={onBtnPress} widthDecrement={60} />

                        <CustomText/>
                    </View>
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
        marginHorizontal: 25,
        marginBottom: 20,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstyling,
    },
    
   
    textResetcontainer: {
        flex: 1,
        justifyContent: "space-between",
       
    },
    textResetChildcontainer: {
       marginVertical:20,

    }
});

export default Reset;

