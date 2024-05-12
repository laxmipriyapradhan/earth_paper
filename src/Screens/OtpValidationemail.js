import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, windowHeight, windowWidth } from '../Constraints/Colors';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import OTPTextView from 'react-native-otp-textinput';


const OtpValidationemail = ({ route, navigation }) => {
    const { emailaddress } = route.params;
    const [showResend, setShowResend] = useState(false);

    useEffect(() => {
        let timeoutId;

        const waitForOtp = () => {
            timeoutId = setTimeout(() => {
                setShowResend(true);
            }, 30000);
        };

        waitForOtp();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [showResend]);

    const onBtnPress = () => {
        navigation.navigate('Resetemail');

    }
    const onChangePress = () => {
        navigation.navigate('EmailLogin', {emailaddress: emailaddress});
    }
    const onForgotbtnPress = () => {
        console.log("hello world");
    }
    const resendVerifyOTP = () => {
        console.log("hello world");
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
                <Text style={styles.text}>Authentication required</Text>
                <View style={styles.linksContainer}>

                    <Text style={styles.textMobile}>{emailaddress}</Text>


                    <TouchableOpacity onPress={onChangePress}>
                        <Text style={[styles.linkText, { color: COLORS.btnPrimary }]}>Change</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.forgotText}>We’ve sent a One Time Password (OTP) to the email address above. Please enter it to complete verification</Text>
                    <Text style={styles.textplaceholder1}>Enter OTP</Text>
                    <TouchableOpacity onPress={onForgotbtnPress}>
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

                    <OTPTextView
                        containerStyle={styles.otpContainer}
                        textInputStyle={styles.otpInput}
                        handleTextChange={otp => console.log(otp)}
                        inputCount={6}
                    />

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
        color: COLORS.secondary,
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

export default OtpValidationemail;

