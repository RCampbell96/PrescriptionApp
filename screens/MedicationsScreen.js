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



export default class MedicationsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress = async () => {
    fetch('https://stark-lake-98779.herokuapp.com/api/prescription', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Prescription: this.state.text
      }),

    })
      .then(console.log('Success'))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.PrescriptionInput}>
          <TextInput
            style={{
              height: 40,
              width: 250,
              borderColor: 'gray',
              borderWidth: 1
            }}
            placeholder="Search Medication"
            placeholderTextColor="#27408B"
            textAlign='center'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            onSubmitEditing={this.handlePress}
          />
          <View style={styles.Submit}>
            <TouchableOpacity onPress={this.handlePress}>
              <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                textDecorationLine: 'underline'
              }}
              >Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}



MedicationsScreen.navigationOptions = {
  title: 'Prescription Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  PrescriptionInput: {
    flex: 2,
    alignItems: 'center',
  },
  Submit: {
    flex: 2,
    alignItems: 'center',
  }
});
