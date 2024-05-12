import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Homepage = () => {
  return (
    <>
    
    <WebView source={{uri:"www.google.com"}} style={{flex:1}} />
   </>
  )
}

export default Homepage