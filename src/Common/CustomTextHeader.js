import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { COLORS, FONTSTYLES, SIZES } from '../Constraints/Generic'

const CustomTextHeader = ({headertext}) => {
  return (
    <View>
      <Text style= {styles.textHeader}>{headertext}</Text>
    </View>
  )
}

export default CustomTextHeader

 const styles = StyleSheet.create ({
    textHeader:{
    color: COLORS.textColor1,
    fontSize: SIZES.h5,
    marginHorizontal:30,
    marginVertical:20,
    fontWeight: 'bold',
    fontFamily: FONTSTYLES.fontfamily,
  }

 })