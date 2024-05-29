import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { COLORS, SIZES, windowWidth } from '../Constraints/Generic';
import CalenderSvg from '../assets/SVG/CalenderSvg';


interface CustomTextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderTextColor1?: string;
  label?: string;
  error?: string;
  textprefix?: string;
  linksText?: string;
  handleClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showCalendar?: boolean;
  onCalendarIconPress?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor1,
  label,
  error,
  textprefix,
  linksText,
  handleClick,
  showCalendar,
  onCalendarIconPress,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelection = (date: Date) => {
    setSelectedDate(date);
    // You can perform any action with the selected date here
    // For example, update the value of the text input with the selected date
    onChangeText && onChangeText(date.toISOString()); // Convert date to string and pass it to the onChangeText prop
  };

  return (
    <View>
      <TextInput
        label={label}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        mode="outlined"
        underlineColor={COLORS.primary}
        style={styles.inp}
        cursorColor={COLORS.btnborderprimary}
        activeOutlineColor={COLORS.btnborderprimary}
        right={label === "Calendar" && !showCalendar ? (
          <TextInput.Icon
            icon={() => <CalenderSvg />} // Use the `icon` prop correctly
            onPress={onCalendarIconPress}
          />)
          : null}
        onFocus={handleClick} // If showCalendar is true, allow default TextInput behavior. Otherwise, call handleClick
      />
      {textprefix && (
        <View style={styles.textPrefixContainer}>
          <Text style={styles.textPrefix}>{textprefix}</Text>
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
  inp: {
    width: windowWidth - 50,
    marginLeft: 25,
    textAlign: 'left',
    paddingLeft: 14,
  },
  textPrefixContainer: {
    left: 27,
    bottom: 35,
  },
  textPrefix: {
    fontSize: SIZES.h2,
    color: COLORS.secondary,
  },
  errorText: {
    color: COLORS.errorColor,
    marginTop: 5,
    marginLeft: 25,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    marginLeft: 25,
  },
  linkText: {
    color: COLORS.textColor,
    fontSize: 16,
    bottom: 1,
    textDecorationLine: 'underline',
  },
});

export default CustomTextInput;