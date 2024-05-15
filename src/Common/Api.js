// api.js

import axios from 'axios';
import { Alert } from 'react-native';

const BASE_URL = 'http://65.2.128.231:8082/api/v1/';

// Function to make a POST request
export const postRequest = async (endpoint, data, navigation = null, screenName = null, params = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        requestUID: '4e8ea3bb-b55b-4a6f-ad03-741fee6836c6'
      },
    });
    // console.log('Response:', response.data)

    if (response.status === 200) {
      if (navigation && screenName) {
        navigation.navigate(screenName, params);
      }
    } else {
      throw new Error('Failed to get a successful response');
    }
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'Failed to perform the operation. Please try again later.');
  }
};


export const getRequest = async (endpoint = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`,{},
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        requestUID: '4e8ea3bb-b55b-4a6f-ad03-741fee6836c6'
      },
    }
    
     );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  postRequest,getRequest
};
