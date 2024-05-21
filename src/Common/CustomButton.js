import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, windowWidth } from '../Constraints/Generic';
import { Button } from 'react-native-paper';

const CustomButton = ({ text, onBtnPress, widthDecrement, bgColor ,btnTextColor, borderBtnColor, borderbtnWidth, marginBottomValue}) => {
  return (
  
    <Button
      onPress={onBtnPress}
      mode="contained"
      
      style={{
        
        width: windowWidth - widthDecrement,
        height: 40,
        backgroundColor: bgColor ? bgColor : COLORS.btnPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop:25,
        marginLeft:25,
        marginHorizontal:20,
        borderColor: borderBtnColor? borderBtnColor: null,
        borderWidth: borderbtnWidth? borderbtnWidth : null,
        marginBottom:{marginBottomValue}

      }}> {text}
      {/* <View>
        <Text style={{ color: btnTextColor ? btnTextColor : COLORS.AppColor, fontWeight: '600', fontSize: 18 }}>
          {text}
        </Text>
        </View> */}
       
        
        </Button>
  //   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
  //   Press me
  // </Button>

       
       
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
