// Quotes.tsx
import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CreateQuoteSvg from '../../assets/SVG/CreateQuoteSvg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Quote/config'; // Adjust the path to where RootStackParamList is defined
import CommonLayout from '../../Common/CommonLayout';
import styles from './QuotesStyles';
import { Text } from 'react-native';
import { COLORS } from '../../Constraints/Generic';
import QuoteStatusContainer from '../../Common/QuoteStatusContainer'; // Import the reusable component

type QuotesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quotes'>;

type Props = {
  navigation: QuotesScreenNavigationProp;
};

const Quotes: React.FC<Props> = ({ navigation }) => {
  return (
    <CommonLayout blueSectionText="Manage Quote">
      <QuoteStatusContainer 
        headerText="Quotes Stats" 
        footerText="Last updated: 04:45 PM IST today">
     </QuoteStatusContainer>
     <QuoteStatusContainer 
        headerText="Quotes Stats" 
        footerText="Last updated: 04:45 PM IST today">
     </QuoteStatusContainer>
     
     
  
     
      
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateQuote')}>
          <CreateQuoteSvg />
        </TouchableOpacity>
      </View>
    </CommonLayout>
  );
}

export default Quotes;
