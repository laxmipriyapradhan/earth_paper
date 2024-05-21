import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, TEXTHEADING, windowHeight, windowWidth } from '../Constraints/Generic';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import OTPTextView from 'react-native-otp-textinput';
import { postRequest } from '../Common/Api';
import CustomText from '../Common/CustomText';


const OtpValidationemail = ({ route, navigation }) => {
    
    const { mobileno } = route.params || {};
    console.log("hnnn", mobileno);
    
    const [showResend, setShowResend] = useState(false);
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        let timerId;

        const startTimer = () => {
            timerId = setInterval(() => {
                setShowResend(true);
            }, 30000);
        };

        startTimer();

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const onBtnPress = async() => {
        if (!otp) {
            setError('Please enter OTP');
            return;
        }
        try {
            // Make API call or perform other actions
            await postRequest('otp/validate', {}, navigation, 'Reset');
          } catch (error) {
            console.error('postRequest error:', error);
            // Handle errors from postRequest function
          }

    }

    const handleOtpChange = (otp) => {
        setOtp(otp);
        setError('');
    }

    const onChangePress = () => {
        navigation.navigate('Login', {mobileno: mobileno});
    }

    const onResendbtnPress = () => {
        resendVerifyOTP()
    }

    const resendVerifyOTP = async() => {
        // Reset timer and hide resend option
        setShowResend(false);
        setTimeout(() => setShowResend(true), 30000);
        try {
            // Make API call or perform other actions
           const response= await postRequest('otp/generate', {} );
          
           
          } catch (error) {
            console.error('postRequest error:', error);
            // Handle errors from postRequest function
          }

       
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
                <Text style={styles.text}>Authentication required</Text>
                <View style={styles.linksContainer}>

                    <Text style={styles.textMobile}>{"+91"+ mobileno}</Text>


                    <TouchableOpacity onPress={onChangePress}>
                        <Text style={[styles.linkText, {textDecorationLine: 'underline', }]}>Change</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.forgotText}>{TEXTHEADING.textReset}</Text>
                    {/* <Text style={styles.textplaceholder1}>Enter OTP</Text> */}
                    <OTPTextView
                        containerStyle={styles.otpContainer}
                        textInputStyle={styles.otpInput}
                        handleTextChange={handleOtpChange}
                        inputCount={6}
                    />
                    <TouchableOpacity onPress={onResendbtnPress}>
                        {/* <Text style={[styles.linkText, { color: COLORS.btnPrimary, bottom:25, marginLeft:340}]}>Resend</Text> */}
                        {showResend ? (
                            <Text style={[styles.linkText, { color: COLORS.btnPrimary, bottom: 25, marginLeft: 340 }]}>

                                Resend
                            </Text>

                        ) : (

                            <Text style={[styles.linkText1, { color: COLORS.btnPrimary, bottom: 20, marginLeft: 220 }]}>
                                Resend Code in{' '}
                                <Text style={{ color: 'red' }}>30</Text> secs
                            </Text>
                        )}
                    </TouchableOpacity>

                    
                    {error ? <Text style={{ color: 'red', marginLeft: 30, bottom: 20 }}>{error}</Text> : null}
                    <CustomButton text={"Submit"} onBtnPress={onBtnPress} widthDecrement={60} />
                   <CustomText/>
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
        color: COLORS.secondary,
        fontSize: SIZES.h2,
        marginLeft: 5,
        fontWeight:"bold",
        fontFamily: FONTSTYLES.fontstyling,

    },


    forgotText: {
        color: COLORS.btnborderprimary,
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
        fontFamily: FONTSTYLES.fontstyling,
    },
    textContainer: {
        flex: 1,

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
        color: COLORS.primary 

    },
    linkText1: {
        color: COLORS.textColor1,
        fontSize: 16,

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


    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.btnborderprimary,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: SIZES.h1,

    },

});

export default OtpValidationemail;

