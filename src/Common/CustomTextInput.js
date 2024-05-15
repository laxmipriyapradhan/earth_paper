import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTSTYLES, SIZES } from '../Constraints/Generic';


const CustomTextInput = ({ value, onChangeText, placeholder, type, placeholderTextColor1, error }) => {
  return (
    <View
      style={{
        margin: 30,
        bottom: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DADADA',
        height: 60,
        paddingLeft: 10,
        fontSize: 20,
      }}>

      <TextInput style={{ fontFamily: FONTSTYLES.fontstying, fontSize: SIZES.h2, }}
        placeholderTextColor={placeholderTextColor1 ? placeholderTextColor1 : COLORS.placeholderTextColor}
        placeholder={placeholder} 
        placeholderStyle={{
          position: 'absolute',
          top: -100,
          left: 10,
          fontWeight: 'bold',
          backgroundColor: '#FFFFFF'
        }}
        value={value} 
        onChangeText={onChangeText}>

        </TextInput>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.errorColor,
    marginTop: 5,
  },

});
