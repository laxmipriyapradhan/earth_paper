import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {COLORS} from '../Constraints/Colors';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../assets/banner.png')} />
        <Text style={styles.text}>Welcome! Login to your account</Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#DADADA',
            height: 60,
            fontSize: 20,
            alignItems: 'center',
            marginHorizontal: 25,
          }}>
          <View style={{alignSelf: 'left'}}>
            <Text style={{fontSize: 18, color: '#303030', marginLeft: 10}}>
              +91
            </Text>
          </View>
          <TextInput
            placeholder=" Enter Mobile Number"
            style={{fontSize: 18, marginLeft: 5}}
            placeholderTextColor={COLORS.placeholderTextColor}
            cursorColor={'black'}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: '#303030',
    fontSize: 20,
    margin: 30,
    fontWeight: 'bold',
  },

  textplaceholder: {
    color: '#BDC0C7',
  },
});

export default Login;
