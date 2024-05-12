import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowHeight, windowWidth } from '../Constraints/Colors';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';


const OtpValidation = ({ route, navigation }) => {
    const { mobileno } = route.params;

    const onBtnPress = () => {
        navigation.navigate('Homepage');

    }
    const onChangePress = () => {
        navigation.navigate('Login', mobileno);
    }
    const onForgotbtnPress = () => {
        navigation.navigate('ForgotPassword', { mobileno: mobileno });
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
                <Text style={styles.text}>Authentication required</Text>
                <View style={styles.linksContainer}>

                    <Text style={styles.textMobile}>+91{mobileno}</Text>


                    <TouchableOpacity onPress={onChangePress}>
                        <Text style={[styles.linkText, { color: COLORS.btnPrimary }]}>Change</Text>
                    </TouchableOpacity>
                </View>
   
                <View style={styles.textContainer}>
                    <Text style={styles.forgotText}>We’ve sent a One Time Password (OTP) to the mobile number above. Please enter it to complete verification</Text>
                    <Text style={styles.textplaceholder1}>Enter OTP</Text>
                    
                    <CustomTextInput placeholder="Enter password" ></CustomTextInput>
                    <CustomButton text={"Submit"} onBtnPress={onBtnPress} widthDecrement={60} />
                    <Text style={{ fontSize: SIZES.h2, color: COLORS.btnPrimary, fontWeight: "bold", marginLeft: 170, margin: 20, width: windowWidth }}>Need Help</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        height: windowHeight,
       

    },
    textMobile: {
        color: '#303030',
        fontSize: 12,
        marginLeft: 12,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstying,


    },


    forgotText: {
        color: COLORS.textColor1,
        fontSize: SIZES.h3,
       
        padding: 25,
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
    textContainer:{
        flex:1,
      
    },

    textplaceholder: {
        color: COLORS.placeholderTextColor,
    },
    textplaceholder1:
    {
        marginBottom: -40,
        fontSize: SIZES.h2,
        margin: 30,
        bottom: 40,
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

export default OtpValidation;

