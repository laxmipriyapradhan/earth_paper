import { StyleSheet, Text, View, TextInput, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, FONTSTYLES, SIZES, windowWidth } from '../Constraints/Generic';

const CustomTextInput = ({ value, onChangeText, placeholder, placeholderTextColor1, error, textprefix, linksText}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: 35,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: placeholderTextColor1 || COLORS.placeholderTextColor,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 2,
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>
        {placeholder}
      </Animated.Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit
        placeholderTextColor={placeholderTextColor1 || COLORS.placeholderTextColor}
      />
      {textprefix && (
        <View style={styles.textPrefixContainer}>
          <Text style={styles.textPrefix}>
            {textprefix}
          </Text>
        </View>
      )}
      {linksText &&<View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('EmailLogin')}>
            <Text style={styles.linkText}>{linksText}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate('LoginAgent')}>
            <Text style={styles.linkText}>{linksText}</Text>
          </TouchableOpacity> */}
        </View>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 80
  },
  textInput: {
    fontFamily: FONTSTYLES.fontstying,
    fontSize: SIZES.h3,
    height: '100%',
    padding: 0,
    margin: 0,
    marginTop: 70,
    marginLeft: 30

    
  },
  textPrefixContainer: {
    position: 'absolute',
    left: 5,
    bottom:15,
  },
  textPrefix: {
    fontSize: 14,
    color: '#303030',
  },
  errorText: {
    color: COLORS.errorColor,
    marginTop: 20,
    right:10
    
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    right:10,
    top:2,
    // Add horizontal padding to space out the links
  },
  linkText: {
    color: COLORS.textColor,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
