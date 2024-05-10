import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
  } from 'react-native';
  import React from 'react';
 
  
  const {width, height} = Dimensions.get('screen');
  
  const SlideItem = ({currIndex, item, data, scrollX, index}) => {
    console.log('props', currIndex);
    return (
      <View style={styles.container}>
        <Image source={item.img} resizeMode="contain" style={[styles.image]} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
     
      </View>
    );
  };
  
  export default SlideItem;
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 0,
    },
    image: {
      resizeMode: 'contain',
      marginTop: -100,
    },
    content: {
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 30,
    },
    description: {
      fontSize: 18,
      marginTop: 30,
      color: '#333',
      textAlign: 'center',
      width: width - 40,
    },
  });