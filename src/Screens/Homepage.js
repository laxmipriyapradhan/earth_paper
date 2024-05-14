import {View, Text, StyleSheet} from 'react-native';
import React, { createElement } from 'react';
import {WebView} from 'react-native-webview';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Text>
        Home screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }


})

export default Homepage;

