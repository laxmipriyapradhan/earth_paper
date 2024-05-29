import React, {memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Icon} from '@rneui/base';
import { AppColor, Size } from '../../app/Utils';
import Fonts from '../../app/Utils/fontSelections';
// import Fonts from '../Utils/fontSelections';
// import {AppColor, Size} from '../Utils';

const {width, height} = Dimensions.get('screen');

type InputButtonProps = {
  onSubmit?: any;
  disabled?: boolean;
  btnStyle?: ViewStyle;
  btnTexStyle?: TextStyle;
  btnName?: string;
  rightIcon?: boolean;
  iconName?: string;
  iconType?: string;
  iconColor?: string;
  iconSize?: number;
  iconStyle?: ViewStyle;
  iconContainerStyle?: ViewStyle;
  labelText: string;
};

const ButtonText = (props: InputButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onSubmit}
      disabled={props.disabled ?? false}
      style={[props.btnStyle]}>
      {props.labelText.length > 0 && (
        <View style={{bottom: '38%', left: '2%', justifyContent: 'center'}}>
          <Text
            style={{
              backgroundColor: AppColor.appWhite,
              position: 'absolute',
              padding: '1%',
              fontSize: Size.width / 30,
            }}>
            {props.labelText}
          </Text>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          alignSelf: 'center',
        }}>
        <Text style={[styles.btnName, props.btnTexStyle]}>
          {props.btnName ?? 'Press Me'}
        </Text>
        {props.rightIcon && (
          <View style={[props.iconContainerStyle, {alignItems: 'center'}]}>
            <Icon
              name={props.iconName ?? 'cancel'}
              type={props.iconType}
              color={props.iconColor}
              size={props.iconSize}
              style={props.iconStyle}
              containerStyle={props.iconContainerStyle}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnName: {
    fontSize: width / 24,
    fontFamily: Fonts.DMSansBold,
  },
});

export default memo(ButtonText);
