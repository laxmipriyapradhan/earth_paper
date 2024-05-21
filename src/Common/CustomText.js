
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
import React from 'react';
import { COLORS, SIZES, TEXTHEADING, windowHeight, windowWidth } from '../Constraints/Generic';

const CustomText = () => {
    return (
        <View>
            <Text style={styles.textContainer}>{TEXTHEADING.textNeed}</Text>
        </View>
    )
}

export default CustomText

const styles = StyleSheet.create({
    textContainer: {
        fontSize: SIZES.h2,
        color: COLORS.btnPrimary,
        fontWeight: "bold",
        marginLeft: 170,
        height:windowHeight,
        margin: 200,
        width: windowWidth
    }
})