// QuoteStatusContainer.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './QuoteStatusContainerStyles'; // Import styles specific to this component
import { COLORS } from '../Constraints/Generic';

type Props = {
  headerText?: string;
  footerText?: string;
  children?: React.ReactNode;
};

const QuoteStatusContainer: React.FC<Props> = ({ headerText, footerText, children }) => {
  const textstyleColor = {
    color: headerText === 'Quotes Stats' ? COLORS.secondary : COLORS.onquinary,
  };

  return (
    <View style={styles.QuoteStatusContainer}>
      <View style={styles.headerContainer}>
        <Text style={[styles.textstyle, textstyleColor]}>{headerText}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={[styles.textstyle]}>{footerText}</Text>
      </View>
      <View style={styles.QuotationCards}>
        {children}
      </View>
    </View>
  );
};

export default QuoteStatusContainer;
