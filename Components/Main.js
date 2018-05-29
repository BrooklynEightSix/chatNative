import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewMessageEntry from './NewMessageEntry'
import { gotMessages } from '../store'
import { connect } from 'react-redux';
import Messages from './Messages'


class App extends React.Component {

  componentDidMount(){
    this.props.loadInitialData()
    console.log(this.props.messages)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.messages.map((message,index) => <Messages message={message} key={index}/>)}
        <Text>{'\n'}</Text>
        <Text>Enter your message below</Text>
        <NewMessageEntry />
      </View>
    );
  }
}

const mapDispatch = (dispatch) => {
  return{
    loadInitialData(){
     dispatch(gotMessages())
    }
  }
}

const mapState = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapState, mapDispatch)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});