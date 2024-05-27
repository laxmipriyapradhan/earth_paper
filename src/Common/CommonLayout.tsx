import React from 'react';
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../Constraints/Generic';
import ArrowSvg from '../assets/SVG/ArrowSvg';

interface CommonLayoutProps {
  children: React.ReactNode;
  blueSectionStyle?: ViewStyle;
  whiteSectionStyle?: ViewStyle;
  blueSectionText?: string;
  ArrowSVG?: React.ComponentType<{ onPress?: () => void }>; 
  goBack?: () => void;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children, blueSectionStyle, whiteSectionStyle, blueSectionText, ArrowSVG, goBack }) => {
  
  return (
    <View style={styles.container}>
      <View style={[styles.blueSection, blueSectionStyle]}>
        <View style={styles.blueSectionContent}>
          <TouchableOpacity onPress={goBack}>
            {ArrowSVG && <ArrowSVG onPress={goBack} />}
          </TouchableOpacity>
          {blueSectionText && <Text style={styles.blueSectionText}>{blueSectionText}</Text>}
        </View>
      </View>
      <View style={[styles.whiteSection, whiteSectionStyle]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.onPrimary,
  },
  blueSection: {
    flex: 0.15,
    backgroundColor: COLORS.onPrimary,
    justifyContent: 'center',
    paddingHorizontal: 16, // Add padding for better alignment
  },
  blueSectionContent: {
    flexDirection: 'row', // Align arrow and text in a row
    alignItems: 'center', // Center vertically
    marginTop: 30
  },
  blueSectionText: {
    color: COLORS.AppColor,
    fontSize: 16,
    marginLeft: 10, // Space between arrow and text
  },
  whiteSection: {
    flex: 1,
    backgroundColor: COLORS.AppColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
});

export default CommonLayout;
