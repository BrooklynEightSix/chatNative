import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, TextInput, Button, View } from 'react-native';
import {writeMessage, gotMessages} from '../store'

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    if(this.state.text !== '') //console.log(this.state.text, '  message submitted')
    this.props.sendMessage(this.state.text)
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

const mapDispatch = (dispatch)=>{
  return {
    sendMessage(text){
      dispatch(writeMessage(text))
      dispatch(gotMessages())
    }
  }
}

export default connect(null, mapDispatch)(UselessTextInput)
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});