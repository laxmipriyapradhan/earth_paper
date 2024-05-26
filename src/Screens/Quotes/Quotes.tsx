// Quotes.tsx
import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CreateQuoteSvg from '../../assets/SVG/CreateQuoteSvg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Quote/config'; // Adjust the path to where RootStackParamList is defined
import stylesQuotes from './QuotesStyles';

type QuotesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quotes'>;

type Props = {
  navigation: QuotesScreenNavigationProp;
};

const Quotes: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={stylesQuotes.MainContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('CreateQuote')}>
        <CreateQuoteSvg />
      </TouchableOpacity>
    </View>
  );
}

export default Quotes;
