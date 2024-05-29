import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import CreateQuoteSvg from '../../assets/SVG/CreateQuoteSvg';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Quote/config'; // Adjust the path to where RootStackParamList is defined
import CommonLayout from '../../Common/CommonLayout';
import styles from './QuotesStyles';
import QuoteStatusContainer from '../../Common/QuoteStatusContainer'; // Import the reusable component
import CustomChart from '../../Common/CustomChart';
import CustomQuotation from '../../Common/CustomQuotation';

type QuotesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Quotes'
>;

type Props = {
  navigation: QuotesScreenNavigationProp;
};

type QuoteData = {
  id: string;
  headerText: string;
  footerText: string;
  quotaionNo?: any;
};

const Quotes: React.FC<Props> = ({navigation}) => {
  const [quotesData, setQuotesData] = useState<QuoteData[]>([]);

  // Simulate fetching data from an API or other source
  useEffect(() => {
    const fetchData = async () => {
      // Replace this with actual data fetching logic
      const data = Array.from({length: 3}, (_, index) => ({
        id: (index + 1).toString(),
        headerText: 'Samuels Raj\n9442151231.remyjan21@gmail.com',
        footerText: `Last updated: ${new Date().toLocaleTimeString()} today`,
        quotaionNo: "124589900",
      }));
      setQuotesData(data);
    };
    fetchData();
  }, []);

  const renderItem = ({item}: {item: QuoteData}) => (
    <CustomQuotation
      headerText={item.headerText}
      quotaionNo={item.quotaionNo}
      
    />
  );

  return (
    <CommonLayout blueSectionText="Manage Quote">
       <QuoteStatusContainer headerText= {'Quotes Stats'} footerText={ `Last updated: ${new Date().toLocaleTimeString()} today`}>
        <CustomChart />
      </QuoteStatusContainer>
      <FlatList
        contentContainerStyle={styles.QuotesContainer}
        data={quotesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={25}
        onEndReachedThreshold={10}
        onEndReached={() => {}}
      />
     
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateQuote')}>
          <CreateQuoteSvg />
        </TouchableOpacity>
      </View>
    </CommonLayout>
  );
};

export default Quotes;
