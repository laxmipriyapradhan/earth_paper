import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import slides from '../Constraints/slides';
import {COLORS} from '../Constraints/Generic';
import CustomButton from '../Common/CustomButton';

const Slider = ({navigation}) => {
  // const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const flatListRef = useRef(null);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0]?.index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const goToNextSlide = () => {
    if (index < slides.length - 1) {
      flatListRef.current.scrollToIndex({index: index + 1});
    }
  };

  const handleOnboardingComplete = () => {
    navigation.navigate('Login');
  };

  const onBtnPress = () => {
    if (slides.length === index + 1) {
      handleOnboardingComplete();
    } else {
      goToNextSlide();
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <StatusBar backgroundColor={'#EEEEEE'} /> */}
      <View
        style={{
          // height: windowHeight * 0.8 - 20,
          backgroundColor: 'white',
          // marginTop: -30,
        }}>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={({item, currIndex}) => (
            <SlideItem
              currIndex={currIndex}
              item={item}
              data={slides}
              scrollX={scrollX}
              index={index}
            />
          )}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <Pagination data={slides} scrollX={scrollX} index={index} />
      <View
        style={{
          position: 'absolute',
          bottom: 40,
        }}>
        <CustomButton
          text={slides.length == index + 1 ? 'Done' : 'Skip'}
          onBtnPress={onBtnPress}
          widthDecrement={60}
        />
      </View>
    </View>
  );
};

export default Slider;
