import React, { memo } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import DatePicker from "react-native-date-picker";

interface DatePickerProps {
  label?: string;
  onPress?: any;
  value?: string;
  mandatoryText?: boolean;
  right?: any;
  isError?: boolean;
  errorMsg?: any;
  inputContainerStyle?: any;
  inputStyle?: ViewStyle;
  // DatePicker Props
  modal: boolean;
  mode: "date" | "time" | "datetime";
  open?: boolean;
  date: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
  textColor?: any;
  disabled?: boolean;
  labelStyle?: TextStyle;
  pressableStyle?: ViewStyle;
}

const CustomDatePicker = (prop: DatePickerProps) => {
  return (
    <View>
      <DatePicker
        modal={prop.modal}
        mode={prop.mode}
        open={prop.open}
        date={prop.date}
        minimumDate={prop.minimumDate}
        maximumDate={prop.maximumDate}
        onConfirm={prop.onConfirm}
        onCancel={prop.onCancel}
        theme="light"
      />
    </View>
  );
};

export default memo(CustomDatePicker);
