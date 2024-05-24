import { View, Text } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View>
      <Text onPress={()=>navigation.openDrawer()}>Screen1</Text>
    </View>
  )
}

export default Screen1