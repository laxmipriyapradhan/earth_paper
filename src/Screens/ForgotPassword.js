import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TextComponent } from 'react-native';
import { COLORS, FONTSTYLES, SIZES, TEXTHEADING, windowWidth } from '../Constraints/Generic';
import CustomButton from '../Common/CustomButton';
import CustomTextInput from '../Common/CustomTextInput';
import CustomText from '../Common/CustomText';


const ForgotPassword = ({ route, navigation }) => {
    const { screenName } = route.params || { screenName: 'Mobile' };
    const [togglePlaceholder, setTogglePlaceholder] = useState(screenName === 'Email');
    const { mobileno: initialMobileno } = route.params;
    const [mobileno, setMobileno] = useState(initialMobileno);
    const [errors, setErrors] = useState({});

    const onBtnPress = () => {
        navigation.navigate('OtpValidationemail', { mobileno: mobileno });
        console.log("han bhai a ra h ", mobileno);

    }
    // const onChangePress = () => {
    //     navigation.navigate('Login', mobileno);
    // }


    return (
        <>
            <View style={styles.container}>
                <Image style={{ resizeMode: "contain" }} source={require('../assets/banner.png')} />
                <Text style={styles.text}>Forgot Password</Text>
                <Text style={styles.forgotText}>{TEXTHEADING.textForgotpara}</Text>
                <View style={styles.linksContainer}>

                </View>

                <CustomTextInput
                    textprefix={togglePlaceholder ? "" : "+91"}
                    label={TEXTHEADING.textForgotplaceholder}
                    value={togglePlaceholder ? email : mobileno}
                    onChangeText={togglePlaceholder ? setEmail : setMobileno}

                    error={togglePlaceholder ? errors.email : errors.mobileno}

                />
                <CustomButton text={"Reset password"} onBtnPress={onBtnPress} widthDecrement={60} />

                <CustomText />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,

    },
    textMobile: {
        color: '#303030',
        fontSize: 16,
        marginLeft: 12,
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
    forgotText: {
        color: COLORS.btnborderprimary,
        fontSize: SIZES.h3,
        margin: 27,
        fontWeight: 'bold',
        fontFamily: FONTSTYLES.fontstyling,
    },


    textplaceholder: {
        color: COLORS.placeholderTextColor,
    },
    textplaceholder1:
    {
        marginBottom: 5,
        fontSize: SIZES.h2,
        marginLeft: 30,
        fontWeight: 'bold',
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

export default ForgotPassword;

