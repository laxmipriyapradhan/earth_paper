import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'


const CustomTextInput = ({value, onChangeText, placeholder, type}) => {
  return (
    <View style = {{
        margin: 30,
        bottom: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DADADA',
        height: 60,
        paddingLeft: 10,
        fontSize: 20

    }}>
     <TextInput placeholder= {placeholder}></TextInput>
     
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})