import { StyleSheet, Text, View, TextInput, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, FONTSTYLES, SIZES } from '../Constraints/Generic';

const CustomTextInput = ({ value, onChangeText, placeholder, type, placeholderTextColor1, error }) => {
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
    left: 10,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [25, -10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: placeholderTextColor1 ? placeholderTextColor1 : COLORS.placeholderTextColor,
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
        // placeholder={isFocused ? '' : placeholder}
        placeholderTextColor={placeholderTextColor1 ? placeholderTextColor1 : COLORS.placeholderTextColor}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    bottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DADADA',
    height: 60,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: FONTSTYLES.fontstying,
    fontSize: SIZES.h2,
    height: '100%',
  },
  errorText: {
    color: COLORS.errorColor,
    marginTop: 5,
  },
});






// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { COLORS, FONTSTYLES, SIZES } from '../Constraints/Generic';


// const CustomTextInput = ({ value, onChangeText, placeholder, type, placeholderTextColor1, error }) => {
//   return (
//     <View
//       style={{
//         margin: 30,
//         bottom: 20,
//         borderRadius: 10,
//         borderWidth: 2,
//         borderColor: '#DADADA',
//         height: 60,
//         paddingLeft: 10,
//         fontSize: 20,
//       }}>

//       <TextInput style={{ fontFamily: FONTSTYLES.fontstying, fontSize: SIZES.h2, }}
//         placeholderTextColor={placeholderTextColor1 ? placeholderTextColor1 : COLORS.placeholderTextColor}
//         placeholder={placeholder} 
//         value={value} 
//         onChangeText={onChangeText}>

//         </TextInput>
//       {error && <Text style={styles.errorText}>{error}</Text>}
//     </View>
//   );
// };

// export default CustomTextInput;

// const styles = StyleSheet.create({
//   errorText: {
//     color: COLORS.errorColor,
//     marginTop: 5,
//   },

// });
