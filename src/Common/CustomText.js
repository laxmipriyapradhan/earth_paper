import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, TEXTHEADING } from '../Constraints/Generic';

const CustomText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{TEXTHEADING.textNeed}</Text>
        </View>
    );
};

export default CustomText;

const styles = StyleSheet.create({
    container: {
        //  flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        paddingBottom: 50, 
    },
    textContainer: {
        fontSize: SIZES.h2,
        color: COLORS.btnPrimary,
        fontWeight: "bold",
        textAlign: 'center',
    }
});
