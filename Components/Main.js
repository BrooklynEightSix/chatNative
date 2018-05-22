import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewMessageEntry from './NewMessageEntry'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your message below</Text>
        <NewMessageEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});