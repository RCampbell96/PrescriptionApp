import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity
} from 'react-native';

export default function ListsScreen() {
  return (
    <View>
      <Text>
        List of Prescriptions Here
    </Text>
    <TouchableOpacity onPress={handlePress}>
      <Text>GET</Text>
    </TouchableOpacity>
    </View>)

}

handlePress = async () => {
  fetch('https://stark-lake-98779.herokuapp.com/api/prescription', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then(console.log('GET'))
  
}

ListsScreen.navigationOptions = {
  title: 'Prescription List',
};
