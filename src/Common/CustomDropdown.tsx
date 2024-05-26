import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import { windowWidth } from '../Constraints/Generic';
import Dropdownarrow from '../assets/SVG/Dropdownarrow';

interface DropdownItem {
  label: string;
  value: string;
}

const CustomDropdown: React.FC<{
  label: string;
  value: any;
  setValue: (value: string) => void;
  list: DropdownItem[];
  showDropDown: boolean;
  setShowDropDown: (value: boolean) => void;
}> = ({ label, value, setValue, list, showDropDown, setShowDropDown }) => {
  return (
    <View style={styles.customDropdown}>
      <DropDown
        label={label}
        mode="outlined"
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={value}
        setValue={setValue}
        list={list}
      />
      <TouchableOpacity style={styles.arrowIconContainer} onPress={() => setShowDropDown(!showDropDown)}>
        <Dropdownarrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  customDropdown: {
    position: 'relative',
  },
  arrowIconContainer: {
    position: 'absolute',
    top: '50%',
    right: 12,
    transform: [{ translateY: -8 }],
  },
});

export default CustomDropdown;
