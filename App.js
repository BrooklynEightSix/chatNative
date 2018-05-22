import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewMessageEntry from './Components/NewMessageEntry'
import Corgi from './Components'

export default class App extends React.Component {
  render() {
    return (
      <Corgi />
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
