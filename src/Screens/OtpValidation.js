import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, TEXTHEADING, windowHeight, windowWidth } from '../Constraints/Generic';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import OTPTextView from 'react-native-otp-textinput';
import { postRequest } from '../Common/Api';
import CustomText from '../Common/CustomText';
import CustomCheck from '../Common/CustomCheck';


const OtpValidation = ({ route, navigation }) => {
    const { mobileno } = route.params;
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

    const onForgotbtnPress = () => {
        navigation.navigate('ForgotPassword', { mobileno: mobileno });
    }

    const onBtnPress = async () => {
        if (!otp) {
            setError('Please enter OTP');
            return;
        }
        try {
            // Make API call or perform other actions
            await postRequest('otp/validate', {}, navigation, 'Homepage');
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
        navigation.navigate('Login', { mobileno: mobileno });
    }

    const onResendbtnPress = () => {
        resendVerifyOTP()
    }

    const resendVerifyOTP = async () => {
        // Reset timer and hide resend option
        setShowResend(false);
        setTimeout(() => setShowResend(true), 30000);
        try {
            // Make API call or perform other actions
            const response = await postRequest('otp/generate', {});


        } catch (error) {
            console.error('postRequest error:', error);
            // Handle errors from postRequest function
        }


    }
    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
                <Text style={styles.text}>{TEXTHEADING.textHeader}</Text>
                <TouchableOpacity onPress={onForgotbtnPress}>
                    <Text style={{ color: COLORS.btnPrimary, marginLeft: 30, marginBottom: 10 }}>{TEXTHEADING.textForgot}</Text>
                </TouchableOpacity>

                <OTPTextView
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.otpInput}
                    handleTextChange={handleOtpChange}

                    inputCount={6}
                />

                <View style={styles.textContainer}>

                    {showResend ? (
                        <TouchableOpacity onPress={onResendbtnPress}>
                            <Text style={[styles.linkText, { color: COLORS.btnPrimary, bottom: 25, marginLeft: 340 }]}>

                                Resend
                            </Text>
                        </TouchableOpacity>
                    ) : (

                        <Text style={[styles.linkText1, { color: COLORS.btnPrimary, bottom: 20, marginLeft: 220 }]}>
                            Resend Code in{' '}
                            <Text style={{ color: 'red' }}>30</Text> secs
                        </Text>
                    )}
                    {error ? <Text style={{ color: 'red', marginLeft: 30, bottom: 20 }}>{error}</Text> : null}
                    <CustomCheck label={TEXTHEADING.textkeepSign} />
                    <CustomButton text={"Submit"} onBtnPress={onBtnPress} widthDecrement={60} />
                    <CustomText />
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

    text: {
        color: '#303030',
        fontSize: 20,
        margin: 30,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstyling,
    },
    textContainer: {
        flex: 1,

    },

    textplaceholder: {
        color: COLORS.placeholderTextColor,
    },
    

    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
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

export default OtpValidation;

