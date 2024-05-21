import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, FONTSTYLES, SIZES, windowWidth } from '../Constraints/Generic';
import { TextInput } from 'react-native-paper';


const CustomTextInput = ({ value, onChangeText, placeholder, placeholderTextColor1,label, error, textprefix, linksText, handleClick }) => {
 
  return (
    <View>
    {/* // <View style={styles.container}>
    //   <Animated.Text style={labelStyle}>
    //     {placeholder}
    //   </Animated.Text> */}
      <TextInput
        // style={styles.textInput}
        label={label}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        mode='outlined'
        underlineColor = {COLORS.primary}
        style={styles.inp}
        cursorColor={COLORS.btnborderprimary}
        activeOutlineColor={COLORS.btnborderprimary}
       
       
        
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        // blurOnSubmit
        // placeholderTextColor={placeholderTextColor1 || COLORS.placeholderTextColor}
      />
      {textprefix && (
        <View style={styles.textPrefixContainer}>
          <Text style={styles.textPrefix}>
            {textprefix}
          </Text>
        </View>
      )}
      {linksText && (
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={handleClick}>
            <Text style={styles.linkText}>{linksText}</Text>
          </TouchableOpacity>
        </View>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
  
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   marginVertical: 5,
  //   marginHorizontal: 25,
  //   borderRadius: 5,
  //   borderWidth: 1,
  //   borderColor: COLORS.borderColor,
  //   height: 60,
  //   paddingHorizontal: 5,
  //   justifyContent: 'center',
  //   marginBottom: 80
  // },
  // textInput: {
  //   fontFamily: FONTSTYLES.fontstying,
  //   fontSize: SIZES.h3,
  //   height: '100%',
  //   padding: 10,
  //   margin: 0,
  //   marginTop: 65,
  //   marginLeft: 20
  // },
  inp:{
     width: windowWidth - 50,
     marginLeft: 25,
     textAlign: "left",
     paddingLeft: 14,
     
  },
  textPrefixContainer: {
    // position: 'absolute',
    left: 27,
    bottom: 35,
  },
  textPrefix: {
    fontSize: SIZES.h2,
    color: COLORS.secondary
  },
  errorText: {
    color: COLORS.errorColor,
    marginTop: 5,
    marginLeft:25,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    marginLeft:25,

    
    
    
  },
  linkText: {
    color: COLORS.textColor,
    fontSize: 16,
    bottom:1,
    textDecorationLine: 'underline',
  },
});

export default CustomTextInput;
