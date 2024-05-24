import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { COLORS } from '../Constraints/Generic';

const windowWidth = Dimensions.get('window').width;

interface CustomButtonProps {
  text: string;
  onBtnPress?: () => void;
  widthDecrement: number;
  bgColor?: string;
  btnTextColor?: string;
  borderBtnColor?: string;
  borderbtnWidth?: number;
  marginBottomValue?: number;
  btnBackgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onBtnPress,
  widthDecrement,
  bgColor,
  btnTextColor,
  borderBtnColor,
  borderbtnWidth,
  marginBottomValue,
  btnBackgroundColor,
}) => {
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
        marginTop: 25,
        marginLeft: 25,
        marginHorizontal: 20,
        borderColor: borderBtnColor ? borderBtnColor : undefined,
        borderWidth: borderbtnWidth ? borderbtnWidth : undefined,
        marginBottom: marginBottomValue ? marginBottomValue : 0,
      }}
      labelStyle={{
        color: btnTextColor ? btnTextColor : COLORS.AppColor,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
