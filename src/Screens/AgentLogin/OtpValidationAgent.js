import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowHeight, windowWidth } from '../../Constraints/Generic';
import CustomButton from '../../Common/CustomButton';
import CustomTextInput from '../../Common/CustomTextInput';
import OTPTextView from 'react-native-otp-textinput';
import { postRequest } from '../../Common/Api';

const OtpValidationAgent = ({ route, navigation }) => {
    const { agentno } = route.params;
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
            await postRequest('otp/validate', {}, navigation, 'ResetAgent');
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
        navigation.navigate('LoginAgent', agentno);
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
            await postRequest('otp/generate', {}, navigation, 'ResetAgent');
            console.log("Response",Response);
          } catch (error) {
            console.error('postRequest error:', error);
            // Handle errors from postRequest function
          }

       
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../../assets/banner.png')} />
                <Text style={styles.text}>Authentication required</Text>
                <View style={styles.linksContainer}>
                    <Text style={styles.textMobile}>{agentno}</Text>
                    <TouchableOpacity onPress={onChangePress}>
                        <Text style={[styles.linkText, { color: COLORS.btnPrimary }]}>Change</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.forgotText}>We’ve sent a One Time Password (OTP) to the mobile number above. Please enter it to complete verification</Text>
                    <Text style={styles.textplaceholder1}>Enter OTP</Text>
                    <TouchableOpacity onPress={onResendbtnPress}>
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
                    <OTPTextView
                        containerStyle={styles.otpContainer}
                        textInputStyle={styles.otpInput}
                        handleTextChange={handleOtpChange}
                        inputCount={6}
                    />
                    {error ? <Text style={{ color: 'red', marginLeft: 30, bottom: 20 }}>{error}</Text> : null}
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
        fontSize: SIZES.h2,
        marginLeft: 8,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstying,
    },
    forgotText: {
        color: COLORS.secondary,
        fontSize: SIZES.h3,
        marginLeft: 5,
        padding: 25,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstying,
    },
    text: {
        color: '#303030',
        fontSize: 20,
        marginLeft: 27,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstying,
    },
    textContainer: {
        flex: 1,
    },
    textplaceholder1: {
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
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
    },
});

export default OtpValidationAgent;
