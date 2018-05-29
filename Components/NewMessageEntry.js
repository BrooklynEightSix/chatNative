import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    if(this.state.text !== '') console.log(this.state.text, '  message submitted')
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.container}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title='Submit'
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});