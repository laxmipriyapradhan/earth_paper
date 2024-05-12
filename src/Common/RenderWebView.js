import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const RenderWebView = ({url}) => {
  return (
    <>
      <WebView source={{uri: url}} style={{flex: 1}} />
    </>
  );
};

export default RenderWebView;