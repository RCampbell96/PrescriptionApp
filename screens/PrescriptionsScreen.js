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



export default class PrescriptionsScreen extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.PrescriptionInput}>
          <TextInput
            style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Enter Prescription"
            placeholderTextColor="#27408B"
            textAlign='center'
          />
          <View style={styles.Submit}>
            <TouchableOpacity onPress={handlePress}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

handlePress = async () => {
  fetch('https://stark-lake-98779.herokuapp.com/api/prescription', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Prescription: "Yeet"
    }),

  })
    .then(console.log('Hello World'))
    .catch(err => console.log(err))
}

PrescriptionsScreen.navigationOptions = {
  title: 'Prescription List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  PrescriptionInput: {
    alignItems: 'center'
  },
  Submit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
