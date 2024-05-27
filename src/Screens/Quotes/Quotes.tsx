// Quotes.tsx
import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import CreateQuoteSvg from '../../assets/SVG/CreateQuoteSvg';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Quote/config'; // Adjust the path to where RootStackParamList is defined
import stylesQuotes from './QuotesStyles';
import CommonLayout from '../../Common/CommonLayout';
import CustomChart from '../../Common/CustomChart';

type QuotesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Quotes'
>;

type Props = {
  navigation: QuotesScreenNavigationProp;
};

const Quotes: React.FC<Props> = ({navigation}) => {
  return (
    <CommonLayout>
      <CustomChart />
      <View style={stylesQuotes.MainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateQuote')}>
          <CreateQuoteSvg />
        </TouchableOpacity>
      </View>
    </CommonLayout>
  );
};

export default Quotes;
