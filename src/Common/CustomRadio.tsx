import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { COLORS } from '../Constraints/Generic';

interface RadioOption {
  value: string;
  label: string;
}

interface CustomRadioProps {
  initialCheckedRadio?: string;
  onRadioChange?: (value: string) => void;
  text: string;
  options: RadioOption[];
}

const CustomRadio: React.FC<CustomRadioProps> = ({ initialCheckedRadio = '', onRadioChange, text, options }) => {
  const [checkedRadio, setCheckedRadio] = useState<string>(initialCheckedRadio);

  const handleRadioChange = (value: string) => {
    setCheckedRadio(value);
    if (onRadioChange) {
      onRadioChange(value);
    }
  };

  return (
    <View>
      <Text style={styles.textContainer}>{text}</Text>
      <View style={styles.shareContainer}>
        {options.map((option) => (
          <View key={option.value} style={styles.radioContainer}>
            <RadioButton
              value={option.value}
              status={checkedRadio === option.value ? 'checked' : 'unchecked'}
              onPress={() => handleRadioChange(option.value)}
            />
            <Text style={{color:COLORS.quaternary}}>{option.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginRight: 100,
    color: COLORS.quaternary
  },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginHorizontal: -20
    
  },
});

export default CustomRadio;
