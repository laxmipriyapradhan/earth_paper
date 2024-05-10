import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, windowWidth} from '../Constraints/Colors';

const CustomButton = ({text, onBtnPress}) => {
  return (
    <TouchableOpacity
      onPress={onBtnPress}
      style={{
        width: windowWidth - 60,
        height: 50,
        backgroundColor: COLORS.btnPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      }}>
      <View>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
