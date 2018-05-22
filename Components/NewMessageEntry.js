import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'TESTINGS' };
  }

  render() {
    return (
      <TextInput
        style={styles.container}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
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