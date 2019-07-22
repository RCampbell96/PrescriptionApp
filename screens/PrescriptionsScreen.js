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



export default function PrescriptionsScreen() {
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

// phone IP 172.16.21.105

handlePress = async () => {
  fetch('/api/prescription', {
    method: 'POST',
    body: JSON.stringify({
      "Prescriptions": "Oxycodon",
    }),
    headers: 'application/json'
  })
  .then((res) => res.json())
  .then((resJson)=>{
    return resJson.Prescription
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
  Submit:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
